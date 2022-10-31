import React from "react";
import homePhoto from "./../assets/img/Fondo_Home.jpg";

const Home = () => {
  return (
    <>
      <img
        src={homePhoto}
        style={{
          position: "absolute",
          width: "100%",
          opacity: "15%",
          zIndex: "-1000",
        }}
        alt="Home"
      ></img>
      {/*<img
        src={homePhoto}
        alt="Home"
        style={{
          position: "absolute",
          top: "8rem",
          borderRadius: "15%",
          margin: "32px",
          backgroundClip: "padding-box",
          border: "10px solid rgb(175, 10, 10)",
        }}
    ></img>*/}
      {
        <h1
          style={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            zIndex: "1000",
            marginLeft: "3rem",
            fontSize: "4rem",
            width: "50%",
            textShadow: "0 0 5px rgb(175, 10, 10)",
            textAlign: "center",
          }}
          className="Home-content"
        >
          Bienvenido al Sistema de Gestion de la Empanaderia
        </h1>
      }
    </>
  );
};
export default Home;
