import { Component, useState } from 'react'
import './CounterStl.css'

const CounterComp = (props) => {


    const [counter,setCounter] = useState(0)
    const [error,setError] = useState(false) 

    const changeValue = (counter) => {
        setError(false)
        setCounter(counter)
    }

    const minusFunc = () => changeValue(counter - 1)

    const plusFunc = () => changeValue(counter + 1)


    const onInpChange = (event) => {
        const counter = Number(event.target.value.trim())
        if (isNaN(counter)) {
            return setError(true)
        }
        setError(false)
        setCounter(counter)

    }

    return (
        <div>
            <button className='prev_btn' onClick={minusFunc}>
                minus
            </button>

            <div className='prev_btn'>
                <input type='number' value={counter} onChange={onInpChange} />

            </div>

            <button className='prev_btn' onClick={plusFunc}>
                plus
            </button>

            {error ? <div>Input only number</div> : null}
        </div>
    )

}


export default CounterComp