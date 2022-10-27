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

const RemitosCompra = () => {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [message, setMessage] = useState("");
  const nroFactura = useInputValue("");
  const tipoFactura = useInputValue("");
  const fechaRemito = useInputValue("");
  const montoTotal = useInputValue("");
  const condicionVenta = useInputValue("");
  const observaciones = useInputValue("");
  const productos = useInputValue("");

  const handleAcceptButton = () => {
    setOpenModal(!openModal);
    setMessage("Remito de proveedor agregado correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  const handleModifyButton = () => {
    setOpenModifyModal(!openModifyModal);
    setMessage("Datos de remito de proveedor modificado correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  return (
    <div className="Productos">
      <h1 className="Productos-title">Listado de Remitos de Proveedor</h1>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="Button-add"
        type="button"
      >
        Agregar Remito de Proveedor
      </button>
      <Table
        onEdit={() => setOpenModifyModal(!openModifyModal)}
        body={modulo_compras.remitosProveedor}
        exceptions={[]}
        edit={false}
        del={false}
      />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={"Agregar Remito de Proveedor"}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}
        >
          <LabeledDataList
            {...nroFactura}
            options={modulo_compras.facturasCompra}
            which={["nroFactura"]}
            text="Nro de factura"
          />
          <LabeledDataList
            {...tipoFactura}
            options={[
              { tipoFactura: "A" },
              { tipoFactura: "C" },
              { tipoFactura: "C" },
            ]}
            which={["tipoFactura"]}
            text="Tipo de factura"
          />
          <LabeledInput
            {...fechaRemito}
            type="datetime-local"
            text="Fecha y hora de la factura"
          />
          <LabeledInput {...montoTotal} text="Monto Total" />
          <LabeledDataList
            {...condicionVenta}
            options={modulo_compras.remitosProveedor}
            which={["id"]}
            text="Condicion de venta"
          />
          <LabeledInput {...observaciones} text="Observaciones" />
        </Form>
      </Modal>
      <Modal open={openModifyModal} setClosed={() => setOpenModifyModal(false)}>
        <Form
          title={"Modificar datos de remito de proveedor"}
          multiple={true}
          edit={true}
          onEdit={() => handleModifyButton()}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModifyModal(!openModifyModal)}
        >
          <LabeledDataList
            {...nroFactura}
            options={modulo_compras.facturasCompra}
            which={["nroFactura"]}
            text="Nro de factura"
          />
          <LabeledDataList
            {...tipoFactura}
            options={[
              { tipoFactura: "A" },
              { tipoFactura: "C" },
              { tipoFactura: "C" },
            ]}
            which={["tipoFactura"]}
            text="Tipo de factura"
          />
          <LabeledInput
            {...fechaRemito}
            type="datetime-local"
            text="Fecha y hora de la factura"
          />
          <LabeledInput {...montoTotal} text="Monto Total" />
          <LabeledDataList
            {...condicionVenta}
            options={modulo_compras.remitosProveedor}
            which={["id"]}
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

export default RemitosCompra;
