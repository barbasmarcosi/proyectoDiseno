import React, { useState } from "react";
import useInputValue from "../hooks/useInputValue";
import Labeler from "./Labeler";

const LabeledSelector = ({ options, which, hidden, text, onModal = true }) => {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const searching = useInputValue("");
  const totalSelected = (val) => {
    setCount(val ? (count) => count + 1 : (count) => count - 1);
  };
  return (
    <Labeler hidden={hidden} text={text} onModal={onModal}>
      <>
        <div
          style={{ display: "flex", flexDirection: "column" }}
          onClick={() => setOpen(!open)}
        >
          <input
            className="LabeledInput-text-search"
            style={{ zIndex: "101" }}
            type={"text"}
            {...searching}
          />
          <select
            style={{
              width: "18rem",
              height: "2.5rem",
              zIndex: "100",
              marginTop: "-2.5rem",
            }}
            className="LabeledInput-text"
          ></select>
        </div>
        {which.length < 2
          ? options.filter((opt) => {
              return which.map((w) => {
                return `${opt[w]}`
                  .toLowerCase()
                  .includes(searching.value.toLowerCase());
              })[0];
            })
          : options
              .filter((opt) =>
                which
                  .map((one) => `${opt[one]}`)
                  .join(", ")
                  .toLowerCase()
                  .includes(searching.value.toLowerCase())
              )
              .map((opt) =>
                open ? (
                  <div
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      display: "block",
                      textAlign: "left",
                      borderRadius: "4px",
                      padding: "4px",
                      zIndex: "1000",
                    }}
                  >
                    <label
                      className="LabeledInput-option"
                      for={`${opt[which]}`}
                    >
                      <input
                        type="checkbox"
                        id={`${opt[which]}`}
                        className="LabeledInput-option"
                        onClick={(e) => totalSelected(e.target.checked)}
                      />
                      {which.length > 1
                        ? which.map((one) => `${opt[one]}`).join(", ")
                        : `${opt[which]}`}
                    </label>
                  </div>
                ) : (
                  false
                )
              )}
      </>
    </Labeler>
  );
};

export default LabeledSelector;
