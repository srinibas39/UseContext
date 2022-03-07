import ReactDOM from "react-dom";

import App from "./App";
import { CartContext, CartProvider } from "./CartContext";
import { ModeProvider } from "./ModeContext";
import { TranslateProvider } from "./TranslateContext";

const rootElement = document.getElementById("root");
// const logger=()=>console.log("carting")
ReactDOM.render(
  //  <CartContext.Provider value={{ items: 6 ,logger:logger}}>
  //   <App/>
  // </CartContext.Provider>
  <TranslateProvider>
    <ModeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ModeProvider>
    ,
  </TranslateProvider>,

  rootElement
);
