const Form = ({ children, title, multiple = false, onAdd, onEdit, onAddMultiple, onCancel, edit = false }) => {
    return (
        <div className='Form'>
            <h1 style={{ color: 'black' }} className="Form-title">{title}</h1>
            <form className="Form-self">
                {children}
            </form>
            <button onClick={onCancel} type="button" className='Button-cancel'>Cancelar</button>
            <button onClick={onAdd} hidden={edit} type="button" className='Button-accept'>Agregar</button>
            <button onClick={onEdit} hidden={!edit} type="button" className='Button-accept'>Modificar</button>
            <button onClick={onAddMultiple} hidden={!multiple || edit} type="button" className='Button-accept'>Otro</button>
        </div>
    );
}

export default Form;