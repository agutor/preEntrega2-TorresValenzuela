import { NavBar } from "./components/NavBar";
import "./App.css";

import { CartContext } from "./context/CartContext";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailList from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <CartContext.Provider value={[]}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Que remera usas hoy?" />}
            />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailList />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  );
}
