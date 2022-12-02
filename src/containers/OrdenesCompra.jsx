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

const OrdenesCompra = () => {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [message, setMessage] = useState("");
  const proveedor = useInputValue("");
  const personal = useInputValue("");
  const fecha = useInputValue("");
  const terminoEntrega = useInputValue("");
  const montoTotal = useInputValue("");
  const observaciones = useInputValue("");
  const entity = "ordenCompra";
  const [ordenesCompra, setOrdenesCompra] = useState(
    manageLocalStorage("get", entity)
  );

  useEffect(() => {}, [ordenesCompra]);

  const handleAcceptButton = () => {
    setOpenModal(!openModal);
    setMessage("Orden de compra agregada correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  const handleModifyButton = () => {
    setOpenModifyModal(!openModifyModal);
    setMessage("Datos de orden de compra modificados correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  return (
    <div className="Productos">
      <h1 className="Productos-title">Listado de Ordenes de Compra</h1>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="Button-add"
        type="button"
      >
        Agregar Orden de Compra
      </button>
      <Table
        onDelete={(id) =>
          setOrdenesCompra(manageLocalStorage("delete", entity, "", id))
        }
        body={ordenesCompra}
        exceptions={["terminoEntrega"]}
        onEdit={() => setOpenModifyModal(!openModifyModal)}
        isDocument={true}
        edit={false}
        del={false}
      />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={"Agregar Orden de Compra"}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}
        >
          <LabeledDataList
            {...proveedor}
            options={initialState.proveedor}
            which={["razonSocial"]}
            text="Proveedor"
          />
          <LabeledDataList
            {...personal}
            options={initialState.personal}
            which={["nombreApellido"]}
            text="Encargado"
          />
          <LabeledInput
            {...fecha}
            type="datetime-local"
            text="Fecha y hora de la orden"
          />
          <LabeledInput {...terminoEntrega} text="Termino de Entrega" />
          <LabeledInput {...montoTotal} text="Monto Total" />
          <LabeledInput {...observaciones} text="Observaciones" />
        </Form>
      </Modal>
      <Modal open={openModifyModal} setClosed={() => setOpenModifyModal(false)}>
        <Form
          title={"Modificar Datos de Orden de Compra"}
          multiple={true}
          edit={true}
          onEdit={() => handleModifyButton()}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModifyModal(!openModifyModal)}
        >
          <LabeledDataList
            {...proveedor}
            options={initialState.proveedor}
            which={["razonSocial"]}
            text="Proveedor"
          />
          <LabeledDataList
            {...personal}
            options={initialState.personal}
            which={["nombreApellido"]}
            text="Encargado"
          />
          <LabeledInput
            {...fecha}
            type="datetime-local"
            text="Fecha y hora de la orden"
          />
          <LabeledInput {...terminoEntrega} text="Termino de Entrega" />
          <LabeledInput {...montoTotal} text="Monto Total" />
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

export default OrdenesCompra;
