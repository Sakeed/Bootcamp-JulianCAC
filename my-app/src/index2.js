import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import "./index.css"


const WarningNotUsed = () => {
    return <h1> Todavia no se ha usado el contador</h1>
}

const ListOfClicks = ({ clicks }) => {
    return <p> {clicks.join(", ")}</p>
}
const App = (props) => {


    const [counters, setCounter] = useState({
        left: 0,
        right: 0,
        mensaje: ''
    })

    const [clicks, setClicks] = useState([])

    const handleClickLeft = () => {
        setCounter({
            ...counters,
            left: counters.left + 1,
            
        })
        setClicks(preClicks => [...preClicks, 'L'])
    }


    const handleClickRight = () => {
        setCounter({
            ...counters,
            right: counters.right + 1,
             
        })
        setClicks(preClicks => [...preClicks, 'R'])

    }

    const handleReset = () => {
        setCounter({
            right: counters.right=0,
            left: counters.left=0,
        })
        setClicks(preClicks => [])
    }


    return (
        <div>
            {counters.left}
            {/* { <button onClick={() => setLeft(left + 1)}> left </button>
            <button onClick={resetLeft}> reset left</button>
            <button onClick={() => setRight(right + 1)}>right</button> } */}

            <button onClick={handleClickLeft}> left </button>
            <button onClick={handleClickRight}> right </button>
            {counters.right}
            <p>
                <button onClick={handleReset}> reset</button>
            </p>
            
            <p> Cliks totales: {clicks.length}</p>
            {clicks.length === 0 ? (
                <WarningNotUsed />
            ) : (
                <ListOfClicks clicks={clicks} />

            )}

            <h1> La magia de react</h1>

        </div>
    );

};


ReactDOM.render(<App />, document.getElementById('root'))