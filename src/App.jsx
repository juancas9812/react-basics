import Person from "./components/Person";
import Product from "./components/Product";


const App = () => {
  return (
    <div>
      <Person name="Juan" age={26}/>
      <Product name="Apple" price={2}/>
    </div>
  )
}

export default App;