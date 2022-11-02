import React from "react";
import { useState } from "react";
import Form from "../components/Form";
import LabeledInput from "../components/LabeledInput";
import Message from "../components/Message";
import Modal from "../components/Modal";
import Table from "../components/Table";
import useInputValue from "../hooks/useInputValue";
import initialState from "../initialState/initialState";
import LabeledDataList from "../components/LabeledDataList";
import manageLocalStorage from "../usefullFunctions/manageLocalStorage";
import { useEffect } from "react";
import messageTimeOut from "../usefullFunctions/messageTimeOut";

const FacturasCompra = () => {
  const [openModal, setOpenModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState(true);
  const [messageType, setMessageType] = useState("success");
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [message, setMessage] = useState("");
  const ordenCompra = useInputValue("");
  const remito = useInputValue("");
  const nroFactura = useInputValue("");
  const tipoFactura = useInputValue("");
  const fecha = useInputValue("");
  const proveedor = useInputValue("");
  const montoTotal = useInputValue("");
  const condicionVenta = useInputValue("");
  const observaciones = useInputValue("");
  const entity = "facturaCompra";
  const [facturasCompra, setFacturasCompra] = useState(
    manageLocalStorage("get", entity)
  );

  useEffect(() => {}, [facturasCompra]);

  const handleAcceptButton = (multiple = false) => {
    if (
      tipoFactura.value &&
      nroFactura.value &&
      fecha.value &&
      ordenCompra.value &&
      remito.value &&
      proveedor.value &&
      condicionVenta.value &&
      montoTotal.value
    ) {
      setFacturasCompra(
        manageLocalStorage("post", entity, {
          tipoFactura: tipoFactura.value,
          nroFactura: nroFactura.value,
          fecha: new Date(fecha.value).toLocaleString(),
          ordenCompra: Number(ordenCompra.value),
          remitoProveedor: Number(remito.value),
          proveedor: proveedor.value,
          condicionVenta: condicionVenta.value,
          montoTotal: montoTotal.value,
          observaciones: observaciones.value,
          productos: [
            {
              materiaPrima: null,
              producto: "Vino Benjamin",
              cantidad: 10,
              unidadMedida: "unidades",
              costoUnitario: 718,
              importe: 7180,
            },
          ],
        })
      );
      tipoFactura.setValue("");
      nroFactura.setValue("");
      fecha.setValue("");
      ordenCompra.setValue("");
      remito.setValue("");
      proveedor.setValue("");
      condicionVenta.setValue("");
      montoTotal.setValue("");
      observaciones.setValue("");
      if (!multiple) setOpenModal(!openModal);
      setMessageType("success");
      setMessage("Factura agregada correctamente");
    } else {
      setMessageType("warning");
      setMessage("Complete los datos del formulario");
    }
    setSuccessMessage(!successMessage);
    messageTimeOut(setSuccessMessage);
  };

  const handleModifyButton = () => {
    setOpenModifyModal(!openModifyModal);
    setMessageType("success");
    setMessage("Factura de compra modificada correctamente");
    setSuccessMessage(!successMessage);
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
        body={facturasCompra}
        onDelete={(id) =>
          setFacturasCompra(manageLocalStorage("delete", entity, "", id))
        }
        onEdit={() => setOpenModifyModal(!openModifyModal)}
        del={false}
        searchingFor={["ordenCompra", "remitoProveedor"]}
      />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={"Agregar Factura de Compra"}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => handleAcceptButton(true)}
          onCancel={() => setOpenModal(!openModal)}
        >
          <LabeledDataList
            {...ordenCompra}
            options={initialState.ordenCompra}
            which={["id"]}
            text="Orden de compra"
          />
          <LabeledDataList
            {...remito}
            options={initialState.remitoProveedor}
            which={["id"]}
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
            which={["tipoFactura"]}
            text="Tipo de factura"
          />
          <LabeledInput
            {...fecha}
            type="datetime-local"
            text="Fecha y hora de la factura"
          />
          <LabeledInput {...montoTotal} text="Monto Total" />
          <LabeledDataList
            {...condicionVenta}
            options={initialState.remitoProveedor}
            which={["id"]}
            text="Condicion de venta"
          />
          <LabeledDataList
            {...proveedor}
            text="Proveedor"
            options={initialState.remitoProveedor}
            which={["proveedor"]}
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
            options={initialState.ordenCompra}
            which={["id"]}
            text="Orden de compra"
          />
          <LabeledDataList
            {...remito}
            options={initialState.remitoProveedor}
            which={["id"]}
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
            which={["tipoFactura"]}
            text="Tipo de factura"
          />
          <LabeledInput
            {...fecha}
            type="datetime-local"
            text="Fecha y hora de la factura"
          />
          <LabeledInput {...montoTotal} text="Monto Total" />
          <LabeledDataList
            {...condicionVenta}
            options={initialState.remitoProveedor}
            which={["id"]}
            text="Condicion de venta"
          />
          <LabeledDataList
            {...proveedor}
            text="Proveedor"
            options={initialState.remitoProveedor}
            which={["proveedor"]}
          />
          <LabeledInput {...observaciones} text="Observaciones" />
        </Form>
      </Modal>
      <Message
        type={messageType}
        hide={successMessage}
        onCLickClose={() => setSuccessMessage(!successMessage)}
      >
        {message}
      </Message>
    </div>
  );
};

export default FacturasCompra;
