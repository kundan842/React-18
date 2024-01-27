import { useEffect, useState } from "react";
import { useRef } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [category, setCategory] = useState("");
  return (
    <div>
      <select
        name=""
        id=""
        className="form-select"
        onChange={(event) => {
          setCategory(event.target.value);
          console.log("rendeing app");
        }}
      >
        <option value="clothing">Clothing</option>
        <option value="sports">Sports</option>
        <option value="fashion">Fashion</option>
      </select>
      <ProductList Category={category}></ProductList>
    </div>
  );
}

export default App;
