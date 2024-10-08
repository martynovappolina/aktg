
from flask import Flask, request
from flask_cors import CORS
import rpy2.robjects as robjects

app = Flask(__name__)
CORS(app)

@app.route('/hello')
def hello_world():
    return 'Hello, world!'


@app.route('/predict/', methods=['POST'])
def predict():
    acth_m = request.form['acth_m']
    cortisol_sal = request.form['cortisol_sal']
    cortisol_uri = request.form['cortisol_uri']
    cortisol_bld = request.form['cortisol_bld']
    potassium = request.form['potassium']
    largest = request.form['largest']

    path_to_model = './new1_final_fit.rda'


    r = robjects.r('''
        library(caret)
        readRDS(file=\'''' + path_to_model + '''')
        df <- data.frame(
        acth_m = ''' + acth_m +
                   ', cortisol_sal= ' + cortisol_sal +
                   ', cortisol_uri=' + cortisol_uri +
                   ', cortisol_bld=' + cortisol_bld +
                   ', potassium=' + potassium +
                   ', largest=' + largest + ''' )
        logit.fit <- readRDS(\'''' + path_to_model + '''')
        predict(logit.fit, newdata=df, type = "prob")
    ''')

    res = {'data': '', 'status': 200}

    perc = round(float(r[1][0]))
    if (perc >= 0 and perc < 30):
        res['data'] = f'Вероятность АКТГ-эктопированного синдрома: {perc}% Полученный результат указывает на низкую вероятность АКТГ-эктопированного синдрома.'
    if (perc >= 30 and perc < 50):
        res['data'] = f'Вероятность АКТГ-эктопированного синдрома: {perc}% Полученный результат не позволяет исключить наличие у пациента АКТГ-эктопированного синдрома.'
    if (perc >= 50 and perc < 70):
        res['data'] = f'Вероятность АКТГ-эктопированного синдрома: {perc}% Полученный результат не позволяет исключить наличие у пациента болезни Иценко-Кушинга.'
    if (perc >= 70 and perc <= 100):
        res['data'] = f'Вероятность АКТГ-эктопированного синдрома: {perc}% Полученный результат указывает на высокую вероятность АКТГ-эктопированного синдрома.'
    return res

app.run()