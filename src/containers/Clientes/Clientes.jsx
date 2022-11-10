import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Form from "../../components/Form";
import LabeledInput from "../../components/LabeledInput";
import Message from "../../components/Message";
import Modal from "../../components/Modal";
import Table from "../../components/Table";
import useInputValue from "../../hooks/useInputValue";
import LabeledDataList from "../../components/LabeledDataList";
import initialState from "../../initialState/initialState";
import manageLocalStorage from "../../usefullFunctions/manageLocalStorage";
import ClientesAdd from "./ClientesAdd";
import ClientesModify from "./ClientesModify";

const Clientes = () => {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [message, setMessage] = useState("");
  const tipoResponsable = useInputValue("");
  const nombre = useInputValue("");
  const apellido = useInputValue("");
  const calle = useInputValue("");
  const altura = useInputValue("");
  const depto = useInputValue("");
  const razonSocial = useInputValue("");
  const cuit = useInputValue("");
  const fechaNacimiento = useInputValue("");
  const telefono = useInputValue("");
  const mail = useInputValue("");
  const tipoDocumento = useInputValue("");
  const entity = "cliente";
  const [clientes, setClientes] = useState(manageLocalStorage("get", entity));

  useEffect(() => {}, [clientes]);

  const handleModifyButton = () => {
    setOpenModifyModal(!openModifyModal);
    setMessage("Cliente modificado correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };

  return (
    <div className="Productos">
      <h1 className="Productos-title">Listado de Clientes</h1>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="Button-add"
        type="button"
      >
        Agregar Cliente
      </button>
      <Table
        body={clientes}
        onDelete={(id) =>
          setClientes(manageLocalStorage("delete", entity, "", id))
        }
        onEdit={(data) => {
          setOpenModifyModal(!openModifyModal);
          setEdit(data);
        }}
        edit={false}
        del={false}
      />
      <ClientesAdd
        setMessage={setMessage}
        setMessageState={setSuccessMessage}
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
      {/*<ClientesModify
        setMessage={setMessage}
        setMessageState={setSuccessMessage}
        setOpenModal={setOpenModal}
        openModal={openModal}
      />*/}
      <Modal
        open={openModifyModal}
        setClosed={() => setOpenModifyModal(!openModifyModal)}
      >
        <Form
          title={"Agregar Cliente"}
          multiple={true}
          edit={true}
          onEdit={() => handleModifyButton()}
          onAdd={() => handleModifyButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModifyModal(!openModifyModal)}
        >
          {/*<LabeledInput {...nombre} text="Nombres" />
          <LabeledInput {...apellido} text="Apellidos" />*/}
          <LabeledInput {...razonSocial} text="Razon Social" />
          <LabeledDataList
            {...tipoDocumento}
            options={initialState.tipoDocumento}
            which={["nombre"]}
            text="Tipo de Documento"
          />
          <LabeledInput
            {...cuit}
            text={tipoDocumento.value ? tipoDocumento.value : ""}
          />
          <LabeledDataList
            {...calle}
            options={initialState.calle}
            which={["nombre"]}
            text="Calle"
          />
          <LabeledInput {...altura} text="Altura" />
          <LabeledInput {...depto} text="Departamento" />
          <LabeledInput
            {...fechaNacimiento}
            type="date"
            text="Fecha De Nacimiento"
          />
          <LabeledInput {...telefono} text="Telefono" />
          <LabeledInput {...mail} text="Mail" type="mail" />
          <LabeledDataList
            {...tipoResponsable}
            options={initialState.tipoResponsable}
            which={["descripcion"]}
            text="Tipo de Responabilidad"
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

export default Clientes;
