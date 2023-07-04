import React from "react";
import { Link } from "react-router-dom";

const Item = ({ remera }) => {
  return (
    <div className="remera">
      <img src={remera.imagen} alt={remera.titulo} />
      <div>
        <h4>{remera.titulo}</h4>
        <p>Precio: ${remera.precio}</p>
        <p style={{ textTransform: "capitalize" }}>
          Categoría: {remera.category}
        </p>
        <Link className="ver-mas" to={`/item/${remera.id}`}>
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default Item;
