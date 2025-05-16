import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";

const App = () => {
  const numbers = [1,2,3,4,5];

  return (
    <section>
      {numbers.map((number, index) => (
        <ul key={index}>
          <li>{number}</li>
        </ul>

      ))}

    </section>
  )
}

export default App;