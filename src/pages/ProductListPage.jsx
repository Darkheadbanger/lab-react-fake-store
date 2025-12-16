import { useEffect, useState } from "react";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:

  useEffect(() => {
    const getAllThings = "https://fakestoreapi.com/products";
    fetch(getAllThings)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log("ici", data);
      setProducts(data);
    })
    .catch((error) => {
      console.error(error)
    })
  },[])

  return (
    <div className="ProductListPage">
      {products && products.map((product) => (
        <div className="product-container" key={product.id}>
         <div className="product_image"><img src={product.image} alt={product.description} /></div> 
          <h1>{product.title}</h1>
          <p>{product.category}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}

    </div>
  );
}

export default ProductListPage;
