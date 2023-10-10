import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import "./index.css"

const Counter = ({number}) => {
  return <h1> {number}</h1>
}

const App = (props) => {

  const [contador, updateContador] = useState(0)


  const handleClick = () => {
    updateContador((contador) => {
      return contador +1 ;
    } );
    //updateContador(contador + 1);
    
  }

  const reset = () => {
    updateContador(0)
  }
  const isEven = contador % 2 === 0
  const mensajePar = isEven ? "Es par" : "Es impaaaar"
  return (
    <div>
      <Counter number ={contador} />
      <h1> La magia de react</h1>
      <p>{mensajePar} </p>
      <button onClick={handleClick}> Incrementar </button>
      <button onClick = {reset}>Reset </button>
    </div>
  );

};


ReactDOM.render(<App />, document.getElementById('root'))





