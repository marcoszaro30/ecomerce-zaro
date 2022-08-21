import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import cards from './components/cards';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <cards/>
        <cards/>
      </header>
    </div>
  );
}

export default App;
