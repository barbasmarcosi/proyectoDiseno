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

const Produccion = () => {
  const [openModal, setOpenModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [message, setMessage] = useState("");
  const ordenPedido = useInputValue("");
  const encargadoProduccion = useInputValue("");
  const producto = useInputValue("");
  const unidadMedida = useInputValue("");
  const cantidadProducto = useInputValue("");
  const entity = "ordenProduccion";
  const [ordenesProduccion, setOrdenesProduccion] = useState(
    manageLocalStorage("get", entity)
  );
  const [detalleProduccion, setDetalleProduccion] = useState(
    manageLocalStorage("get", "detalleProduccion")
  );

  useEffect(() => {}, [detalleProduccion]);

  const handleAcceptButton = () => {
    setOpenModal(!openModal);
    setMessage("Orden de produccion agregada correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };

  const handleAcceptIngredientButton = (multiple = false) => {
    const valid =
      producto.value && cantidadProducto.value && unidadMedida.value;
    if (valid) {
      setDetalleProduccion(
        manageLocalStorage("post", "detalleProduccion", {
          producto: producto.value,
          cantidad: cantidadProducto.value,
          unidadMedida: unidadMedida.value,
        })
      );
      producto.setValue("");
      cantidadProducto.setValue("");
      unidadMedida.setValue("");
    }
    if (!multiple) setDetailsModal(false);
  };

  const handleModifyButton = () => {
    setOpenModifyModal(!openModifyModal);
    setMessage("Orden de produccion modificada correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  return (
    <div className="Productos">
      <h1 className="Productos-title">Listado de Ordenes de Produccion</h1>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="Button-add"
        type="button"
      >
        Agregar Orden de Produccion
      </button>
      <Table
        onDelete={(id) =>
          setOrdenesProduccion(manageLocalStorage("delete", entity, "", id))
        }
        onEdit={() => setOpenModifyModal(!openModifyModal)}
        body={ordenesProduccion}
        edit={false}
        del={false}
      />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={"Agregar Orden de Produccion"}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}
        >
          <LabeledInput {...ordenPedido} text="Orden de Pedido" />
          <LabeledInput
            {...encargadoProduccion}
            text="Encargado de Produccion"
          />
          <Table
            onEdit={() => setDetailsModal(!detailsModal)}
            onDelete={(id) =>
              setDetalleProduccion(
                manageLocalStorage("delete", "detalleProduccion", "", id)
              )
            }
            body={detalleProduccion}
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
            Seleccionar Producto
          </button>
        </Form>
      </Modal>
      <Modal open={openModifyModal} setClosed={() => setOpenModifyModal(false)}>
        <Form
          title={"Modificar Orden de Produccion"}
          multiple={true}
          edit={true}
          onEdit={() => handleModifyButton()}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModifyModal(!openModifyModal)}
        >
          <LabeledInput {...ordenPedido} text="Orden de Pedido" />
          <LabeledInput
            {...encargadoProduccion}
            text="Encargado de Produccion"
          />
        </Form>
      </Modal>
      <Modal open={detailsModal} setClosed={() => setDetailsModal(false)}>
        <Form
          title={"Seleccionar Productos"}
          multiple={true}
          edit={false}
          onAdd={() => handleAcceptIngredientButton()}
          onAddMultiple={() => handleAcceptIngredientButton(true)}
          onCancel={() => setDetailsModal(!detailsModal)}
        >
          <div onChange={() => importe.setValue(toGetValue(1) * toGetValue(3))}>
            <LabeledDataList
              {...producto}
              options={initialState.producto.filter(prod => !prod.proveedores)}
              which={["descripcion"]}
              text="Producto"
            />
            <LabeledInput {...cantidadProducto} text="Cantidad" />
            <LabeledDataList
              {...unidadMedida}
              options={initialState.unidadMedida}
              which={["descripcion"]}
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

export default Produccion;
