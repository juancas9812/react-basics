const Greeting = () => {
  const name = 'Juan';
  const date = new Date();

  return (
    <div>
      <h1>Hello there {name}</h1>
      <p>Today is {`${date}`}</p>
    </div>
  )
}

export default Greeting;