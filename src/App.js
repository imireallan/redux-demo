import "./App.css";
import Purchase from "./components/Purchase";
import Total from "./components/Total";
import Cart from "./components/Cart";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Login />
      <Purchase />
      <Cart />
      <Total />
    </div>
  );
}

export default App;
