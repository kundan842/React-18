import { useState } from "react";
const App = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "jhon",
    },
  });

  const [pizza, setPizza] = useState({
    name: "sweer corn",
    toppings: ["corn"],
  });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [{id:1, quantity:1, product:'p1'},{id:2, product:'p2', quantity:2}]
  })

  const handleClick = () => {
    setGame({ ...game, player: { name: "bob" } });
    setPizza({ ...pizza, toppings: [...pizza.toppings, "tomato"] });
    // from cart items set quantity 2 

    setCart({...cart, items: cart.items.map(item => item.id ===1 ? {...item, quantity:item.quantity+1 } : item)})
  };
};
