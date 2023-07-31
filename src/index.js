import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCldWbmyq2Ky7WFKzsiacL-AveTKrm9vSo",
  authDomain: "proyecto-final-react-c43265.firebaseapp.com",
  projectId: "proyecto-final-react-c43265",
  storageBucket: "proyecto-final-react-c43265.appspot.com",
  messagingSenderId: "493863401445",
  appId: "1:493863401445:web:94516d065475807391610c",
};

// Initialize Firebase
initializeApp(firebaseConfig);
reportWebVitals();
