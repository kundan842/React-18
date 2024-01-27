import { useState } from "react";
import NavBar from "./components/navbar";
import Cart from "./components/cart";

const App = () => {
  const [product, setProduct] = useState([
    { id: 1, name: "book" },
    { id: 2, name: "pen" },
    { id: 3, name: "laptop" },
  ]);

  return (
    <>
      <NavBar cartItemCount={product.length} />
      <Cart Items={product} onClear={() => setProduct([])}></Cart>
    </>
  );
};

export default App;
