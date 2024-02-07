import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
// const baseURL = "https://fakestoreapi.com/products";

function App() {
  const [products, setProducts] = useState([]);

  const instance = axios.create({
    baseURL: "https://fakestoreapi.com/products",
    timeout: 1000,
    headers: { "Secret-Custom-Header": "token" },
  });

  useEffect(() => {
    instance
      .get()
      .then(function (response) {
        // handle successsetProducts(json)
        setProducts(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  console.log(products);
  if (products.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.title} />
          <div>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <p>Category: {product.category}</p>
            <p>
              Rating: {product.rating.rate} ({product.rating.count} reviews)
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
