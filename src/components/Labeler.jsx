const Labeler = ({ children, text, hidden }) => (
    <div className={`Labeler${hidden ? ' Labeler--hidden' : ''}`}>
        <label
            className='Labeler-label'>{text}</label>
        <div className="Labeler-labeled">
            {children}
        </div>
    </div>
)

export default Labeler;