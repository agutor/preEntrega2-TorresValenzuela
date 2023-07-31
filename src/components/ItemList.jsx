import Item from "./Item";

const ItemList = ({ remeras, titulo }) => {
  return (
    <div className="container">
      <h2 className="main-title" style={{ textTransform: "capitalize" }}>
        {titulo}
      </h2>

      <div className="row">
        {remeras.map((remera) => (
          <Item remera={remera} key={remera.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
