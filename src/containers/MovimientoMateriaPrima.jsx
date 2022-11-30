import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Form from "../components/Form";
import LabeledDataList from "../components/LabeledDataList";
import LabeledInput from "../components/LabeledInput";
import Message from "../components/Message";
import Modal from "../components/Modal";
import Table from "../components/Table";
import useInputValue from "../hooks/useInputValue";
import initialState from "../initialState/initialState";
import manageLocalStorage from "../usefullFunctions/manageLocalStorage";
import AddDetalleReceta from "./Recetas/AddDetalleReceta";

const MovimientoMateriaPrima = () => {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const descripcion = useInputValue("");
  const tiempoElaboracion = useInputValue("");
  const nombreIngrediente = useInputValue("");
  const cantidadIngrediente = useInputValue("");
  const [detalleReceta, setDetalleReceta] = useState(
    manageLocalStorage("get", "recetasDetalle")
  );

  useEffect(() => {}, [recetas, detalleReceta]);
  const producto = useInputValue("");
  const unidadMedida = useInputValue("");
  const cantidadProducto = useInputValue("");
  const [message, setMessage] = useState("");
  const encargado = useInputValue("");
  const ordenProduccion = useInputValue("");
  const tipoMovimiento = useInputValue("");
  const entity = "movimientoMateriaPrima";
  const [movimientoMateriaPrima, setMovimientoMateriaPrima] = useState(
    manageLocalStorage("get", entity)
  );
  const [detalleProduccion, setDetalleProduccion] = useState(
    manageLocalStorage("get", "detalleProduccion")
  );
  const [recetas, setRecetas] = useState(manageLocalStorage("get", entity));

  useEffect(() => {}, [movimientoMateriaPrima, recetas, detalleReceta]);

  const handleAcceptIngredientButton = () => {
    setDetailsModal(!detailsModal);
    setMessage("Ingrediente agregado correctamente");
    setSuccessMessage(!succesMessage);
    setDetalleReceta(
      manageLocalStorage("post", "recetasDetalle", {
        ingrediente: nombreIngrediente.value,
        cantidad: cantidadIngrediente.value,
        unidadMedida: unidadMedida.value,
      })
    );
    messageTimeOut(setSuccessMessage);
  };
  const handleAcceptButton = () => {
    setOpenModal(!openModal);
    setMessage("Movimiento de materia prima generado correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  const handleModifyIngredientButton = () => {
    setDetailsModal(!detailsModal);
    setMessage("Ingrediente modificado correctamente");
    setSuccessMessage(!succesMessage);
    messageTimeOut(setSuccessMessage);
  };
  const handleModifyButton = () => {
    setOpenModifyModal(!openModifyModal);
    setMessage("Movimiento de materia prima modificado correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  return (
    <div className="Productos">
      <h1 className="Productos-title">
        Listado de movimientos de materia prima
      </h1>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="Button-add"
        type="button"
      >
        Generar Movimiento de Materia Prima
      </button>
      <Table
        onDelete={(id) =>
          setMovimientoMateriaPrima(
            manageLocalStorage("delete", entity, "", id)
          )
        }
        onEdit={() => setOpenModifyModal(!openModifyModal)}
        body={movimientoMateriaPrima}
        edit={false}
        del={false}
      />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={"Generar Movimiento de Materia Prima"}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}
        >
          <LabeledDataList
            options={initialState.personal}
            which={["nombreApellido"]}
            {...encargado}
            text="Encargado"
          />
          <LabeledDataList
            onChange={(e) =>
              ordenProduccion.setValue(
                e.target.value.slice(0, e.target.value.indexOf(","))
              )
            }
            nullable={true}
            options={initialState.ordenProduccion}
            which={["id", "fecha", "hora"]}
            value={ordenProduccion.value}
            setValue={ordenProduccion.setValue}
            text="Orden de Produccion"
          />
          <LabeledDataList
            {...tipoMovimiento}
            options={[{ tipo: "Entrada" }, { tipo: "Salida" }]}
            which={["tipo"]}
            text="Tipo de movimiento"
          />
          <button
            style={{ width: "max-content", marginBottom: "5rem" }}
            onClick={() => setDetailsModal(true)}
            type="button"
            className="Button-cancel"
          >
            Seleccionar Materia Prima
          </button>
          <Table
            onEdit={() => setDetailsModal(!detailsModal)}
            onDelete={(id) =>
              setDetalleProduccion(
                manageLocalStorage("delete", "detalleProduccion", "", id)
              )
            }
            body={detalleReceta}
            edit={false}
            del={false}
          />
        </Form>
      </Modal>
      <Modal open={openModifyModal} setClosed={() => setOpenModifyModal(false)}>
        <Form
          title={"Modificar Movimiento de Materia Prima"}
          multiple={true}
          edit={true}
          onEdit={() => handleModifyButton()}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModifyModal(!openModifyModal)}
        >
          <LabeledDataList
            options={initialState.personal}
            which={["nombreApellido"]}
            {...encargado}
            text="Encargado"
          />
          <LabeledDataList
            onChange={(e) =>
              ordenProduccion.setValue(
                e.target.value.slice(0, e.target.value.indexOf(","))
              )
            }
            nullable={true}
            options={initialState.ordenProduccion}
            which={["id", "fecha", "hora"]}
            value={ordenProduccion.value}
            setValue={ordenProduccion.setValue}
            text="Orden de Produccion"
          />
          <LabeledDataList
            {...tipoMovimiento}
            options={[{ tipo: "Entrada" }, { tipo: "Salida" }]}
            which={["tipo"]}
            text="Tipo de movimiento"
          />
          <Table
            onEdit={() => setDetailsModal(!detailsModal)}
            onDelete={(id) =>
              setDetalleReceta(
                manageLocalStorage("delete", "recetasDetalle", "", id)
              )
            }
            body={detalleProduccion}
            edit={false}
            del={false}
          />
          <button
            style={{ width: "max-content", marginBottom: "5rem" }}
            onClick={() => setDetailsModal(true)}
            type="button"
            className="Button-cancel"
          >
            Seleccionar Materia Prima
          </button>
          <Table
            onEdit={() => setDetailsModal(!detailsModal)}
            onDelete={(id) =>
              setDetalleProduccion(
                manageLocalStorage("delete", "detalleProduccion", "", id)
              )
            }
            body={detalleReceta}
            edit={false}
            del={false}
          />
        </Form>
      </Modal>
      <AddDetalleReceta
        detailsModal={detailsModal}
        handleAcceptIngredientButton={handleAcceptIngredientButton}
        handleModifyIngredientButton={handleModifyIngredientButton}
        setDetailsModal={setDetailsModal}
        nombreIngrediente={nombreIngrediente}
        cantidadIngrediente={cantidadIngrediente}
        unidadMedida={unidadMedida}
      />
      <Message
        type="success"
        hide={succesMessage}
        onCLickClose={() => setSuccessMessage(!succesMessage)}
      >
        {message}
      </Message>
    </div>
  );
};

export default MovimientoMateriaPrima;
