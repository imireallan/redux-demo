import { useSelector, useDispatch } from "react-redux";
import { purchase } from "../store/productSlice";

const Purchase = () => {
  const products = useSelector((state) => state.productSlice.products);
  const loginDet = useSelector((state) => state.loginSlice.loginDet);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    let pName = e.target.options[e.target.selectedIndex].text;
    let value = e.target.value;
    dispatch(purchase({pName, value}));
  };
  return (
    <div className="customDiv">
      <h3>Purchase Component - User : {loginDet}</h3>
      <hr />
      <select onChange={(e) => handleChange(e)}>
        {products.map((product, index) => {
          return (
            <option value={product.price} key={index}>
              {product.pName} - {product.price}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Purchase;
