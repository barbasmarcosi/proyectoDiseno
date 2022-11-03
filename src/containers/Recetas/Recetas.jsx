import React, { useState, useRef, useEffect } from "react";
import Form from "../../components/Form";
import LabeledInput from "../../components/LabeledInput";
import Message from "../../components/Message";
import Modal from "../../components/Modal";
import Table from "../../components/Table";
import useInputValue from "../../hooks/useInputValue";
import initialState from "../../initialState/initialState";
import LabeledDataList from "../../components/LabeledDataList";
import manageLocalStorage from "../../usefullFunctions/manageLocalStorage";
import AddReceta from "./AddReceta";
import AddDetalleReceta from "./AddDetalleReceta";
import messageTimeOut from "../../usefullFunctions";

const Recetas = () => {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [message, setMessage] = useState("");
  const [detailsModal, setDetailsModal] = useState(false);
  const producto = useInputValue("");
  const descripcion = useInputValue("");
  const tiempoElaboracion = useInputValue("");
  const cantidadProducto = useInputValue("");
  const nombreIngrediente = useInputValue("");
  const cantidadIngrediente = useInputValue("");
  const unidadMedida = useInputValue("");
  const [detalleReceta, setDetalleReceta] = useState(
    manageLocalStorage("get", "recetasDetalle")
  );
  const detailRef = useRef();
  const entity = "receta";
  const [recetas, setRecetas] = useState(manageLocalStorage("get", entity));

  useEffect(() => {}, [recetas, detalleReceta]);

  const handleAcceptButton = () => {
    setOpenModal(!openModal);
    setMessage("Receta agregada correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  const handleAcceptIngredientButton = () => {
    setDetailsModal(!detailsModal);
    setMessage("Ingrediente agregado correctamente");
    setSuccessMessage(!succesMessage);
    setDetalleReceta(
      manageLocalStorage("post", "recetasDetalle", {
        producto: producto.value,
        cantidad: cantidadIngrediente.value,
        unidadMedida: unidadMedida.value,
      })
    );
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  const handleModifyButton = () => {
    setOpenModifyModal(!openModifyModal);
    setMessage("Receta modificada correctamente");
    setSuccessMessage(!succesMessage);
    messageTimeOut(setSuccessMessage);
  };
  const handleModifyIngredientButton = () => {
    setDetailsModal(!detailsModal);
    setMessage("Ingrediente modificado correctamente");
    setSuccessMessage(!succesMessage);
    messageTimeOut(setSuccessMessage);
  };
  return (
    <div className="Productos">
      <h1 className="Productos-title">Listado de Recetas</h1>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="Button-add"
        type="button"
      >
        Agregar Receta
      </button>
      <Table
        onDelete={(id) =>
          setRecetas(manageLocalStorage("delete", entity, "", id))
        }
        onEdit={() => setOpenModifyModal(!openModifyModal)}
        body={initialState.receta}
        searchingFor={["producto"]}
        detail="materiaPrima"
        edit={false}
        del={false}
      />
      <AddReceta
        detailsModal={detailsModal}
        detalleReceta={detalleReceta}
        handleAcceptButton={handleAcceptButton}
        openModal={openModal}
        setDetailsModal={setDetailsModal}
        setOpenModal={setOpenModal}
      />
      <Modal open={openModifyModal} setClosed={() => setOpenModifyModal(false)}>
        <Form
          title={"Modificar Receta"}
          multiple={true}
          edit={true}
          onEdit={() => handleModifyButton()}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModifyModal(!openModifyModal)}
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
          <button
            style={{ width: "max-content", marginBottom: "5rem" }}
            onClick={() => setDetailsModal(true)}
            type="button"
            className="Button-cancel"
          >
            Seleccionar Ingredientes
          </button>
        </Form>
      </Modal>
      <AddDetalleReceta
        detailRef={detailRef}
        detailsModal={detailsModal}
        handleAcceptIngredientButton={handleAcceptIngredientButton}
        handleModifyIngredientButton={handleModifyIngredientButton}
        setDetailsModal={setDetailsModal}
        nombreIngrediente={nombreIngrediente}
        cantidadIngrediente={cantidadIngrediente}
        unidadMedida={unidadMedida}
      />
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

export default Recetas;
