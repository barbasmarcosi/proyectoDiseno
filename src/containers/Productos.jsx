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
  const [productoModal, setProductModal] = useState(false);
  const [brandModal, setBrandModal] = useState(false);
  const [categoryModal, setCategoryModal] = useState(false);
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
  const rubros = useInputValue("");
  const marcas = useInputValue("");
  const productos = useInputValue("");
  const montoAumento = useInputValue("");
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
  const handleAcceptProductRaiseButton = () => {
    setProductModal(!productoModal);
    setMessage("Aumento de precio por producto generado correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  const handleAcceptCategoryRaiseButton = () => {
    setCategoryModal(!categoryModal);
    setMessage("Aumento de precio por rubro generado correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  const handleAcceptBrandRaiseButton = () => {
    setBrandModal(!brandModal);
    setMessage("Aumento de precio por marca generado correctamente");
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
        onClick={() => setCategoryModal(!categoryModal)}
        style={{
          width: "max-content",
          background: "whitesmoke",
          color: "black",
        }}
        className="Button-add"
        type="button"
      >
        Aumentar precios por rubro
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
        Aumentar precios por marca
      </button>
      <button
        onClick={() => setProductModal(!productoModal)}
        style={{
          width: "max-content",
          background: "whitesmoke",
          color: "black",
        }}
        className="Button-add"
        type="button"
      >
        Aumentar precios por producto
      </button>
      <Table
        onEdit={() => setOpenModifyModal(!openModifyModal)}
        body={modulo_productos.productos}
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
      <Modal open={brandModal} setClosed={() => setBrandModal(false)}>
        <Form
          title={"Aumentar precios por marca"}
          onAdd={() => handleAcceptBrandRaiseButton()}
          onCancel={() => setBrandModal(!brandModal)}
          generate={true}
        >
          <LabeledSelector
            options={modulo_productos.marcas}
            which={"nombre"}
            {...marcas}
            text="Marcas"
          />
          <LabeledInput {...montoAumento} text="Procentaje de aumento" />
          <LabeledInput
            type="datetime-local"
            value={new Date(Date.now()).toISOString().slice(0, 16)}
            text="Fecha actual"
          />
        </Form>
      </Modal>
      <Modal open={categoryModal} setClosed={() => setCategoryModal(false)}>
        <Form
          title={"Aumentar precios por rubro"}
          onAdd={() => handleAcceptCategoryRaiseButton()}
          onCancel={() => setCategoryModal(!categoryModal)}
          generate={true}
        >
          <LabeledSelector
            options={modulo_productos.rubros}
            which={"descripcion"}
            {...rubros}
            text="Rubros"
          />
          <LabeledInput {...montoAumento} text="Procentaje de aumento" />
          <LabeledInput
            type="datetime-local"
            value={new Date(Date.now()).toISOString().slice(0, 16)}
            text="Fecha actual"
          />
        </Form>
      </Modal>
      <Modal open={productoModal} setClosed={() => setProductModal(false)}>
        <Form
          title={"Aumentar precios por producto"}
          onAdd={() => handleAcceptProductRaiseButton()}
          onCancel={() => setProductModal(!productoModal)}
          generate={true}
        >
          <LabeledSelector
            options={modulo_productos.productos}
            which={"descripcion"}
            {...productos}
            text="Productos"
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
