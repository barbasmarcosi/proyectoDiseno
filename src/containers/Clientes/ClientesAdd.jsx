import React from "react";
import Form from "../../components/Form";
import LabeledInput from "../../components/LabeledInput";
import Modal from "../../components/Modal";
import useInputValue from "../../hooks/useInputValue";
import messageTimeOut from "../../usefullFunctions/messageTimeOut";
import initialState from "../../initialState/initialState";
import LabeledDataList from "../../components/LabeledDataList";

const ClientesAdd = ({
  setMessage,
  setMessageState,
  setOpenModal,
  openModal,
}) => {
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
  const tipoDocumento = useInputValue("");
  const mail = useInputValue("");

  const handleAcceptButton = () => {
    setOpenModal(false);
    setMessage("Cliente agregado correctamente");
    setMessageState(false);
    messageTimeOut(setMessageState);
  };

  return (
    <Modal open={openModal} setClosed={() => setOpenModal(false)}>
      <Form
        title={"Agregar Cliente"}
        multiple={true}
        onAdd={() => handleAcceptButton()}
        onAddMultiple={() => setOpenModal(!!openModal)}
        onCancel={() => setOpenModal(!openModal)}
      >
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
          which={["nombre", "localidad"]}
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
  );
};
export default ClientesAdd;
