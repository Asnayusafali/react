import './App.css';
import Counter from './Counter';

import {useState} from 'react'
function App() {

  const[count,setCount]=useState(0)
  const AddCount=()=>{
   setCount(count+1)
   
  }

  return (
    <div className="App">
      <button onClick={AddCount}>ADD</button>
    <h1>counter:{count}</h1>
    <Counter name='1st'count={count}/>
    <Counter name='2nd'count={count}/>
    </div>
  );
}

export default App;
