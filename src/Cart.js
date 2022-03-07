import { useCart } from "./CartContext";

export const Cart = () => {
  const { item } = useCart();

  return <h1>Items in cart {item}</h1>;
};
