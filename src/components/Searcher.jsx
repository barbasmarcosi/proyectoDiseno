import { useState } from "react";
import React from "react";

const Searcher = ({ data, newData }) => {
  const originalCopy = data;
  const [searcher, setSearcher] = useState("");
  const toSearch = (value) => {
    //console.log(
    //newData(
    newData(
      originalCopy.filter(
        (field) =>
          Object.values(field).filter((single) => `${single}`.includes(value))
            .length
      )
    );
    //);
    //);
  };

  return (
    <input
      type="text"
      placeholder="Ingrese su busqueda"
      value={searcher}
      onChange={(e) => {
        setSearcher(e.target.value);
        toSearch(e.target.value);
      }}
    />
  );
};

export default Searcher;
