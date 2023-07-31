import { NavBar } from "./components/NavBar";
import "./App.css";

import { CartToCheckout } from "./components/Cart";
import { CartProvider } from "./context/CartContext";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailList from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";

export default function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Que remera usas hoy?" />}
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:id" element={<ItemDetailList />} />
            <Route path="/cart" element={<CartToCheckout />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}
