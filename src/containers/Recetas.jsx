import React from "react";
import { useState, useRef } from "react";
import Form from "../components/Form";
import LabeledInput from "../components/LabeledInput";
import Message from "../components/Message";
import Modal from "../components/Modal";
import Table from "../components/Table";
import useInputValue from "../hooks/useInputValue";
import modulo_productos from "../initialState/modulo_productos";
import LabeledDataList from "../components/LabeledDataList";
import useLocalStorage from "../hooks/useLocalStorage";

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
  let detalleReceta = JSON.parse(localStorage.getItem("recetasDetalle"))
    ? JSON.parse(localStorage.getItem("recetasDetalle"))
    : [];
  const detailRef = useRef();

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
    detalleReceta.push({
      producto: detailRef.current.children[0].children[1].children[0].value,
      cantidad: detailRef.current.children[1].children[1].children[0].value,
      unidadMedida: detailRef.current.children[2].children[1].children[0].value,
    });
    localStorage.setItem("recetasDetalle", JSON.stringify(detalleReceta));
    detalleReceta = JSON.parse(localStorage.getItem("recetasDetalle"));
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  const handleModifyButton = () => {
    setOpenModifyModal(!openModifyModal);
    setMessage("Receta modificada correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  const handleModifyIngredientButton = () => {
    setDetailsModal(!detailsModal);
    setMessage("Ingrediente modificado correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
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
        onEdit={() => setOpenModifyModal(!openModifyModal)}
        body={modulo_productos.recetas}
        detail="materiaPrima"
        edit={false}
        del={false}
      />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={"Agregar Receta"}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}
        >
          <LabeledDataList
            {...producto}
            options={modulo_productos.productos}
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
            options={modulo_productos.productos}
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
      <Modal open={detailsModal} setClosed={() => setDetailsModal(false)}>
        <Form
          title={"Seleccionar Ingredientes"}
          multiple={true}
          edit={false}
          onEdit={() => handleModifyIngredientButton()}
          onAdd={() => handleAcceptIngredientButton()}
          onAddMultiple={() => setDetailsModal(!!detailsModal)}
          onCancel={() => setDetailsModal(!detailsModal)}
        >
          <div ref={detailRef}>
            <LabeledDataList
              {...nombreIngrediente}
              options={modulo_productos.recetas[2].materiaPrima}
              which={["nombre"]}
              text="Ingrediente"
            />
            <LabeledInput {...cantidadIngrediente} text="Cantidad" />
            <LabeledDataList
              {...unidadMedida}
              options={modulo_productos.recetas[2].materiaPrima}
              which={["unidadMedida"]}
              text="Unidad de medida"
            />
          </div>
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

export default Recetas;
