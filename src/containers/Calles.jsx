import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Form from "../components/Form";
import LabeledInput from "../components/LabeledInput";
import Message from "../components/Message";
import Modal from "../components/Modal";
import Table from "../components/Table";
import useInputValue from "../hooks/useInputValue";
import manageLocalStorage from "../usefullFunctions/manageLocalStorage";

const Calles = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [message, setMessage] = useState("");
  const [succesMessage, setSuccessMessage] = useState(true);
  const denominacion = useInputValue("");
  const localidad = useInputValue("");
  const entity = "calle";
  const [calles, setCalles] = useState(manageLocalStorage("get", entity));
  useEffect(() => {}, [calles]);

  const handleAcceptButton = () => {
    setOpenModal(!openModal);
    setMessage("Calle agregada correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  const handleEditButton = () => {
    setOpenModifyModal(!openModifyModal);
    setMessage("Calle modificada correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  return (
    <div className="Productos">
      <h1 className="Productos-title">Listado de Calles</h1>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="Button-add"
        type="button"
      >
        Agregar Calle
      </button>
      <Table
        onDelete={(id) =>
          setCalles(manageLocalStorage("delete", entity, "", id))
        }
        body={calles}
        edit={false}
        onEdit={() => setOpenModifyModal(!openModifyModal)}
        del={false}
      />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={"Agregar Calle"}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}
        >
          <LabeledInput {...denominacion} text="Calle" />
          <LabeledInput {...localidad} text="Localidad" />
        </Form>
      </Modal>
      <Modal open={openModifyModal} setClosed={() => setOpenModal(false)}>
        <Form
          edit={true}
          title={"Modificar Calle"}
          multiple={true}
          onEdit={() => handleEditButton()}
          onCancel={() => setOpenModifyModal(!openModifyModal)}
        >
          <LabeledInput {...denominacion} text="Calle" />
          <LabeledInput {...localidad} text="Localidad" />
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

export default Calles;
