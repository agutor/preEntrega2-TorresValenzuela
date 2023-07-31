import { useContext } from "react";
import chango from "../assets/carrito.png";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const styles = {
  img: {
    height: "2rem",
  },
  color: {
    color: "black",
  },
  link: {
    textDecoration: "none",
  },
};

export const CartWidget = () => {
  const { itemsInCart } = useContext(CartContext);

  return (
    <>
      <Link to={"/cart"} style={styles.link}>
        <img src={chango} style={styles.img} alt="chango" />{" "}
        <span style={styles.color}>{itemsInCart()}</span>
      </Link>
    </>
  );
};
