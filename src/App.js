import logo from './logo.svg';
import './App.css';
import GameOfLife from './GameOfLife.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome
        </p>
        <GameOfLife />
      </header>
    </div>
  );
}

export default App;
