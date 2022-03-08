import { useSelector, useDispatch } from "react-redux";
import { LOGIN } from "../store/types";
const Login = () => {
  const users = useSelector((state) => state.loginSlice.users);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let payload = e.target.options[e.target.selectedIndex].text;
    console.log(payload);
    dispatch({ type: LOGIN, payload });
  };
  return (
    <div className="customDiv">
      <h3>Login Component</h3>
      <hr />
      <select onChange={(e) => handleChange(e)}>
        {users.map((user, index) => {
          return (
            <option key={index} value={user}>
              {user}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Login;
