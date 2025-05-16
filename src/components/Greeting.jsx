const Greeting = ({timeOfDay}) => {
  return (
    <div>
      Good {timeOfDay === 'morning' ? 'morning' : 'afternoon'}!
    </div>
  )
}

export default Greeting;