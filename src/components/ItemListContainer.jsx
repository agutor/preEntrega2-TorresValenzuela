import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import { solicitarData } from "../utilities/solicitarData";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { LoaderComponent } from "./LoaderComponent";

const ItemListContainer = (props) => {
  const [remeras, setRemeras] = useState([]);

  const [titulo, setTitulo] = useState("Remeras");

  const [showLoader, setShowLoader] = useState(false);

  const category = useParams().id;
  console.log(category);

  useEffect(() => {
    //limpia el dom cuando se cambia de categoria y muestra un loader que simula carga
    setShowLoader(true);
    setRemeras([]);
    setTitulo("");
    setTimeout(() => {
      setShowLoader(false);
    }, 2000);
  }, [category]);

  useEffect(() => {
    //carga datos de json, filtra por categoria y settea el titulo correspondiente
    solicitarData().then((res) => {
      if (category) {
        setRemeras(res.filter((reme) => reme.category === category));
        setTitulo(category);
      } else {
        setRemeras(res);
        setTitulo("Remeras");
      }
    });
  }, [category]);

  return (
    <>
      <Container>
        <h1>{props.greeting}</h1>
        {showLoader && <LoaderComponent />}
        <ItemList remeras={remeras} titulo={titulo} />
      </Container>
    </>
  );
};

export default ItemListContainer;
