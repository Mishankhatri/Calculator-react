import './App.css';
import {useState} from 'react';

function App() {
  const[prev,setPrev]=useState("");
  const[curr,setCurr]=useState("");

  const handleCurrChange = ({target})=>{
    if(curr.toString().includes('.') && target.innerText.toString() === '.'){
      return curr;
    }
    if(curr.toString() === '0' && target.innerText.toString() === '0'){
      return curr;
    }
    setCurr((curr)=>`${curr.toString()+target.innerText.toString()}`)
  };

  const  compute = (operator)=>{
    let res;
    switch (operator) {
      case '/':
        res = `${parseFloat(prev)/parseFloat(curr)}` 
         break;

      case '*':
        res= `${parseFloat(prev)*parseFloat(curr)}`;
        break;

      case '+':
        res= `${parseFloat(prev)+parseFloat(curr)}`;
        break;

      case '-':
        res = `${parseFloat(prev)-parseFloat(curr)}`;
        break;

      default : return;
    }
    return res;
  }

  const handleOperator = ({target})=>{
    let operator = target.innerText;
    if(prev === '' && curr === '' ) return; 
    if(prev==='' && curr !== null){
      setPrev(` ${curr.toString()+operator.toString()}`);
      setCurr('');
    }
    else{
      if( isNaN(parseFloat(prev.slice(-1))) && !!curr){ 
        setPrev(`${compute(operator)+operator.toString()}`);
        setCurr('');
      }
    }
  }

  const handleAllClear =()=>{
    setPrev('');
    setCurr('');
  }

  const handleDelete =()=>{
    setCurr((curr)=>`${curr.toString().slice(0,-1)}`);
  }
   
  const handleCompute =()=>{
    if(!!prev){
      setCurr(`${compute(prev.slice(-1))}`);
      setPrev('')
    }
  }

  return (
    <div className = 'calculator-grid'>
      <div className='output'>
        <div className='previous-operand'>{prev}</div>
        <div className='current-operand'>{curr}</div>
      </div>
      <button onClick={handleAllClear} className='span-two'>AC</button>
      <button onClick={handleDelete}>DEL</button>
      <button onClick={handleOperator}>/</button>
      <button onClick={handleCurrChange}>1</button>
      <button onClick={handleCurrChange}>2</button>
      <button onClick={handleCurrChange}>3</button>
      <button onClick={handleOperator}>*</button>
      <button onClick={handleCurrChange}>4</button>
      <button onClick={handleCurrChange}>5</button>
      <button onClick={handleCurrChange}>6</button>
      <button onClick={handleOperator} >+</button>
      <button onClick={handleCurrChange}>7</button>
      <button onClick={handleCurrChange}>8</button>
      <button onClick={handleCurrChange}>9</button>
      <button onClick={handleOperator}>-</button>
      <button onClick={handleCurrChange}>.</button>
      <button onClick={handleCurrChange}>0</button>
      <button onClick={handleCompute} className='span-two'> =</button>
    </div>
  );
}

export default App;
