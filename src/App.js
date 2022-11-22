import './App.css';
import Button from './components/Button';
import './stylesheets/Button.css'

function App() {
  return (
    <div className="App">
      <div className='calculator-container'>
        <div className='row'>
          <Button>
            1
          </Button>
          <Button>
            +
          </Button>
        </div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
      </div>
    </div>
  );
}

export default App;
