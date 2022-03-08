import { useSelector } from "react-redux";
const Total = () => {
  const total = useSelector((state) => state.productSlice.total);
  const loginDet = useSelector((state) => state.loginSlice.loginDet);
  return (
    <div className="customDiv">
      <h3>Total Component - User : {loginDet}</h3>
      <hr />
      <p>Total - {total}</p>
    </div>
  );
};

export default Total;
