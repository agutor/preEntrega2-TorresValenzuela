export const Counter = (props) => {
  return (
    <>
      <select value={props.size} onChange={props.sizeOnChange}>
        <option value="">Selecciona un talle</option>
        <option value="s">S</option>
        <option value="m">M</option>
        <option value="l">L</option>
        <option value="xl">XL</option>
        <option value="xxl">XXL</option>
      </select>
      {props.quantity <= 1 ? (
        <>
          <button disabled onClick={props.substract}>
            -
          </button>
          <h2>{props.quantity}</h2>
          <button onClick={props.add}>+</button>
        </>
      ) : (
        <>
          <button onClick={props.substract}>-</button>
          <h2>{props.quantity}</h2>
          <button onClick={props.add}>+</button>
        </>
      )}
      <button>Agregar al Carrito</button>
    </>
  );
};
