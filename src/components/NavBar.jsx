import { getFirestore, collection, getDocs } from "firebase/firestore";
import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const refCollection = collection(db, "remeras");
    getDocs(refCollection).then((snapshot) => {
      const category = snapshot.docs.map((doc) => doc.data().categoryId);
      const unique = new Set(category);
      setCategories(Array.from(unique));
    });
  }, []);

  return (
    <nav
      data-role="appbar"
      data-expand-point="md"
      style={{ position: "inherit" }}
    >
      <ul className="app-bar-menu">
        <NavLink to="/" className="brand no-hover">
          <h3>3 Torres Design</h3>
        </NavLink>
        {[...categories].map((categoria) => (
          <li key={categoria}>
            <NavLink
              to={`/category/${categoria}`}
              className="nav-link"
              style={{ textTransform: "capitalize" }}
            >
              {categoria}
            </NavLink>
          </li>
        ))}
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};
