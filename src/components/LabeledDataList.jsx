import Labeler from "./Labeler";

const LabeledDataList = ({
  options,
  which,
  value = "",
  onChange,
  hidden,
  text,
  onModal = true,
  nullable = false,
}) => {
  return (
    <Labeler hidden={hidden} text={text} onModal={onModal}>
      <input
        value={value}
        onChange={onChange}
        className={`LabeledInput-text${
          !!value ? " LabeledInput-text--filled" : ""
        }`}
        list={text}
      />
      <datalist id={text}>
        {nullable ? (
          <option
            className="LabeledInput-option"
            value={`Sin ${text[0].toLowerCase() + text.slice(1, text.length)}`}
          />
        ) : (
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
