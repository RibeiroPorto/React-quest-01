import logo from './logo.svg';
import './App.css';
import { Paragrafo } from './componentes/paragraph.js';

function App() {
  return (
    <div className="App">
      <Paragrafo text="Meu texto" backgroundColor="green" color="yellow"></Paragrafo>
    </div>
  );
}

export default App;
