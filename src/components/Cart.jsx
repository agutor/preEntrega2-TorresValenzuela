import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      {[...cart].map((item) => (
        <div
          className="card image-header rounded offset-1 cell-auto"
          key={item.id + item.size}
        >
          <h4>{item.title}</h4>
          <img src={item.image} alt={item.title} />
          <p>Cantidad: {item.quantity}</p>
          <p>
            Talle:
            <span> {item.size}</span>
          </p>
          <p>Precio por unidad: ${item.price}</p>
        </div>
      ))}
    </>
  );
};

export const CartToCheckout = () => {
  const { total, itemsInCart } = useContext(CartContext);

  return (
    <>
      {itemsInCart() === 0 ? (
        <>
          <h2>No tenes remeras en tu carrito</h2>
          <Link to={"/"}>
            <button>Volver a la tienda</button>
          </Link>
        </>
      ) : (
        <>
          <Cart />
          <p>Total Compra: ${total()}</p>
          <Link to={"/checkout"}>
            <button>Finalizar compra</button>
          </Link>
        </>
      )}
    </>
  );
};
