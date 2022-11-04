import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/Logo.jpg";

const Header = ({ setOpen, open }) => {
  return (
    <div className="Header">
      <div
        onClick={() => setOpen((open) => !open)}
        className={`Burger ${open ? "active" : ""}`}
      >
        <div className={`Line ${open ? "active" : ""}`}></div>
        <div className={`Line ${open ? "active" : ""}`}></div>
        <div className={`Line ${open ? "active" : ""}`}></div>
      </div>
      <div className="Header-content">
        <Link className="Header-link" to="/">
          <img className="Logo-image" src={Logo} alt="Imagen del Logo" />
        </Link>
        <h1 className="Header-title">La empanaderia</h1>
      </div>
    </div>
  );
};

export default Header;
