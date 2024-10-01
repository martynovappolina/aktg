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
        <div>
        Калькулятор предназначен для определения вероятности АКТГ-эктопированного синдрома  у пациентов с АКТГ-зависимым эндогенным гиперкортицизмом. На основании полученного результата врач сможет персонифицировать алгоритм ведения пациента и выбрать оптимальный объем диагностических исследований.
        </div>
        <Calculator fields={aktgFields} />
      </div>
    </>
  )
}

export default App;
