import { useState } from "react"

const ShoppingList = () => {
  const [list, setList] = useState([]);
  const [formValues, setFormValues] = useState({name:"",quantity:""});

  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValues.name && formValues.quantity) {
      setList([...list,{...formValues}]);
      setFormValues({name:"",quantity:""});
    }
  }

  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Product name" value={formValues.name} onChange={handleChange} />
        <input name="quantity" type="number" placeholder="quantity" value={formValues.quantity} onChange={handleChange} />
        <button type="submit">Add product</button>
      </form>
      <ul>
        {list.map((product,index) => {
          return <li key={index}>{product.quantity} - {product.name}</li>
        })}
      </ul>
    </div>
  )
}

export default ShoppingList