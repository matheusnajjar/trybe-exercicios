import './App.css';

const compromissos = ['se exercitar', 'comer', 'dormir', 'trabalhar', 'estudar'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ul>
      <li>{ compromissos.map((compromisso) => Task(compromisso)) }</li>
    </ul>
  );
}

export default App;
