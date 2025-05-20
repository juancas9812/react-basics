import { useReducer, useState } from "react";
import {counterReducer, counterReducerSimple, inputReducer} from "../counterReducer";

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

export const Counter3 = () => {
  const [state, dispatch] = useReducer(inputReducer, {count: 0});
  const [input, setInput] = useState('0')

  const handleIncrement = () => {
    dispatch({type: 'increment', payload: Number(input)});
    setInput('0');
  }
  const handleDecrement = () => {
    dispatch({type: 'decrement', payload: Number(input)});
    setInput('0');
  }
  const handleReset = () => {
    dispatch({type: 'reset', payload: Number(input)});
    setInput('0');
  }
  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <div>
      <h1>Counter Switch</h1>
      <p>Count: {state.count}</p>
      <input type="number" value={input} onChange={handleChange} />
      <button type="button" onClick={handleIncrement}>Add</button>
      <button type="button" onClick={handleDecrement}>Subtract</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </div>
  )
}

