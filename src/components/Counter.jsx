import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const onClickHandler = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div>
      <h3>
        Counter: {count}
      </h3>
      <button onClick={onClickHandler}>Increment 1</button>
    </div>
  )
}

export default Counter;
