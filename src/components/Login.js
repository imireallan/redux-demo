import { useSelector, useDispatch } from "react-redux";
import { validateUser } from "../store/actions";

const Login = () => {
  const users = useSelector((state) => state.loginSlice.users);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let payload = e.target.options[e.target.selectedIndex].text;
    dispatch(validateUser(payload));
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
