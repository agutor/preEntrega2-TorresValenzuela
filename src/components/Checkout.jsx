import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Cart } from "./Cart";

const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const [name, setName] = useState("");

  const { cart, total, clearCart } = useContext(CartContext);

  const { register, getValues, handleSubmit, setFocus } = useForm();

  const today = new Date();

  const sendOrder = (userData) => {
    const emailAValidar = getValues("firstEmail");
    const emailValidante = getValues("email");
    setName(getValues("name"));
    if (emailAValidar !== emailValidante) {
      setFocus("email");
      alert("EMAIL INCORRECTO");
    } else {
      const { firstEmail, ...data } = userData;
      const order = {
        buyer: data,
        products: cart,
        date: today.toLocaleString(),
        status: "Esperando aprobación",
        total: total(),
      };

      const db = getFirestore();
      const refOrders = collection(db, "orders");

      addDoc(refOrders, order).then((doc) => {
        setOrderId(doc.id);
        clearCart();
      });
    }
  };

  if (orderId) {
    return (
      <div className="container">
        <Cart />
        <h1 className="main-title">Muchas gracias por tu compra {name}!</h1>
        <p>Tu número de orden es: {orderId}</p>
      </div>
    );
  }

  return (
    <>
      <div className="row">
        <Cart />
      </div>
      <div className="cell-4 offset-4">
        <p>Total: ${total()}</p>
        <form className="formulario" onSubmit={handleSubmit(sendOrder)}>
          <div className="form-group">
            <input
              required
              type="text"
              placeholder="Ingresá tu nombre"
              {...register("name")}
            />
          </div>
          <div className="form-group">
            <input
              required
              type="text"
              placeholder="Ingresá tu apellido"
              {...register("surname")}
            />
          </div>
          <div className="form-group">
            <input
              required
              type="phone"
              placeholder="Ingresá tu teléfono"
              {...register("phone")}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Ingresá tu e-mail"
              {...register("firstEmail", {
                required: "required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                },
              })}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Confirmá tu e-mail"
              {...register("email", {
                required: "required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                },
              })}
            />
          </div>
          <button className="enviar button yellow" type="submit">
            Comprar
          </button>
        </form>
      </div>
    </>
  );
};

export default Checkout;
