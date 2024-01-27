interface props {
  cartItemCount: number;
}

const NavBar = ({ cartItemCount }: props) => {
  return (
    <>
      <div>NavBar</div>
      <div>Total Item In cart {cartItemCount}</div>
    </>
  );
};

export default NavBar;
