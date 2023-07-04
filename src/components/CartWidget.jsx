import chango from "../assets/carrito.png";

const styles = {
  img: {
    height: "2rem",
  },
  color: {
    color: "white",
  },
};

export const CartWidget = () => (
  <>
    <img
      src={chango}
      style={{ filter: "invert(100%)", ...styles.img }}
      alt="chango"
    />{" "}
    <span style={styles.color}>0</span>
  </>
);
