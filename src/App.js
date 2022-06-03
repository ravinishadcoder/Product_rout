import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Error from "./components/Error";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="products/" element={<Products />}></Route>
        <Route path="products/:id" element={<Product />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
