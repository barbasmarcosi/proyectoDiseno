import Labeler from "./Labeler"

const LabeledInput = ({ type, input, onChangeInput, hidden, text }) => {
  const onChangeValue = (event) => {
    onChangeInput(event.target.value)
  }

  return (
    <Labeler hidden={hidden} text={text}>
      <input
        value={input}
        onChange={onChangeValue}
        type={type}
        name="LabeledInput"
        className={`LabeledInput-text${!!input ? ' LabeledInput-text--filled' : ''}`} />
    </Labeler>
  );
}

export default LabeledInput;