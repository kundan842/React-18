interface Product {
  id: number;
  name: string;
}
interface Props {
  Items: Product[];
  onClear: () => void;
}

const Cart = ({ Items, onClear }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {Items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={onClear}>CleraAll</button>
    </>
  );
};

export default Cart;
