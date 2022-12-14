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

function Provincias() {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [message, setMessage] = useState("");
  const nombre = useInputValue("");
  const entity = "provincia";
  const [provincias, setProvincias] = useState(
    manageLocalStorage("get", entity)
  );

  useEffect(() => {}, [provincias]);

  const handleAcceptButton = () => {
    setOpenModal(!openModal);
    setMessage("Provincia agregada correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  const handleModifyButton = () => {
    setOpenModifyModal(!openModifyModal);
    setMessage("Provincia modifcada correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  return (
    <div className="Productos">
      <h1 className="Productos-title">Listado de Provincias</h1>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="Button-add"
        type="button"
      >
        Agregar Provincia
      </button>
      <Table
        onDelete={(id) =>
          setProvincias(manageLocalStorage("delete", entity, "", id))
        }
        onEdit={() => setOpenModifyModal(!openModifyModal)}
        body={provincias}
        edit={false}
        del={false}
      />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={"Agregar Provincia"}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}
        >
          <LabeledInput {...nombre} text="Nombre" />
        </Form>
      </Modal>
      <Modal open={openModifyModal} setClosed={() => setOpenModifyModal(false)}>
        <Form
          title={"Modificar Provincia"}
          multiple={true}
          edit={true}
          onEdit={() => handleModifyButton()}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModifyModal(!openModifyModal)}
        >
          <LabeledInput {...nombre} text="Nombre" />
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
}

export default Provincias;
