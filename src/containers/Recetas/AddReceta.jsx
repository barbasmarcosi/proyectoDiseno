import React from "react";
import { Table } from "@mui/material";
import Form from "../../components/Form";
import LabeledDataList from "../../components/LabeledDataList";
import LabeledInput from "../../components/LabeledInput";
import Modal from "../../components/Modal";
import useInputValue from "../../hooks/useInputValue";
import initialState from "../../initialState/initialState";

const AddReceta = ({
  openModal,
  setOpenModal,
  handleAcceptButton,
  setDetailsModal,
  detailsModal,
  detalleReceta,
}) => {
  const producto = useInputValue("");
  const descripcion = useInputValue("");
  const tiempoElaboracion = useInputValue("");
  const cantidadProducto = useInputValue("");
  return (
    <Modal open={openModal} setClosed={() => setOpenModal(false)}>
      <Form
        title={"Agregar Receta"}
        multiple={true}
        onAdd={handleAcceptButton}
        onAddMultiple={() => setOpenModal(!!openModal)}
        onCancel={() => setOpenModal(false)}
      >
        <LabeledDataList
          {...producto}
          options={initialState.producto}
          which={["descripcion"]}
          text="Producto"
        />
        <LabeledInput {...descripcion} text="Descripcion" />
        <LabeledInput {...tiempoElaboracion} text="Tiempo de Elaboracion" />
        <LabeledInput {...cantidadProducto} text="Cantidad de Producto" />
        <Table
          onEdit={() => setDetailsModal(!detailsModal)}
          body={detalleReceta}
          edit={false}
          del={false}
        />
        <button
          style={{
            width: "max-content",
            marginBottom: "2rem",
            marginTop: "2rem",
          }}
          onClick={() => setDetailsModal(true)}
          type="button"
          className="Button-cancel"
        >
          Seleccionar Ingrediente
        </button>
      </Form>
    </Modal>
  );
};

export default AddReceta;
