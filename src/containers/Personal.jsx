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
import LabeledDataList from "../components/LabeledDataList";
import initialState from "../initialState/initialState";

const Personal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [message, setMessage] = useState("");
  const nombre = useInputValue("");
  const apellido = useInputValue("");
  const dni = useInputValue("");
  const cuil = useInputValue("");
  const calle = useInputValue("");
  const altura = useInputValue("");
  const depto = useInputValue("");
  const telefono = useInputValue("");
  const mail = useInputValue("");
  const puesto = useInputValue("");
  const sueldo = useInputValue("");
  const tipoDocumento = useInputValue("");
  const entity = "personal";
  const [personal, setPersonal] = useState(manageLocalStorage("get", entity));

  useEffect(() => {}, [personal]);

  const handleAcceptButton = () => {
    setOpenModal(!openModal);
    setMessage("Personal agregado correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  const handleModifyButton = () => {
    setOpenModifyModal(!openModifyModal);
    setMessage("Datos de personal modificados correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  return (
    <div className="Productos">
      <h1 className="Productos-title">Listado de Personal</h1>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="Button-add"
        type="button"
      >
        Agregar Personal
      </button>
      <Table
        onDelete={(id) =>
          setPersonal(manageLocalStorage("delete", entity, "", id))
        }
        onEdit={() => setOpenModifyModal(!openModifyModal)}
        body={personal}
        edit={false}
        del={false}
      />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={"Agregar Personal"}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}
        >
          <LabeledInput {...nombre} text="Nombres" />
          <LabeledInput {...apellido} text="Apellidos" />
          <LabeledDataList
            {...tipoDocumento}
            options={initialState.tipoDocumento}
            which={["nombre"]}
            text="Tipo de Documento"
          />
          <LabeledInput
            {...dni}
            text={tipoDocumento.value ? tipoDocumento.value : ""}
          />
          <LabeledDataList
            {...calle}
            options={initialState.calle}
            which={["nombre", "localidad"]}
            text="Calle"
          />
          <LabeledInput {...altura} text="Altura" />
          <LabeledInput {...depto} text="Departamento" />
          <LabeledInput {...telefono} text="Telefono" />
          <LabeledInput {...mail} text="Mail" />
          <LabeledDataList
            {...puesto}
            options={[
              { id: 1, nombre: "Recepcionista" },
              { id: 2, nombre: "Administrativo" },
              { id: 3, nombre: "Encargado de Compras" },
              { id: 4, nombre: "Encargado de Produccion" },
            ]}
            which={["nombre"]}
            text="Puesto"
          />
          <LabeledInput {...sueldo} text="Sueldo" />
        </Form>
      </Modal>
      <Modal open={openModifyModal} setClosed={() => setOpenModifyModal(false)}>
        <Form
          title={"Modificar Datos de Personal"}
          multiple={true}
          edit={true}
          onEdit={() => handleModifyButton()}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModifyModal(!openModifyModal)}
        >
          <LabeledInput {...nombre} text="Nombres" />
          <LabeledInput {...apellido} text="Apellidos" />
          <LabeledDataList
            {...tipoDocumento}
            options={initialState.tipoDocumento}
            which={["nombre"]}
            text="Tipo de Documento"
          />
          <LabeledInput
            {...dni}
            text={tipoDocumento.value ? tipoDocumento.value : ""}
          />
          <LabeledDataList
            {...calle}
            options={initialState.calle}
            which={["nombre", "localidad"]}
            text="Calle"
          />
          <LabeledInput {...altura} text="Altura" />
          <LabeledInput {...depto} text="Departamento" />
          <LabeledInput {...telefono} text="Telefono" />
          <LabeledInput {...mail} text="Mail" />
          <LabeledDataList
            {...puesto}
            options={[
              { id: 1, nombre: "Recepcionista" },
              { id: 2, nombre: "Administrativo" },
              { id: 3, nombre: "Encargado de Compras" },
              { id: 4, nombre: "Encargado de Produccion" },
            ]}
            which={["nombre"]}
            text="Puesto"
          />
          <LabeledInput {...sueldo} text="Sueldo" />
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

export default Personal;
