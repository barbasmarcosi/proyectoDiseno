import { useState } from "react";
import Labeler from "./Labeler";

const LabeledSelector = ({
  options,
  which,
  value = "",
  setValue,
  onChange,
  hidden,
  text,
  onModal = true,
  nullable = false,
  getValue,
}) => {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const totalSelected = (val) => {
    console.log(val);
    if (val) {
      setCount((count) => count + 1);
    } else {
      setCount((count) => count - 1);
    }
  };
  return (
    <Labeler hidden={hidden} text={text} onModal={onModal}>
      <>
        <div onClick={() => setOpen(!open)} class="selectBox">
          <select style={{ width: "20rem" }} className="LabeledInput-text">
            <option style={{ display: "none" }}>
              {count
                ? `${count} proveedor/es seleccionados`
                : "Sin proveedores seleccioandos"}
            </option>
          </select>
        </div>
        {options.map((opt) =>
          open ? (
            <div
              style={{
                backgroundColor: "white",
                color: "black",
                display: "block",
                textAlign: "left",
                borderRadius: "4px",
                padding: "4px",

              }}
            >
              <label className="LabeledInput-option" for={`${opt[which]}`}>
                <input
                  type="checkbox"
                  id={`${opt[which]}`}
                  className="LabeledInput-option"
                  onClick={(e) => totalSelected(e.target.checked)}
                />
                {`${opt[which]}`}
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
