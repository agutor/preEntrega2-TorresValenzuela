//detalles del producto
import { useState } from "react";

import { Counter } from "./ItemCount";

const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    quantity < item.stock[selectedSize] && setQuantity((prev) => prev + 1);
  };
  const handleSubstract = () => {
    quantity > 1 && setQuantity((prev) => prev - 1);
  };
  const [selectedSize, setSelectedSize] = useState("");
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
    setQuantity(1);
  };

  return (
    <div className="container">
      <div className="remera-detalle">
        <img src={item.imagen} alt={item.titulo} />
        <div>
          <h3 className="titulo">{item.titulo}</h3>
          <p className="descripcion">{item.descripcion}</p>
          <p className="category" style={{ textTransform: "capitalize" }}>
            Categoría: {item.category}
          </p>
          <p className="precio">${item.precio}</p>
          <Counter
            quantity={quantity}
            add={handleAdd}
            substract={handleSubstract}
            size={selectedSize}
            sizeOnChange={handleSizeChange}
          />
          {selectedSize ? (
            <h5>Stock disponible: {item.stock[selectedSize]}</h5>
          ) : (
            <h5>Stock disponible: Elije Talle</h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
