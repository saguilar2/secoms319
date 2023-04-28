import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { SignIn } from "./SignIn";
import { Pets } from "./Pets";
import { Checkout } from "./Checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/Pets" element={<Pets />} />
      <Route path="/Checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
