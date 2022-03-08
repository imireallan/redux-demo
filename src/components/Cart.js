import { useSelector } from "react-redux";
const Cart = () => {
  const cart = useSelector((state) => state.productSlice.cart);
  const loginDet = useSelector((state) => state.loginSlice.loginDet);
  const total = useSelector((state) => state.productSlice.total);
  return (
    <div className="customDiv">
      <h3>Cart Component - User : {loginDet}</h3>
      <hr />
      <ul>
        {cart.length > 0 &&
          cart.map((c, index) => {
            return <li key={index}>{c.pName}</li>;
          })}
      </ul>
      <p>Total - {total}</p>
    </div>
  );
};

export default Cart;
