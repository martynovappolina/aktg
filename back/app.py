
from flask import Flask, request, Response
from flask_cors import CORS
import rpy2.robjects as robjects

app = Flask(__name__)
CORS(app)

def getDataFromFields(request):
    data = [request.form[field] for field in request.form]
    return [data]


@app.route('/hello')
def hello_world():
    return 'Hello, world!'


@app.route('/predict/', methods=['POST'])
def predict():
    acth_m = [request.form['acth_m']]
    cortisol_sal = [request.form['cortisol_sal']]
    cortisol_uri = [request.form['cortisol_uri']]
    cortisol_bld = [request.form['cortisol_bld']]
    potassium = [request.form['potassium']]
    largest = [request.form['largest']]

    path_to_model = './final_fit.RDa'

    r = robjects.r('''
        library(caret)
        readRDS(file=\'''' + path_to_model + '''')
        df <- data.frame(
        acth_m = ''' + str(acth_m) +
                   ', cortisol_sal= ' + str(cortisol_sal) +
                   ', cortisol_uri=' + str(cortisol_uri) +
                   ', cortisol_bld=' + str(cortisol_bld) +
                   ', potassium=' + str(potassium) +
                   ', largest=' + str(largest) + ''' )
        logit.fit <- readRDS('/Users/alex_aredov/Downloads/final_fit.rda')
        predict(logit.fit, newdata=df, type = "prob")
    ''')

    res = {'data': '', 'status': 200}

    perc = round(r[1])
    res['data'] = perc

    return res
