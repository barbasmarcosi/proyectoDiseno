import React from "react";
import Form from "../../components/Form";
import LabeledInput from "../../components/LabeledInput";
import Modal from "../../components/Modal";
import useInputValue from "../../hooks/useInputValue";

const AddRubro = ({ handleAcceptButton, setOpenModal, openModal }) => {
  const descripcion = useInputValue("");

  return (
    <Modal open={openModal} setClosed={() => setOpenModal(false)}>
      <Form
        title={"Agregar Rubro"}
        multiple={true}
        onAdd={() => handleAcceptButton()}
        onAddMultiple={() => setOpenModal(!!openModal)}
        onCancel={() => setOpenModal(!openModal)}
      >
        <LabeledInput {...descripcion} text="Descripcion" />
      </Form>
    </Modal>
  );
};

export default AddRubro;
