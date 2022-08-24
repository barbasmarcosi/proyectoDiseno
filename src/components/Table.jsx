const Table = ({ body, edit, del }) => {
    return (
        <div className="Table">
            <table className="Table-self">
                <thead className="Table-thead">
                    <tr className="Table-thead-tr">
                        {Object.keys(body[0]).map(key => <th Table-thead-tr>{key}</th>)}
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody className="Table-tbody">
                    {body.map((tr) =>
                        <tr className="Table-tbody-tr">
                            {Object.keys(tr).map(key => <td className="Table-tbody-tr-td">{tr[key]}</td>)}
                            <td>
                                <input className="Button-edit" type='button' value="Editar" hidden={edit} />
                                <input className="Button-delete" type='button' value="Eliminar" hidden={del}/>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Table;