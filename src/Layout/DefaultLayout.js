import React, { Children } from "react";
// import Header from './Partials'
import HeaderComp from "./Partials/HeaderComp";
import FooterComp from "./Partials/FooterComp";
import { Outlet } from "react-router-dom";
// import Dahboard from "../page/Dahboard/Dahboard";

function DefaultLayout({ children }) {
  return (
    <div className="defaultLayout">
      <header className="mb-2">
        <HeaderComp />
      </header>

      <main>
        <Outlet/>
      </main>

      <footer>
        <FooterComp />
      </footer>
    </div>    
  );

}

export default DefaultLayout;
