import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Form from "../components/Form";
import LabeledDataList from "../components/LabeledDataList";
import LabeledInput from "../components/LabeledInput";
import Message from "../components/Message";
import Modal from "../components/Modal";
import Table from "../components/Table";
import useInputValue from "../hooks/useInputValue";
import initialState from "../initialState/initialState";
import manageLocalStorage from "../usefullFunctions/manageLocalStorage";

const Deliverys = () => {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [message, setMessage] = useState("");
  const nombre = useInputValue("");
  const apellido = useInputValue("");
  const calle = useInputValue("");
  const altura = useInputValue("");
  const depto = useInputValue("");
  const cuil = useInputValue("");
  const fechaNacimiento = useInputValue("");
  const telefono = useInputValue("");
  const mail = useInputValue("");
  const tipoDocumento = useInputValue("");
  const vehiculo = useInputValue("");
  const numeroHabilitacion = useInputValue("");
  const vencimientoHanilitacion = useInputValue("");
  const entity = "delivery";
  const [deliverys, setDeliverys] = useState(manageLocalStorage("get", entity));

  useEffect(() => {}, [deliverys]);

  const handleAcceptButton = () => {
    setOpenModal(!openModal);
    setMessage("Delivery agregado correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  const handleModifyButton = () => {
    setOpenModifyModal(!openModifyModal);
    setMessage("Datos de delivery modificado correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  return (
    <div className="Productos">
      <h1 className="Productos-title">Listado de Deliverys</h1>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="Button-add"
        type="button"
      >
        Agregar Delivery
      </button>
      <Table
        onDelete={(id) =>
          setDeliverys(manageLocalStorage("delete", entity, "", id))
        }
        body={deliverys}
        onEdit={() => setOpenModifyModal(!openModifyModal)}
        edit={false}
        del={false}
      />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={"Agregar Delivery"}
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
            {...cuil}
            text={tipoDocumento.value ? tipoDocumento.value : ""}
          />
          <LabeledInput
            {...fechaNacimiento}
            type="date"
            text="Fecha De Nacimiento"
          />
          <LabeledInput {...telefono} text="Telefono" />
          <LabeledInput {...mail} text="Mail" type="mail" />
          <LabeledDataList
            options={initialState.calle}
            which={["nombre", "localidad"]}
            {...calle}
            text="Calle"
          />
          <LabeledInput {...altura} text="Altura" />
          <LabeledInput {...depto} text="Departamento" />
          <LabeledInput {...vehiculo} text="Vehiculo" />
          <LabeledInput {...numeroHabilitacion} text="Numero de Habilitacion" />
          <LabeledInput
            {...vencimientoHanilitacion}
            type="date"
            text="Vencimiento de Habilitacion"
          />
        </Form>
      </Modal>
      <Modal open={openModifyModal} setClosed={() => setOpenModifyModal(false)}>
        <Form
          title={"Modificar datos de Delivery"}
          multiple={true}
          edit={true}
          onAdd={() => handleAcceptButton()}
          onEdit={() => handleModifyButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModifyModal(!openModifyModal)}
        >
          <LabeledInput {...nombre} text="Nombres" />
          <LabeledInput {...apellido} text="Apellidos" />
          <LabeledInput {...cuil} text="CUIL" />
          <LabeledInput
            {...fechaNacimiento}
            type="date"
            text="Fecha De Nacimiento"
          />
          <LabeledInput {...telefono} text="Telefono" />
          <LabeledInput {...mail} text="Mail" type="mail" />
          <LabeledInput {...calle} text="Calle" />
          <LabeledInput {...altura} text="Altura" />
          <LabeledInput {...depto} text="Departamento" />
          <LabeledInput {...vehiculo} text="Vehiculo" />
          <LabeledInput {...numeroHabilitacion} text="Numero de Habilitacion" />
          <LabeledInput
            {...vencimientoHanilitacion}
            type="date"
            text="Vencimiento de Habilitacion"
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

export default Deliverys;
