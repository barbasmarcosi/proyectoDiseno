import React from "react";
import Form from "../../components/Form";
import LabeledDataList from "../../components/LabeledDataList";
import LabeledInput from "../../components/LabeledInput";
import Modal from "../../components/Modal";
import useInputValue from "../../hooks/useInputValue";
import initialState from "../../initialState/initialState";

const AddDetalleReceta = ({
  detailsModal,
  setDetailsModal,
  handleModifyIngredientButton,
  handleAcceptIngredientButton,
  detailRef,
  nombreIngrediente,
  cantidadIngrediente,
  unidadMedida,
}) => {
  return (
    <Modal open={detailsModal} setClosed={() => setDetailsModal(false)}>
      <Form
        title={"Seleccionar Ingredientes"}
        multiple={true}
        edit={false}
        onEdit={handleModifyIngredientButton}
        onAdd={handleAcceptIngredientButton}
        onAddMultiple={() => setDetailsModal(!!detailsModal)}
        onCancel={() => setDetailsModal(!detailsModal)}
      >
        <div ref={detailRef}>
          <LabeledDataList
            {...nombreIngrediente}
            options={initialState.receta[2].materiaPrima}
            which={["nombre"]}
            text="Ingrediente"
          />
          <LabeledInput {...cantidadIngrediente} text="Cantidad" />
          <LabeledDataList
            {...unidadMedida}
            options={initialState.receta[2].materiaPrima}
            which={["unidadMedida"]}
            text="Unidad de medida"
          />
        </div>
      </Form>
    </Modal>
  );
};

export default AddDetalleReceta;
