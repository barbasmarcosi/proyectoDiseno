import Labeler from "./Labeler"

const LabeledDataList = ({ options, which, value, onChange, hidden, text, onModal = true }) => {
    return (
        <Labeler
            hidden={hidden}
            text={text}
            onModal={onModal}
        >
            <input list="LabeledDataList"
                value={value}
                onChange={onChange}
                name="LabeledDataList"
                className={`LabeledInput-text${!!value ? ' LabeledInput-text--filled' : ''}`}
            />
            <datalist id="LabeledDataList">
                {options.map((option) => (
                    <option className="LabeledInput-option" value={`${option[`${which}`]}`} />
                ))}
            </datalist>
        </Labeler>
    )
}

export default LabeledDataList;