import { useState } from "react";
import React from "react";

const Searcher = ({ data, setDataCopy }) => {
  const [searcher, setSearcher] = useState("");
  const toSearch = (value) => {
    setDataCopy(
      data.filter(
        (field) =>
          Object.values(field).filter((single) => `${single}`.toLowerCase().includes(value.toLowerCase()))
            .length
      )
    );
  };

  return (
    <input
      className="Searcher"
      placeholder="Busqueda rapida"
      value={searcher}
      onChange={(e) => {
        setSearcher(e.target.value);
        toSearch(e.target.value);
      }}
    />
  );
};

export default Searcher;
