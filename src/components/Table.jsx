import Details from "./Details";

const Table = ({ body, edit, del, onEdit, exceptions = [] }) => {
  return body.length > 0 ? 
   (
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
                    {(key[0].toUpperCase() + key.slice(1, key.length))
                      .match(/([A-Z]?[^A-Z]*)/g)
                      .slice(0, -1)
                      .join(" ")}
                  </th>
                );
              }
            })}
            {exceptions.length ? (
              <th className="Table-thead-tr-th">...</th>
            ) : (
              false
            )}
            {!edit || !del ? <th>Acciones</th> : false}
          </tr>
        </thead>
        <tbody className="Table-tbody">
          {body.map((tr) => {
            return (
              <tr className="Table-tbody-tr">
                {Object.keys(tr).map((key) => {
                  let exc = true;
                  exceptions.map((exception) => {
                    if (exception == key) {
                      exc = false;
                    }
                  });
                  if (exc) {
                    if (tr[key] === true) {
                      return <td className="Table-tbody-tr-td">{"Si"}</td>;
                    } else if (tr[key] === false) {
                      return <td className="Table-tbody-tr-td">{"No"}</td>;
                    } else if (tr[key] === null) {
                      return <td className="Table-tbody-tr-td">{"-"}</td>;
                    } else if (typeof tr[key] === "object") {
                      return (
                        <td className="Table-tbody-tr-td">
                          <Details title={"Detalle"} table={tr[key]} />
                        </td>
                      );
                    } else {
                      return <td className="Table-tbody-tr-td">{tr[key]}</td>;
                    }
                  }
                })}
                {exceptions.length ? (
                  <td className="Table-tbody-tr-td">
                    <Details title={"Ver mas"} table={body} buttonColor={"dodgerblue"} />
                  </td>
                ) : (
                  false
                )}
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
            );
          })}
        </tbody>
      </table>
    </div>
  ) : false
};

export default Table;
