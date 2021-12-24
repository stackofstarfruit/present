import './App.css';
import React, { useState } from 'react';

import Splash from './components/Splash';
import Enter from './components/Enter';

function App() {
  
  const [count, setCount] = useState(0);
  
  return (
    
    <div className="App">
      <header className="App-header">
        {count === 0 && <Splash count = {count} setCount = {setCount}/>}
        {count > 0 && count < 5 && <Enter count = {count} setCount = {setCount}/>}
        {count != 0 && 
                <div class="btn-group">
                    <button className="btn btn-success" onClick={() => setCount(count - 1)}>Back</button>
                    <button className="btn btn-success" onClick={() => setCount(count + 1)}>Next</button>
                </div>
        }
      </header>
    </div>
  );
}

export default App;
