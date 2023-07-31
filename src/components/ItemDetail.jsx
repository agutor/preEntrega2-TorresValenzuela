//detalles del producto
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { ItemQuantitySelector } from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { setStockFunction } from "../utilities/setStockFunction";
import { ItemDetailData } from "./Item";

const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const continueShopping = () => {
    setAddedToCart(true);
  };

  const { addItem } = useContext(CartContext);
  const handleIncrement = () => {
    quantity < item.stock[stockSize] && setQuantity((prev) => prev + 1);
  };
  const handleDecrement = () => {
    quantity > 1 && setQuantity((prev) => prev - 1);
  };
  const [selectedSize, setSelectedSize] = useState("");
  const [stockSize, setStockSize] = useState();

  const handleSizeChange = (event) => {
    setStockFunction(event, setStockSize, setSelectedSize);
    setQuantity(1);
  };

  useEffect(() => {
    setAddedToCart(false);
  }, [item]);

  if (!addedToCart) {
    return (
      <>
        <div className="container">
          <div className="card rounded cell-md">
            <ItemDetailData remera={item} />
            <p className="descripcion">{item.description}</p>
            <ItemQuantitySelector
              quantity={quantity}
              increment={handleIncrement}
              decrement={handleDecrement}
              stockSize={stockSize}
              sizeOnChange={handleSizeChange}
            />
            {stockSize ? (
              <>
                <h5>Stock disponible: {item.stock[stockSize]}</h5>
                <button
                  onClick={() => {
                    addItem(item, quantity, selectedSize);
                    continueShopping();
                  }}
                >
                  Agregar al Carrito
                </button>
              </>
            ) : (
              <>
                <h5>Stock disponible: Elije Talle</h5>
                <button disabled>Agregar al Carrito</button>
              </>
            )}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container">
          <div className="card rounded cell-md">
            <ItemDetailData remera={item} />
            <Link to={"/"}>
              <button>Seguir Comprando</button>
            </Link>
            <Link to={"/Cart"}>
              <button>Ir a Carrito</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
};

export default ItemDetail;
