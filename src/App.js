import './App.css';
import Button from './components/Button';
import './stylesheets/Button.css';
import Input from './components/Input';
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');
 
  const handleButtonClick = val => {
    setInput(input + val)
  };

  const resetButton = () => ( setInput(''));

  const handleEqual = () => {
    setInput(evaluate(input));
  }


  return (
    <div className="App">
      <div className='calculator-container'>
        <Input input={input}/>
        <div className='row'>
          <Button  handleClick={handleButtonClick}
          >
            1
          </Button>
          <Button  handleClick={handleButtonClick}>
            2
          </Button>
          <Button  handleClick={handleButtonClick}>
            3
          </Button>
          <Button  handleClick={handleButtonClick}>
            +
          </Button>
        </div>
        <div className='row'>
          <Button  handleClick={handleButtonClick}>
            4
          </Button>
          <Button  handleClick={handleButtonClick}>
            5
          </Button>
          <Button  handleClick={handleButtonClick}>
            6
          </Button>
          <Button  handleClick={handleButtonClick}>
            -
          </Button>
        </div>
        <div className='row'>
          <Button  handleClick={handleButtonClick}>
            7
          </Button>
          <Button  handleClick={handleButtonClick}>
            8
          </Button>
          <Button  handleClick={handleButtonClick}>
            9
          </Button>
          <Button  handleClick={handleButtonClick}>
            *
          </Button>
        </div>
        <div className='row'>
          <Button  handleClick={handleEqual}>
            =
          </Button>
          <Button  handleClick={handleButtonClick}>
            0
          </Button>
          <Button  handleClick={handleButtonClick}>
            .
          </Button>
          <Button  handleClick={handleButtonClick}>
            /
          </Button>
          
        </div>
        <div className='row'>
          <ClearButton handleClear={resetButton}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
