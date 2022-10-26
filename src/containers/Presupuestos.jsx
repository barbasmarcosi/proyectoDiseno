import React from "react";
import { useState } from "react";
import Form from "../components/Form";
import LabeledInput from "../components/LabeledInput";
import Message from "../components/Message";
import Modal from "../components/Modal";
import Table from "../components/Table";
import useInputValue from "../hooks/useInputValue";
import modulo_ventas from "../initialState/modulo_ventas";
import LabeledDataList from "../components/LabeledDataList";

const Presupuestos = () => {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [message, setMessage] = useState("");
  const cliente = useInputValue("");
  const fechaEmision = useInputValue("");
  const fechaEvento = useInputValue("");
  const validez = useInputValue("");
  const subTotal = useInputValue("");
  const descuento = useInputValue("");
  const costoTotal = useInputValue("");
  const observaciones = useInputValue("");
  const productos = useInputValue("");

  const handleAcceptButton = () => {
    setOpenModal(!openModal);
    setMessage("Presupuesto agregado correctamente");
    setSuccessMessage(!succesMessage);
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
        onEdit={() => setOpenModifyModal(!openModifyModal)}
        body={modulo_ventas.presupuestos}
        exceptions={["productos"]}
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
            value={modulo_ventas.presupuestos.length + 1}
            text="Nro. Presupuesto"
            toShowId={true}
          />
          <LabeledDataList
            {...cliente}
            text="Cliente"
            options={modulo_ventas.presupuestos}
            which={"cliente"}
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
            value={modulo_ventas.presupuestos.length + 1}
            text="Nro. Presupuesto"
            toShowId={true}
          />
          <LabeledDataList
            {...cliente}
            text="Cliente"
            options={modulo_ventas.presupuestos}
            which={"cliente"}
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
