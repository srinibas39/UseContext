import { useContext } from "react";
import { Cart } from "./Cart";
import { CartContext, useCart } from "./CartContext";
import { useMode } from "./ModeContext";
import Nav from "./Nav";
import { ProductListing } from "./ProductListing";
import "./styles.css";
import Translate from "./Translate";

export default function App() {
  const { mode } = useMode();
  return (
    <div className={mode ? "dark" : "light"}>
      <h1 className="app-header ">eCommerce</h1>
      <div>
        <Nav />
        <Cart />
        <ProductListing />
        <Translate />
      </div>
    </div>
  );
}
