import React from 'react'
import { CounterTwoProps } from './CounterTwo.types'

const CounterTwo = (props:CounterTwoProps) => {
  return (
    <div>
        <h1>Counter Two</h1>
        <p>{props?.count}</p>
        {
            props.increment && (
                <button onClick={props.increment}>Increment</button>
            )
        }
        {
            props.decrement && (
                <button onClick={props.decrement}>Decrement</button>
            )
        }
    </div>

  )
}

export default CounterTwo