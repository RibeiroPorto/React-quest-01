import logo from './logo.svg';
import './App.css';
import { Paragrafo } from './componentes/paragraph.js';
import { Buton } from './componentes/buton';

function App() {
  return (
    <div className="App">
      <Paragrafo text="Meu texto" backgroundColor="green" color="yellow"></Paragrafo>
      <Buton Label="Salvar Arquivo"></Buton>
    </div>
  );
}

export default App;
