import React from "react";
import { BrowserRouter } from "react-router-dom";
import './style/App.css';
import MyNavbar from "./components/UI/navbars/MyNavbar";
import AppRouter from "./components/AppRouter";

function App() {
  return (
      <BrowserRouter>
        <MyNavbar/>
        <AppRouter/>
      </BrowserRouter>
  );
}

export default App;