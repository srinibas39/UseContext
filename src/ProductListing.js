import { useCart } from "./CartContext";

export const ProductListing = () => {
  const { addToCart } = useCart();

  return ["1", "2", "3", "4"].map((item, idx) => (
    <div key={idx}>
      <h2>Product {item}</h2>
      <button onClick={addToCart}>ADD TO CART</button>
    </div>
  ));
};
