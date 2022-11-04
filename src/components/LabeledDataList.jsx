import React from "react";
import Labeler from "./Labeler";

const LabeledDataList = ({
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
  return (
    <Labeler hidden={hidden} text={text} onModal={onModal}>
      <input
        ref={getValue}
        value={value}
        onChange={onChange}
        onClick={() => setValue("")}
        className={`LabeledInput-text${!!value ? " LabeledInput-text--filled" : ""
          }`}
        list={text}
      />
      <datalist id={text}>
        {nullable ?
          <option
            key={0}
            className="LabeledInput-option"
            value={`Sin ${text[0].toLowerCase() + text.slice(1, text.length)}`}
          />
          : (
            false
          )}
        {options.map((opt) => {
          return (
            <option
              key={opt.id}
              className="LabeledInput-option"
              value={
                which.length > 1
                  ? which.map((one) => ` ${opt[one]}`)
                  : `${opt[which]}`
              }
            />
          );
        })}
      </datalist>
    </Labeler>
  );
};

export default LabeledDataList;
