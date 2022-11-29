import './App.css';
import Button from './components/Button';
import './stylesheets/Button.css';
import Input from './components/Input';
import ClearButton from './components/ClearButton';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState('Hola');


  return (
    <div className="App">
      <div className='calculator-container'>
        <Input input={input}/>
        <div className='row'>
          <Button>
            1
          </Button>
          <Button>
            2
          </Button>
          <Button>
            3
          </Button>
          <Button>
            +
          </Button>
        </div>
        <div className='row'>
          <Button>
            4
          </Button>
          <Button>
            5
          </Button>
          <Button>
            6
          </Button>
          <Button>
            -
          </Button>
        </div>
        <div className='row'>
          <Button>
            7
          </Button>
          <Button>
            8
          </Button>
          <Button>
            9
          </Button>
          <Button>
            *
          </Button>
        </div>
        <div className='row'>
          <Button>
            =
          </Button>
          <Button>
            0
          </Button>
          <Button>
            .
          </Button>
          <Button>
            /
          </Button>
          
        </div>
        <div className='row'>
          <ClearButton>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
