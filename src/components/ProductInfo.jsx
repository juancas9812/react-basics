const ProductInfo = () => {
  const product = {
    name: 'laptop',
    price: '$1200',
    availability: 'In Stock'
  }
  return (
    <div>
      <p>Product: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Availability: {product.availability}</p>
    </div>
  )
}

export default ProductInfo;