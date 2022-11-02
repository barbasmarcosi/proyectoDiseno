import React, { useEffect } from "react";
import { useState } from "react";
import Form from "../components/Form";
import LabeledInput from "../components/LabeledInput";
import Message from "../components/Message";
import Modal from "../components/Modal";
import Table from "../components/Table";
import useInputValue from "../hooks/useInputValue";
import manageLocalStorage from "../usefullFunctions/manageLocalStorage";

function Proveedores() {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [message, setMessage] = useState("");
  const razonSocial = useInputValue("");
  const cuit = useInputValue("");
  const tipoResponable = useInputValue("");
  const calle = useInputValue("");
  const altura = useInputValue("");
  const telefono = useInputValue("");
  const mail = useInputValue("");
  const cbu = useInputValue("");
  const web = useInputValue("");
  const entity = "proveedor";
  const [proveedores, setProveedores] = useState(
    manageLocalStorage("get", entity)
  );

  useEffect(() => {}, [proveedores]);

  const handleAcceptButton = () => {
    setOpenModal(!openModal);
    setMessage("Proveedor agregado correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  const handleModifyButton = () => {
    setOpenModifyModal(!openModifyModal);
    setMessage("Datos de proveedor modificados correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };

  return (
    <div className="Productos">
      <h1 className="Productos-title">Listado de Proveedores</h1>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="Button-add"
        type="button"
      >
        Agregar Proveedor
      </button>
      <Table
        onEdit={() => setOpenModifyModal(!openModifyModal)}
        body={proveedores}
        edit={false}
        del={false}
      />
      <Modal
        onDelete={(id) =>
          setProveedores(manageLocalStorage("delete", entity, "", id))
        }
        open={openModal}
        setClosed={() => setOpenModal(false)}
      >
        <Form
          title={"Agregar Proveedor"}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}
        >
          <LabeledInput {...razonSocial} text="Razon Social" />
          <LabeledInput {...cuit} text="CUIT" />
          <LabeledInput {...tipoResponable} text="Tipo de Responsable" />
          <LabeledInput {...calle} text="Calle" />
          <LabeledInput {...altura} text="Altura" />
          <LabeledInput {...telefono} text="Telefono" />
          <LabeledInput {...mail} text="Mail" />
          <LabeledInput {...cbu} text="CBU" />
          <LabeledInput {...web} text="Web" />
        </Form>
      </Modal>
      <Modal open={openModifyModal} setClosed={() => setOpenModifyModal(false)}>
        <Form
          title={"Modificar datos del proveedor"}
          multiple={true}
          edit={true}
          onEdit={() => handleModifyButton()}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModifyModal(!openModifyModal)}
        >
          <LabeledInput {...razonSocial} text="Razon Social" />
          <LabeledInput {...cuit} text="CUIT" />
          <LabeledInput {...tipoResponable} text="Tipo de Responsable" />
          <LabeledInput {...calle} text="Calle" />
          <LabeledInput {...altura} text="Altura" />
          <LabeledInput {...telefono} text="Telefono" />
          <LabeledInput {...mail} text="Mail" />
          <LabeledInput {...cbu} text="CBU" />
          <LabeledInput {...web} text="Web" />
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

export default Proveedores;
