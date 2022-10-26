const Table = ({ body, edit, del, onEdit, exceptions = [] }) => {
  return (
    <div className="Table">
      <table className="Table-self">
        <thead className="Table-thead">
          <tr className="Table-thead-tr">
            {Object.keys(body[0]).map((key) => {
              let exc = true;
              exceptions.map((exception) => {
                if (exception == key) {
                  exc = false;
                }
              });
              if (exc) {
                return (
                  <th className="Table-thead-tr-th">
                    {(key[0].toUpperCase() + key.slice(1, key.length)).match(/([A-Z]?[^A-Z]*)/g).slice(0,-1).join(' ')}
                  </th>
                );
              }
            })}
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody className="Table-tbody">
          {body.map((tr) => (
            <tr className="Table-tbody-tr">
              {Object.keys(tr).map((key) => {
                let exc = true;
                exceptions.map((exception) => {
                  if (exception == key) {
                    exc = false;
                  }
                });
                if (exc) {
                  return <td className="Table-tbody-tr-td">{tr[key]}</td>;
                }
              })}
              <td>
                <input
                  className="Button-edit"
                  onClick={onEdit}
                  type="button"
                  value="Editar"
                  hidden={edit}
                />
                <input
                  className="Button-delete"
                  type="button"
                  value="Eliminar"
                  hidden={del}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
