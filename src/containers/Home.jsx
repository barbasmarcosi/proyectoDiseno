import React from "react";
import homePhoto from "./../assets/img/Fondo_Home.jpg";

const Home = () => {
  return (
    <>
      <img className="home-image" src={homePhoto} alt="Home" ></img>
      {
        <h1 className="Home-content" >
          Bienvenido al Sistema de Gestion de la Empanaderia
        </h1>
      }
    </>
  );
};
export default Home;
