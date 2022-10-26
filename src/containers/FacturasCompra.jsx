import React from "react";
import { useState } from "react";
import Form from "../components/Form";
import LabeledInput from "../components/LabeledInput";
import Message from "../components/Message";
import Modal from "../components/Modal";
import Table from "../components/Table";
import useInputValue from "../hooks/useInputValue";
import modulo_compras from "../initialState/modulo_compras";
import LabeledDataList from "../components/LabeledDataList";

const FacturasCompra = () => {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [message, setMessage] = useState("");
  const ordenCompra = useInputValue("");
  const remito = useInputValue("");
  const nroFactura = useInputValue("");
  const tipoFactura = useInputValue("");
  const fecha = useInputValue("");
  const montoTotal = useInputValue("");
  const condicionVenta = useInputValue("");
  const observaciones = useInputValue("");
  const productos = useInputValue("");

  const handleAcceptButton = () => {
    setOpenModal(!openModal);
    setMessage("Factura de compra agregada correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  const handleModifyButton = () => {
    setOpenModifyModal(!openModifyModal);
    setMessage("Factura de compra modificada correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  return (
    <div className="Productos">
      <h1 className="Productos-title">Listado de Factura de Compra</h1>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="Button-add"
        type="button"
      >
        Agregar Factura de Compra
      </button>
      <Table
        body={modulo_compras.facturasCompra}
        exceptions={["productos"]}
        onEdit={() => setOpenModifyModal(!openModifyModal)}
        edit={false}
        del={false}
      />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={"Agregar Factura de Compra"}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}
        >
          <LabeledDataList
            {...ordenCompra}
            options={modulo_compras.ordenesCompra}
            which={"id"}
            text="Orden de compra"
          />
          <LabeledDataList
            {...remito}
            options={modulo_compras.remitosProveedor}
            which={"id"}
            text="Remito de proveedor"
          />
          <LabeledInput {...nroFactura} text="Numero de Factura" />
          <LabeledDataList
            {...tipoFactura}
            options={[
              { tipoFactura: "A" },
              { tipoFactura: "B" },
              { tipoFactura: "C" },
            ]}
            which={"tipoFactura"}
            text="Tipo de factura"
          />
          <LabeledInput {...fecha} type="datetime-local" text="Fecha y hora de la factura" />
          <LabeledInput {...montoTotal} text="Monto Total" />
          <LabeledDataList
            {...condicionVenta}
            options={modulo_compras.remitosProveedor}
            which={"id"}
            text="Condicion de venta"
          />
          <LabeledInput {...observaciones} text="Observaciones" />
        </Form>
      </Modal>
      <Modal open={openModifyModal} setClosed={() => setOpenModifyModal(false)}>
        <Form
          title={"Modificar Factura de Compra"}
          multiple={true}
          edit={true}
          onAdd={() => handleAcceptButton()}
          onEdit={() => handleModifyButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModifyModal(!openModifyModal)}
        >
          <LabeledDataList
            {...ordenCompra}
            options={modulo_compras.ordenesCompra}
            which={"id"}
            text="Orden de compra"
          />
          <LabeledDataList
            {...remito}
            options={modulo_compras.remitosProveedor}
            which={"id"}
            text="Remito de proveedor"
          />
          <LabeledInput {...nroFactura} text="Numero de Factura" />
          <LabeledDataList
            {...tipoFactura}
            options={[
              { tipoFactura: "A" },
              { tipoFactura: "B" },
              { tipoFactura: "C" },
            ]}
            which={"tipoFactura"}
            text="Tipo de factura"
          />
          <LabeledInput {...fecha} type="datetime-local" text="Fecha y hora de la factura" />
          <LabeledInput {...montoTotal} text="Monto Total" />
          <LabeledDataList
            {...condicionVenta}
            options={modulo_compras.remitosProveedor}
            which={"id"}
            text="Condicion de venta"
          />
          <LabeledInput {...observaciones} text="Observaciones" />
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

export default FacturasCompra;
