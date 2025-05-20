import { useReducer } from "react";
import {counterReducer, counterReducerSimple} from "../counterReducer";

export const Counter1 = () => {
  const [state, dispatch] = useReducer(counterReducerSimple, {count: 0})

  const handleCount = () => {
    dispatch({type: 'simple'});
  }

  return (
    <div>
      <h1>Counter Simple</h1>
      <p>Count: {state.count}</p>
      <button type="button" onClick={handleCount}>
        +1
      </button>
    </div>
  )
}

export const Counter2 = () => {
  const [state, dispatch] = useReducer(counterReducer, {count: 0})

  const handleIncrement = () => {
    dispatch({type: 'increment'});
  }
  const handleDecrement = () => {
    dispatch({type: 'decrement'});
  }
  const handleReset = () => {
    dispatch({type: 'reset'});
  }

  return (
    <div>
      <h1>Counter Switch</h1>
      <p>Count: {state.count}</p>
      <button type="button" onClick={handleIncrement}>+1</button>
      <button type="button" onClick={handleDecrement}>-1</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </div>
  )
}

