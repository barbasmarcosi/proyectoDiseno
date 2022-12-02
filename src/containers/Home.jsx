import React from "react";
import homePhoto from "./../../public/Fondo_Home.jpg";

const Home = () => {
  return (
    <>
      <img className="home-image" src={homePhoto} alt="Home" ></img>
      {
        <div className="home-content">
          <h1>
            Bienvenido al Sistema de Gestion de la Empanaderia
          </h1>
        </div>
      }
    </>
  );
};
export default Home;
