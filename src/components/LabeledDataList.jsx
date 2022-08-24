import Labeler from "./Labeler"

const LabeledDataList = ({ options, input, onChangeInput, hidden, text }) => {
    const onChangeValue = (event) => {
        onChangeInput(event.target.value)
        console.log(event.target.value)
    }
    return (
        <Labeler hidden={hidden} text={text}>
            <input list="LabeledDataList"
                value={input}
                onChange={onChangeValue}
                name="LabeledDataList"
                className={`LabeledInput-text${!!input ? ' LabeledInput-text--filled' : ''}`}
            />
            <datalist id="LabeledDataList">
                {options.map((option) => (
                    <option className="LabeledInput-option" value={`${option.Nombre} ${option.Apellido}`} />
                ))}
            </datalist>
        </Labeler>
    )
}

export default LabeledDataList;