import { NavBar } from "./components/NavBar";
import "./App.css";
import { ItemListContainer } from "./components/ItemContainerList";

export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Que remera usas hoy?" />
    </>
  );
}
