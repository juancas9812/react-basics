const Greeting = ({timeOfDay}) => {
  return timeOfDay === 'morning' ?
    (<div>Good morning!</div>)
    :
    (<div>Good afternoon!</div>)
}

export default Greeting;