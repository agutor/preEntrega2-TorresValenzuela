import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { LoaderComponent } from "./LoaderComponent";

//obtiene y muestra detalles de un ítem específico mediante id
const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  const id = useParams().id;

  useEffect(() => {
    setShowLoader(true);
    const db = getFirestore();
    const refDoc = doc(db, "remeras", id);
    getDoc(refDoc).then((snapshot) => {
      const item = { id: snapshot.id, ...snapshot.data() };
      setShowLoader(false);
      if (item.hasOwnProperty("price")) {
        setItem(item);
      } else {
        setItem(null);
      }
    });
  }, [id]);

  return (
    <>
      {showLoader && <LoaderComponent />}
      {item ? (
        <ItemDetail item={item} />
      ) : !showLoader ? (
        <h1>Producto no encontrado</h1>
      ) : (
        <h1>Cargando producto</h1>
      )}
    </>
  );
};

export default ItemDetailContainer;
