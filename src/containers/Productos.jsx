import React, { useState } from "react";
import Form from "../components/Form";
import LabeledInput from "../components/LabeledInput";
import Message from "../components/Message";
import Modal from "../components/Modal";
import Table from "../components/Table";
import useInputValue from "../hooks/useInputValue";
import modulo_productos from "../initialState/modulo_productos";
import LabeledDataList from "../components/LabeledDataList";
import LabeledSelector from "../components/LabeledSelector";

const Productos = () => {
  const [openModal, setOpenModal] = useState(false);
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
      <Table
        onEdit={() => setOpenModifyModal(!openModifyModal)}
        body={modulo_productos.productos}
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
            value={modulo_productos.productos.length + 1}
            disabled={true}
            toShowId={true}
            text="Nro. Producto"
          />
          <LabeledInput {...product} text="Nombre del producto" />
          <LabeledDataList
            {...rubro}
            options={modulo_productos.rubros}
            which={["descripcion"]}
            text="Rubro"
          />
          <LabeledDataList
            {...marca}
            nullable={true}
            options={modulo_productos.marcas}
            which={["nombre"]}
            text="Marca"
          />
          <LabeledSelector
            {...proveedor}
            multiple={true}
            options={modulo_productos.productos[2].proveedores}
            which={["razonSocial"]}
            text="Proveedor"
          />
          <LabeledDataList
            {...receta}
            nullable={true}
            options={modulo_productos.recetas}
            which={["descripcion"]}
            text="Receta"
          />
          <LabeledDataList
            {...tipoIVA}
            options={modulo_productos.marcas}
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
            value={modulo_productos.productos.length + 1}
            disabled={true}
            toShowId={true}
            text="Nro. Producto"
          />
          <LabeledInput {...product} text="Nombre del producto" />
          <LabeledDataList
            {...rubro}
            options={modulo_productos.rubros}
            which={["descripcion"]}
            text="Rubro"
          />
          <LabeledDataList
            {...marca}
            options={modulo_productos.marcas}
            which={["nombre"]}
            text="Marca"
          />
          <LabeledSelector
            {...proveedor}
            multiple={true}
            options={modulo_productos.productos[2].proveedores}
            which={["razonSocial"]}
            text="Proveedor"
          />
          <LabeledDataList
            {...receta}
            options={modulo_productos.recetas}
            which={["descripcion"]}
            text="Receta"
          />
          <LabeledDataList
            {...tipoIVA}
            options={modulo_productos.marcas}
            which={["nombre"]}
            text="Tipo de IVA"
          />
          <LabeledInput {...stock} text="Stock" />
          <LabeledInput {...precioVenta} text="Precio de Venta" />
          <LabeledInput {...precioCosto} text="Precio al Costo" />
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
