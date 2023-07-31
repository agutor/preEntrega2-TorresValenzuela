import React from "react";
import { Link } from "react-router-dom";

const styles = {
  width: {
    width: "200px",
  },
  height: {
    height: "150px",
  },
  marginTop: {
    marginTop: "0rem",
  },
  textTransform: {
    textTransform: "capitalize",
  },
};

export const ItemDetailData = ({ remera }) => {
  return (
    <>
      <div
        className="card-header fg-white"
        alt={remera.title}
        style={{
          backgroundImage: `url(${remera.image})`,
          ...styles.textTransform,
          ...styles.height,
        }}
      >
        {remera.title}
      </div>
      <div className="card-content p-2">
        <p style={{ ...styles.textTransform }}>
          Categoría: {remera.categoryId}
        </p>
        <p>Precio: ${remera.price}</p>
      </div>
    </>
  );
};

const Item = ({ remera }) => {
  return (
    <>
      <div
        className="card image-header rounded offset-1 cell-auto"
        key={remera.id}
        style={{ ...styles.width, ...styles.marginTop }}
      >
        <ItemDetailData remera={remera} />
        <div className="card-footer">
          <button className="button info rounded ">
            <Link className="ver-mas" to={`/item/${remera.id}`}>
              Ver más
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};
export default Item;
