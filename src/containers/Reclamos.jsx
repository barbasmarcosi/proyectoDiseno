import React from "react";
import { useState } from "react";
import Form from "../components/Form";
import LabeledInput from "../components/LabeledInput";
import Message from "../components/Message";
import Modal from "../components/Modal";
import Table from "../components/Table";
import useInputValue from "../hooks/useInputValue";
import initialState from "../initialState/initialState";
import LabeledDataList from "../components/LabeledDataList";
import manageLocalStorage from "../usefullFunctions/manageLocalStorage";
import { useEffect } from "react";

const Reclamos = () => {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [message, setMessage] = useState("");
  const pedidoCliente = useInputValue("");
  const fechaReclamo = useInputValue("");
  const descripcion = useInputValue("");
  const entity = "reclamo";
  const [reclamos, setReclamos] = useState(manageLocalStorage("get", entity));

  useEffect(() => {}, [reclamos]);

  const handleAcceptButton = () => {
    setOpenModal(!openModal);
    setMessage("Reclamo generado correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  const handleModifyButton = () => {
    setOpenModifyModal(!openModifyModal);
    setMessage("Reclamo modificado correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  return (
    <div className="Productos">
      <h1 className="Productos-title">Listado de Reclamos</h1>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="Button-add"
        type="button"
      >
        Generar Reclamo
      </button>
      <Table
        onDelete={(id) =>
          setReclamos(manageLocalStorage("delete", entity, "", id))
        }
        onEdit={() => setOpenModifyModal(!openModifyModal)}
        body={reclamos}
        edit={false}
        del={false}
        searchingFor={["pedido"]}
      />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={"Generar Reclamo"}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}
        >
          <LabeledInput
            value={initialState.reclamo.length + 1}
            toShowId={true}
            text="Nro. Reclamo"
          />
          <LabeledDataList
            {...pedidoCliente}
            options={initialState.pedido}
            which={["id", "cliente", "fechaPedido", "horaPedido"]}
            text="Pedido de Cliente"
          />
          <LabeledInput
            {...fechaReclamo}
            type="datetime-local"
            text="Fecha de Reclamo"
          />
          <LabeledInput {...descripcion} text="Descripcion" />
        </Form>
      </Modal>
      <Modal open={openModifyModal} setClosed={() => setOpenModifyModal(false)}>
        <Form
          title={"Modificar Reclamo"}
          multiple={true}
          edit={true}
          onEdit={() => handleModifyButton()}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModifyModal(!openModifyModal)}
        >
          <LabeledInput
            value={initialState.reclamo.length + 1}
            toShowId={true}
            text="Nro. Reclamo"
          />
          <LabeledDataList
            {...pedidoCliente}
            options={initialState.pedido}
            which={["id", "cliente", "fechaPedido", "horaPedido"]}
            text="Pedido de Cliente"
          />
          <LabeledInput
            {...fechaReclamo}
            type="datetime-local"
            text="Fecha de Reclamo"
          />
          <LabeledInput {...descripcion} text="Descripcion" />
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

export default Reclamos;
