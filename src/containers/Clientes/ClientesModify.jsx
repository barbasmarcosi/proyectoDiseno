import Form from "../../components/Form";
import LabeledInput from "../../components/LabeledInput";
import Modal from "../../components/Modal";
import useInputValue from "../../hooks/useInputValue";
import messageTimeOut from "../../usefullFunctions/messageTimeOut";

const ClientesModify = ({
  setMessage,
  setMessageState,
  setOpenModal,
  openModal,
  data,
}) => {
  const tipoResponsable = useInputValue(data.tipoResponsable);
  const nombre = useInputValue(data.nombre);
  const apellido = useInputValue(data.apellido);
  const calle = useInputValue(data.calle);
  const altura = useInputValue(data.altura);
  const depto = useInputValue(data.depto);
  const razonSocial = useInputValue(data.razonSocial);
  const cuit = useInputValue(data.cuit);
  const fechaNacimiento = useInputValue(data.fechaNacimiento);
  const telefono = useInputValue(data.telefono);
  const mail = useInputValue(data.mail);

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
        <LabeledInput {...nombre} text="Nombres" />
        <LabeledInput {...apellido} text="Apellidos" />
        <LabeledInput {...razonSocial} text="Razon Social" />
        <LabeledInput {...cuit} text="CUIT" />
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
        <LabeledInput {...tipoResponsable} text="Tipo de Responsable" />
      </Form>
    </Modal>
  );
};
export default ClientesModify;
