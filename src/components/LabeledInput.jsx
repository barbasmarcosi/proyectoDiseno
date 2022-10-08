import Labeler from "./Labeler"

const LabeledInput = ({ type = 'text', value, onChange, hidden = false, text, onModal = true }) => {

  return (
    <Labeler 
      hidden={hidden} 
      text={text}
      onModal={onModal}
      >
      <input
        value={value}
        onChange={onChange}
        type={type}
        name="LabeledInput"
        className={`LabeledInput-text${!!value ? ' LabeledInput-text--filled' : ''}`} />
    </Labeler>
  );
}

export default LabeledInput;