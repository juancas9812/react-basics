import { useState, useEffect } from "react"

const CounterEffect = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount+1);
  }

  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])
  return (
    <div>
      <h1>CounterEffect</h1>
      <button onClick={handleClick}>
        +1
      </button>
    </div>
  )
}

export default CounterEffect;