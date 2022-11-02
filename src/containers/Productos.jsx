import React, { useState } from "react";
import Form from "../components/Form";
import LabeledInput from "../components/LabeledInput";
import Message from "../components/Message";
import Modal from "../components/Modal";
import Table from "../components/Table";
import useInputValue from "../hooks/useInputValue";
import initialState from "../initialState/initialState";
import LabeledDataList from "../components/LabeledDataList";
import LabeledSelector from "../components/LabeledSelector";
import manageLocalStorage from "../usefullFunctions/manageLocalStorage";
import { useEffect } from "react";

const Productos = () => {
  const [openModal, setOpenModal] = useState(false);
  const [brandModal, setBrandModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [message, setMessage] = useState("");
  const product = useInputValue("");
  const rubro = useInputValue("");
  const marca = useInputValue("");
  const proveedor = useInputValue("");
  const receta = useInputValue("");
  const tipoIVA = useInputValue("");
  const stock = useInputValue("");
  const precioVenta = useInputValue("");
  const precioCosto = useInputValue("");
  const aumentoSobre = useInputValue("");
  const montoAumento = useInputValue("");
  const aumentoPor = useInputValue("");
  const entity = "producto";
  const [productos, setProductos] = useState(manageLocalStorage("get", entity));

  useEffect(() => {}, [productos]);

  let proveedores = [];
  console.log(proveedores);
  const handleAcceptButton = () => {
    setOpenModal(!openModal);
    setMessage("Producto agregado correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  const handleAcceptRaiseButton = () => {
    setBrandModal(!brandModal);
    setMessage("Aumento de precios generado correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  const handleModifyButton = () => {
    setOpenModifyModal(!openModifyModal);
    setMessage("Datos de producto modificados correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  return (
    <div className="Productos">
      <h1 className="Productos-title">Listado de Productos</h1>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="Button-add"
        type="button"
      >
        Agregar Producto
      </button>
      <button
        onClick={() => setBrandModal(!brandModal)}
        style={{
          width: "max-content",
          background: "whitesmoke",
          color: "black",
        }}
        className="Button-add"
        type="button"
      >
        Aumentar precios
      </button>
      <Table
        onDelete={(id) =>
          setProductos(manageLocalStorage("delete", entity, "", id))
        }
        onEdit={() => setOpenModifyModal(!openModifyModal)}
        body={productos}
        exceptions={["precioCosto", "tipoIva", "stockMinimo"]}
        edit={false}
        del={false}
      />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={"Agregar Producto"}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}
        >
          <LabeledInput
            value={initialState.producto.length + 1}
            disabled={true}
            toShowId={true}
            text="Nro. Producto"
          />
          <LabeledInput {...product} text="Nombre del producto" />
          <LabeledDataList
            {...rubro}
            options={initialState.rubro}
            which={["descripcion"]}
            text="Rubro"
          />
          <LabeledDataList
            {...marca}
            nullable={true}
            options={initialState.marca}
            which={["nombre"]}
            text="Marca"
          />
          <LabeledSelector
            {...proveedor}
            multiple={true}
            options={initialState.producto[2].proveedores}
            which={["razonSocial"]}
            text="Proveedor"
          />
          <LabeledDataList
            {...receta}
            nullable={true}
            options={initialState.receta}
            which={["descripcion"]}
            text="Receta"
          />
          <LabeledDataList
            {...tipoIVA}
            options={initialState.marca}
            which={["nombre"]}
            text="Tipo de IVA"
          />
          <LabeledInput {...stock} text="Stock" />
          <LabeledInput {...precioVenta} text="Precio de Venta" />
          <LabeledInput {...precioCosto} text="Precio al Costo" />
        </Form>
      </Modal>
      <Modal open={openModifyModal} setClosed={() => setOpenModifyModal(false)}>
        <Form
          title={"Modificar Datos del Producto"}
          multiple={true}
          edit={true}
          onEdit={() => handleModifyButton()}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModifyModal(!openModifyModal)}
        >
          <LabeledInput
            value={initialState.producto.length + 1}
            disabled={true}
            toShowId={true}
            text="Nro. Producto"
          />
          <LabeledInput {...product} text="Nombre del producto" />
          <LabeledDataList
            {...rubro}
            options={initialState.rubro}
            which={["descripcion"]}
            text="Rubro"
          />
          <LabeledDataList
            {...marca}
            options={initialState.marca}
            which={["nombre"]}
            text="Marca"
          />
          <LabeledSelector
            {...proveedor}
            multiple={true}
            options={initialState.producto[2].proveedores}
            which={["razonSocial"]}
            text="Proveedor"
          />
          <LabeledDataList
            {...receta}
            options={initialState.receta}
            which={["descripcion"]}
            text="Receta"
          />
          <LabeledDataList
            {...tipoIVA}
            options={initialState.marca}
            which={["nombre"]}
            text="Tipo de IVA"
          />
          <LabeledInput {...stock} text="Stock" />
          <LabeledInput {...precioVenta} text="Precio de Venta" />
          <LabeledInput {...precioCosto} text="Precio al Costo" />
        </Form>
      </Modal>
      <Modal open={brandModal} setClosed={() => setBrandModal(false)}>
        <Form
          title={"Generar aumento"}
          onAdd={() => handleAcceptRaiseButton()}
          onCancel={() => setBrandModal(!brandModal)}
          generate={true}
        >
          <LabeledDataList
            options={[
              { aumentoPor: "Marca" },
              { aumentoPor: "Rubro" },
              { aumentoPor: "Producto" },
            ]}
            which={["aumentoPor"]}
            {...aumentoPor}
            text="Aumento Por"
          />
          <LabeledSelector
            options={
              aumentoPor.value
                ? initialState[`${aumentoPor.value.toLowerCase()}`]
                : []
            }
            which={[aumentoPor.value === "Marcas" ? "nombre" : "descripcion"]}
            {...aumentoSobre}
            text={aumentoPor.value}
          />
          <LabeledInput {...montoAumento} text="Procentaje de aumento" />
          <LabeledInput
            type="datetime-local"
            value={new Date(Date.now()).toISOString().slice(0, 16)}
            text="Fecha actual"
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

export default Productos;
