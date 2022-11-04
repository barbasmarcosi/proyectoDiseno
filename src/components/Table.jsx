import React from "react";
import searchFor from "../usefullFunctions/searchFor";
import Details from "./Details";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { display } from "@mui/system";

const Table = ({
  body,
  edit,
  del,
  onEdit,
  onDelete,
  exceptions = [],
  isDocument = false,
  searchingFor = [],
}) => {
  return body.length > 0 ? (
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
            {isDocument ? <th className="Table-thead-tr-th">Emitir</th> : false}
            {!edit || !del ? <th>Acciones</th> : false}
          </tr>
        </thead>
        <tbody className="Table-tbody">
          {body.map((tr) => {
            return (
              <tr className="Table-tbody-tr">
                {Object.keys(tr).map((key) => {
                  let search = false;
                  searchingFor.map((searching) => {
                    if (searching === key) {
                      search = true;
                    }
                  });
                  let exc = true;
                  exceptions.map((exception) => {
                    if (exception === key) {
                      exc = false;
                    }
                  });
                  if (exc) {
                    if (search && tr[key]) {
                      return (
                        <td className="Table-tbody-tr-td">
                          <Details
                            /*title={`Detalle ${key
                              .match(/([A-Z]?[^A-Z]*)/g)
                              .slice(0, -1)
                              .join(" ")
                              .toLowerCase()}`}*/
                            title="Visualizar Detalle"
                            table={[searchFor(key, tr[key])]}
                          />
                        </td>
                      );
                    } else if (tr[key] === true) {
                      return <td className="Table-tbody-tr-td">{"Si"}</td>;
                    } else if (tr[key] === false) {
                      return <td className="Table-tbody-tr-td">{"No"}</td>;
                    } else if (tr[key] === null) {
                      return <td className="Table-tbody-tr-td">{"-"}</td>;
                    } else if (tr[key] === "En proceso") {
                      return (
                        <td
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                          className="Table-tbody-tr-td"
                        >
                          {<OutdoorGrillIcon style={{ color: "yellow" }} />}{" "}
                          {tr[key]}
                        </td>
                      );
                    } else if (tr[key] === "En entrega") {
                      return (
                        <td
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                          className="Table-tbody-tr-td"
                        >
                          {<TwoWheelerIcon style={{ color: "blue" }} />}{" "}
                          {tr[key]}
                        </td>
                      );
                    } else if (tr[key] === "Con demora") {
                      return (
                        <td
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                          className="Table-tbody-tr-td"
                        >
                          {<AlarmOnIcon style={{ color: "red" }} />} {tr[key]}
                        </td>
                      );
                    } else if (tr[key] === "Entregado") {
                      return (
                        <td
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                          className="Table-tbody-tr-td"
                        >
                          {<DoneAllIcon style={{ color: "lightgreen" }} />}{" "}
                          {tr[key]}
                        </td>
                      );
                    } else if (tr[key] === "Lista para entrega") {
                      return (
                        <td
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                          className="Table-tbody-tr-td"
                        >
                          {<AddTaskIcon style={{ color: "green" }} />} {tr[key]}
                        </td>
                      );
                    } else if (typeof tr[key] === "object") {
                      return (
                        <td className="Table-tbody-tr-td">
                          <Details
                            /*title={`Detalle ${key
                              .match(/([A-Z]?[^A-Z]*)/g)
                              .slice(0, -1)
                              .join(" ")
                              .toLowerCase()}`}*/
                            title="Visualizar Detalle"
                            table={tr[key]}
                          />
                        </td>
                      );
                    } else {
                      return <td className="Table-tbody-tr-td">{tr[key]}</td>;
                    }
                  }
                })}
                {exceptions.length ? (
                  <td className="Table-tbody-tr-td">
                    <Details
                      title={"Ver mas"}
                      table={body}
                      buttonColor={"rgb(60, 158, 255)"}
                    />
                  </td>
                ) : (
                  false
                )}
                {isDocument ? (
                  <td className="Table-tbody-tr-td">
                    <Details
                      title={"Factura"}
                      table={body}
                      buttonClass="Button-generate"
                    />
                    <Details
                      title={"Remito"}
                      table={body}
                      buttonClass="Button-generate"
                    />
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
                    onClick={() => onDelete(tr.id)}
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
  ) : (
    false
  );
};

export default Table;
