import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Form from "../../components/Form";
import LabeledInput from "../../components/LabeledInput";
import LabeledSelector from "../../components/LabeledSelector";
import Message from "../../components/Message";
import Modal from "../../components/Modal";
import Table from "../../components/Table";
import useInputValue from "../../hooks/useInputValue";
import initialState from "../../initialState/initialState";
import manageLocalStorage from "../../usefullFunctions/manageLocalStorage";
import AddMarcas from "./AddMarcas";

const Marcas = () => {
  const [openModal, setOpenModal] = useState(false);
  const [infalcionModal, setInfalcionModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [message, setMessage] = useState("");
  const descripcion = useInputValue("");
  const montoAumento = useInputValue("");
  const entity = "marca";
  const [marcas, setMarcas] = useState(manageLocalStorage("get", entity));

  useEffect(() => {}, [marcas]);

  const handleAcceptButton = () => {
    setOpenModal(!openModal);
    setMessage("Marca agregada correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  const handleAcceptRaiseButton = () => {
    setInfalcionModal(!infalcionModal);
    setMessage("Aumento de precio por marca generado correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  const handleModifyButton = () => {
    setOpenModifyModal(!openModifyModal);
    setMessage("Marca modificada correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  return (
    <div className="Productos">
      <h1 className="Productos-title">Listado de Marcas</h1>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="Button-add"
        type="button"
      >
        Agregar Marca
      </button>
      <button
        onClick={() => setInfalcionModal(!infalcionModal)}
        style={{
          width: "max-content",
          background: "whitesmoke",
          color: "black",
        }}
        className="Button-add"
        type="button"
      >
        Aumentar precios por marca
      </button>
      <Table
        onDelete={(id) =>
          setMarcas(manageLocalStorage("delete", entity, "", id))
        }
        onEdit={() => setOpenModifyModal(!openModifyModal)}
        body={marcas}
        edit={false}
        del={false}
      />
      <AddMarcas
        openModal={openModal}
        setOpenModal={setOpenModal}
        handleAcceptButton={handleAcceptButton}
      />
      <Modal open={openModifyModal} setClosed={() => setOpenModifyModal(false)}>
        <Form
          title={"Modificar Marca"}
          multiple={true}
          edit={true}
          onEdit={() => handleModifyButton()}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModifyModal(!openModifyModal)}
        >
          <LabeledInput {...descripcion} text="Nombre" />
        </Form>
      </Modal>
      <Modal open={infalcionModal} setClosed={() => setInfalcionModal(false)}>
        <Form
          title={"Aumentar precios por marca"}
          onAdd={() => handleAcceptRaiseButton()}
          onCancel={() => setInfalcionModal(!infalcionModal)}
          generate={true}
        >
          <LabeledSelector
            options={initialState.marca}
            which={["nombre"]}
            {...descripcion}
            text="Marcas"
          />
          <LabeledInput {...montoAumento} text="Procentaje de aumento" />
          <LabeledInput
            type="datetime-local"
            value={new Date(Date.now()).toISOString().slice(0, 16)}
            text="Fecha actual"
          />
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

export default Marcas;
