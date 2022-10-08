const Labeler = ({ children, text, hidden, onModal = true }) => (
    <div className={`Labeler${hidden ? ' Labeler--hidden' : ''}`}>
        <label
            style={{ backgroundColor: (onModal ? '#dcdcdc' : '#9d9d9d') }}
            className='Labeler-label'>
            {text}
        </label>
        <div className="Labeler-labeled">
            {children}
        </div>
    </div>
)

export default Labeler;