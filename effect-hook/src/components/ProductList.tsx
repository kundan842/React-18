// instead of decalring the interface for props then its key and type
// can use shortcut obejct syntex

import { useEffect, useState } from "react";

const ProductList = ({ Category }: { Category: string }) => {
  console.log("rendering product");
  const [products, setProducts] = useState<string[]>([]);
  //   useEffect(() => {
  //     console.log("fecthing product of category", Category);
  //     setProducts(["product1", "product2"]);
  //   }, []);
  //   useEffect(() => {
  //     console.log("fecthing product of category", Category);
  //     setProducts(["product1", "product2"]);
  //   });
  useEffect(() => {
    console.log("fecthing product of category", Category);
    setProducts(["product1", "product2"]);
  }, [Category]);
  return <div>ProductList</div>;
};

export default ProductList;
