import './App.css';
import Header from './components/Header/Header'
import Calculator from './components/Calculator/Calculator';
import { aktgFields } from './data';

function App() {
  return (
    <>
      <Header />
      <div className='container' style={{marginTop: '80px'}}>
        <div className='title'>Калькулятор расчета вероятности АКТГ-эктопированного синдрома</div>
        <p>Калькулятор предназначен для определения вероятности АКТГ-эктопированного синдрома  у пациентов с АКТГ-зависимым эндогенным гиперкортицизмом.</p>
        <Calculator fields={aktgFields} url='predict/' />
        <p style={{marginTop: '100px'}} className="description">Данный калькулятор не является медицинским изделием и не применим для постановки диагноза без консультации врача</p>
        <p 
        style={{marginBottom: '0'}}
        className="description">Голоунина О.О., Белая Ж.Е., Воронов К.А., Солодовников А.Г., Рожинская Л.Я., Мельниченко Г.А., Мокрышева Н.Г., Дедов И.И. Способ определения вероятности АКТГ-эктопированного синдрома у пациентов с АКТГ-зависимым эндогенным гиперкортицизмом. Патент на изобретение №2814146. Патентообладатель ФГБУ «НМИЦ эндокринологии» Минздрава России.</p>
        <p 
        style={{marginTop: '0'}}
        className="description">Алгоритм разработан при поддержке Российского научного фонда (грант РНФ 19-15-00398-П, руководитель академик РАН Мельниченко Г.А.).</p>
      </div>
    </>
  )
}

export default App;
