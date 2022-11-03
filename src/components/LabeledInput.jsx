import React from "react";
import Labeler from "./Labeler"

const LabeledInput = ({ type = 'text', value, onChange, hidden = false, text, onModal = true, toShowId = false }) => {

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
        className={`LabeledInput-text${!!value ? ' LabeledInput-text--filled' : ''}`} 
        style={toShowId ? {width : '5rem'} : {}}
        />
    </Labeler>
  );
}

export default LabeledInput;