export const ItemQuantitySelector = (props) => {
  return (
    <>
      <select value={props.stockSize} onChange={props.sizeOnChange}>
        <option value="">Selecciona un talle</option>
        <option value="1">S</option>
        <option value="2">M</option>
        <option value="3">L</option>
        <option value="4">XL</option>
        <option value="5">XXL</option>
      </select>

      {props.quantity <= 1 ? (
        <div style={{ display: "flex" }}>
          <button
            style={{ margin: "1rem" }}
            className="button info rounded shadowed"
            disabled
            onClick={props.decrement}
          >
            -
          </button>
          <h2>{props.quantity}</h2>
          <button
            style={{ margin: "1rem" }}
            className="button info rounded shadowed"
            onClick={props.increment}
          >
            +
          </button>
        </div>
      ) : (
        <div style={{ display: "flex" }}>
          <button
            style={{ margin: "1rem" }}
            className="button info rounded shadowed"
            onClick={props.decrement}
          >
            -
          </button>
          <h2>{props.quantity}</h2>
          <button
            style={{ margin: "1rem" }}
            className="button info rounded shadowed"
            onClick={props.increment}
          >
            +
          </button>
        </div>
      )}
    </>
  );
};
