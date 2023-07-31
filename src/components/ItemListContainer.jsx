import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { LoaderComponent } from "./LoaderComponent";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = (props) => {
  const [remeras, setRemeras] = useState([]);

  const [titulo, setTitulo] = useState("Remeras");

  const [showLoader, setShowLoader] = useState(false);

  const category = useParams().categoryId;

  useEffect(() => {
    //limpia el dom cuando se cambia de categoria y muestra un loader que simula carga
    setShowLoader(true);
    setRemeras([]);
    setTitulo("");
  }, [category]);

  useEffect(() => {
    //carga datos de json, filtra por categoria y settea el titulo correspondiente
    const db = getFirestore();
    const refCollection = collection(db, "remeras");

    const q = category
      ? query(refCollection, where("categoryId", "==", category))
      : refCollection;

    getDocs(q).then((snapshot) => {
      const items = snapshot.docs.map((doc) => {
        setShowLoader(false);
        return { id: doc.id, ...doc.data() };
      });
      if (category) {
        setTitulo(category);
      } else {
        setTitulo("Remeras");
      }
      setRemeras(items);
    });
  }, [category]);

  return (
    <>
      <h1>{props.greeting}</h1>
      {showLoader && <LoaderComponent />}
      <ItemList remeras={remeras} titulo={titulo} />
    </>
  );
};

export default ItemListContainer;
