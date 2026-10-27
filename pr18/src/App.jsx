import react, { useState } from "react";

function App() {
  const[products, setProducts] = useState([
    { id: 1, name: "laptop", price: 10000 },
    { id: 2, name: "monile", price: 2000 },
    
  const [id, setId] = useState("null");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function editProduct(product) {
    setId(product.id);
    setName(product.name);
    setPrice(product.price);
  }

  function updateProduct(e) {
    e.preventDefault();

    setProducts(products.map(product => product.id===id ?  
      {
        ... product,price:price:number(price)}
      });
      setId("null");
      setName("");
      setPrice("");
  } 

      return (
        <div style={{padding:"20px",fontfamily:"Arial"}}>
          <h2>product management</h2>
          {products.map(product => (
            <p key={product.id}>
              {product.name} - {product.price}
              <button onclick={() => editProduct(product)}>Edit</button>
</p>
          ))}
          {id !== "null" && (
            <form onSubmit={updateProduct}>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />{''}
              <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required   />{''}

              <button type="submit">Update</button>
            </form>
          )}
        </div>
      );
    } 

      export default App; 