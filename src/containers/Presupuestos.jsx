import React, { useEffect, useRef, useState } from "react";
import Form from "../components/Form";
import LabeledInput from "../components/LabeledInput";
import Message from "../components/Message";
import Modal from "../components/Modal";
import Table from "../components/Table";
import useInputValue from "../hooks/useInputValue";
import initialState from "../initialState/initialState";
import LabeledDataList from "../components/LabeledDataList";
import manageLocalStorage from "../usefullFunctions/manageLocalStorage";

const Presupuestos = () => {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const [message, setMessage] = useState("");
  const cliente = useInputValue("");
  const fechaEmision = useInputValue("");
  const fechaEvento = useInputValue("");
  const validez = useInputValue("");
  const subTotal = useInputValue("");
  const descuento = useInputValue("");
  const costoTotal = useInputValue("");
  const observaciones = useInputValue("");
  const producto = useInputValue("");
  const cantidadProducto = useInputValue("");
  const unidadMedida = useInputValue("");
  const precioUnitario = useInputValue("");
  const [importe, setImporte] = useState("");
  const detailRef = useRef();
  let detallePresupuesto = JSON.parse(
    localStorage.getItem("presupuestoDetalle")
  )
    ? JSON.parse(localStorage.getItem("presupuestoDetalle"))
    : [];
  const entity = "presupuesto";
  const [presupuestos, setPresupuestos] = useState(
    manageLocalStorage("get", entity)
  );

  useEffect(() => {}, [presupuestos]);

  const handleAcceptButton = () => {
    setOpenModal(!openModal);
    setMessage("Presupuesto agregado correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  const handleAcceptIngredientButton = () => {
    setDetailsModal(!detailsModal);
    setMessage("Producto agregado correctamente");
    setSuccessMessage(!succesMessage);
    detallePresupuesto.push({
      producto: detailRef.current.children[0].children[1].children[0].value,
      cantidad: detailRef.current.children[1].children[1].children[0].value,
      unidadMedida: detailRef.current.children[2].children[1].children[0].value,
      precioUnitario:
        detailRef.current.children[3].children[1].children[0].value,
      importe:
        detailRef.current.children[1].children[1].children[0].value *
        detailRef.current.children[3].children[1].children[0].value,
    });
    localStorage.setItem(
      "presupuestoDetalle",
      JSON.stringify(detallePresupuesto)
    );
    detallePresupuesto = JSON.parse(localStorage.getItem("presupuestoDetalle"));
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  const handleModifyButton = () => {
    setOpenModifyModal(!openModifyModal);
    setMessage("Presupuesto modificado correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  return (
    <div className="Productos">
      <h1 className="Productos-title">Listado de Presupuestos</h1>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="Button-add"
        type="button"
      >
        Agregar Presupuesto
      </button>
      <Table
        onDelete={(id) =>
          setPresupuestos(manageLocalStorage("delete", entity, "", id))
        }
        onEdit={() => setOpenModifyModal(!openModifyModal)}
        body={presupuestos}
        exceptions={[]}
        edit={false}
        del={false}
      />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={"Agregar Presupuesto"}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}
        >
          <LabeledInput
            value={initialState.presupuesto.length + 1}
            text="Nro. Presupuesto"
            toShowId={true}
          />
          <LabeledDataList
            {...cliente}
            text="Cliente"
            options={initialState.cliente}
            which={[
              "razonSocial",
              "calle",
              "altura",
              "depto",
              "telefonoEntrega",
            ]}
          />
          <LabeledInput
            {...fechaEmision}
            type="datetime-local"
            text="Fecha de Emision"
          />
          <LabeledInput
            {...fechaEvento}
            type="datetime-local"
            text="Fecha de Eveneto"
          />
          <LabeledInput {...validez} text="Validez" />
          <LabeledInput {...subTotal} text="Subtotal" />
          <LabeledInput {...descuento} text="Descuento" />
          <LabeledInput {...costoTotal} text="Costo Total" />
          <LabeledInput {...observaciones} text="Observaciones" />
          <Table
            onEdit={() => setDetailsModal(!detailsModal)}
            body={detallePresupuesto}
            edit={false}
            del={false}
          />
          <button
            style={{
              width: "max-content",
              marginBottom: "2rem",
              marginTop: "2rem",
            }}
            onClick={() => setDetailsModal(true)}
            type="button"
            className="Button-cancel"
          >
            Seleccionar Producto
          </button>
        </Form>
      </Modal>
      <Modal open={openModifyModal} setClosed={() => setOpenModifyModal(false)}>
        <Form
          title={"Modificar Presupuesto"}
          multiple={true}
          edit={true}
          onEdit={() => handleModifyButton()}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModifyModal(!openModifyModal)}
        >
          <LabeledInput
            value={initialState.presupuesto.length + 1}
            text="Nro. Presupuesto"
            toShowId={true}
          />
          <LabeledDataList
            {...cliente}
            text="Cliente"
            options={initialState.cliente}
            which={[
              "razonSocial",
              "calle",
              "altura",
              "depto",
              "telefonoEntrega",
            ]}
          />
          <LabeledInput
            {...fechaEmision}
            type="datetime-local"
            text="Fecha de Emision"
          />
          <LabeledInput
            {...fechaEvento}
            type="datetime-local"
            text="Fecha de Eveneto"
          />
          <LabeledInput {...validez} text="Validez" />
          <LabeledInput {...subTotal} text="Subtotal" />
          <LabeledInput {...descuento} text="Descuento" />
          <LabeledInput {...costoTotal} text="Costo Total" />
          <LabeledInput {...observaciones} text="Observaciones" />
          <Table
            onEdit={() => setDetailsModal(!detailsModal)}
            body={detallePresupuesto}
            edit={false}
            del={false}
          />
          <button
            style={{
              width: "max-content",
              marginBottom: "2rem",
              marginTop: "2rem",
            }}
            onClick={() => setDetailsModal(true)}
            type="button"
            className="Button-cancel"
          >
            Seleccionar Producto
          </button>
        </Form>
      </Modal>
      <Modal open={detailsModal} setClosed={() => setDetailsModal(false)}>
        <Form
          title={"Seleccionar Productos"}
          multiple={true}
          edit={false}
          //onEdit={() => handleModifyIngredientButton()}
          onAdd={() => handleAcceptIngredientButton()}
          onAddMultiple={() => setDetailsModal(!!detailsModal)}
          onCancel={() => setDetailsModal(!detailsModal)}
        >
          <div
            ref={detailRef}
            onChange={() =>
              setImporte(
                () =>
                  detailRef.current.children[1].children[1].children[0].value *
                  detailRef.current.children[3].children[1].children[0].value
              )
            }
          >
            <LabeledDataList
              {...producto}
              options={initialState.producto}
              which={["descripcion"]}
              text="Producto"
            />
            <LabeledInput {...cantidadProducto} text="Cantidad" />
            <LabeledDataList
              {...unidadMedida}
              options={initialState.materiaPrima}
              which={["unidadMedida"]}
              text="Unidad de medida"
            />
            <LabeledInput {...precioUnitario} text="Precio Unitario" />
            <LabeledInput value={importe} text="Importe" />
          </div>
        </Form>
      </Modal>
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

export default Presupuestos;
