import React from "react";
import { useState } from "react";

const dateFormatter = (date) => {
  const splittedDate = date.split("/");
  return new Date(
    `${Number(splittedDate[1])}-${Number(splittedDate[0])}-${Number(
      splittedDate[2]
    )}`
  );
};

const DateFilter = ({ data, which, setDataCopy }) => {
  const [from, setFrom] = useState(
    new Date(Date.now()).toISOString().slice(0, 10)
  );
  const [to, setTo] = useState(new Date(Date.now()).toISOString().slice(0, 10));
  const dateFilter = (desde, hasta) => {
    setDataCopy(
      data.filter((element) => {
        return (
          dateFormatter(element[which]) >= new Date(desde) &&
          dateFormatter(element[which]) <= new Date(hasta)
        );
      })
    );
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        background: "#dcdcdc",
        alignItems: "center",
        height: "1.8rem",
        borderRadius: "0.5rem",
        border: "2px solid black",
        marginRight: "2rem",
      }}
    >
      <p
        style={{
          paddingLeft: "0.5rem",
          paddingRight: "1rem",
          color: "black",
          fontSize: "1rem",
        }}
      >
        {`Filtrar por ${which[0].toUpperCase()}${which
          .slice(1, which.length)
          .match(/([A-Z]?[^A-Z]*)/g)
          .slice(0, -1)
          .join(" ")}:`}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <input
          style={{
            textAllign: "center",
            marginRight: "0.5rem",
            fontSize: "2.2vh",
            height: "1.5rem",
            borderRadius: "0.5rem",
            cursor: "pointer",
          }}
          value={from}
          onChange={(e) => {
            setFrom(e.target.value);
            dateFilter(e.target.value, to);
          }}
          type="date"
        />
        <input
          style={{
            textAllign: "center",
            fontSize: "2.2vh",
            height: "1.5rem",
            marginRight: "0.5rem",
            borderRadius: "0.5rem",
            cursor: "pointer",
          }}
          value={to}
          onChange={(e) => {
            setTo(e.target.value);
            dateFilter(from, e.target.value);
          }}
          type="date"
        />
        <button
          style={{
            textAllign: "center",
            fontSize: "2.2vh",
            borderRadius: "0.5rem",
            cursor: "pointer",
          }}
          onClick={() => {
            setFrom(new Date(Date.now()).toISOString().slice(0, 10));
            setTo(new Date(Date.now()).toISOString().slice(0, 10));
            setDataCopy(data);
          }}
        >
          Limpiar Filtro
        </button>
      </div>
    </div>
  );
};

export default DateFilter;
