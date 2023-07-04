import { useEffect, useState } from "react";
import { solicitarItemPorId } from "../utilities/solicitarData";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

//obtiene y muestra detalles de un ítem específico mediante id

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const id = useParams().id;
  console.log(id);

  useEffect(() => {
    solicitarItemPorId(Number(id)).then((res) => {
      setItem(res);
    });
  }, [id]);

  return <div>{item && <ItemDetail item={item} />}</div>;
};

export default ItemDetailContainer;
