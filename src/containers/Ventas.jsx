import React from "react";
import { useState, useRef } from "react";
import Form from "../components/Form";
import LabeledInput from "../components/LabeledInput";
import Message from "../components/Message";
import Modal from "../components/Modal";
import Table from "../components/Table";
import useInputValue from "../hooks/useInputValue";
import modulo_ventas from "../initialState/modulo_ventas";
import modulo_productos from "../initialState/modulo_productos";
import LabeledDataList from "../components/LabeledDataList";

const Ventas = () => {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const [message, setMessage] = useState("");
  const pedido = useInputValue("");
  const fechaHora = useInputValue("");
  const nroFactura = useInputValue("");
  const tipoFactura = useInputValue("");
  const montoTotal = useInputValue("");
  const producto = useInputValue("");
  const cantidadProducto = useInputValue("");
  const unidadMedida = useInputValue("");
  const precioUnitario = useInputValue("");
  const [importe, setImporte] = useState("");
  const detailRef = useRef();
  let detalleComprobanteVenta = JSON.parse(
    localStorage.getItem("detalleComprobanteVenta")
  )
    ? JSON.parse(localStorage.getItem("detalleComprobanteVenta"))
    : [];
  const handleAcceptButton = () => {
    setOpenModal(!openModal);
    setMessage("Comprobante de venta agregado correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  const handleAcceptIngredientButton = () => {
    setDetailsModal(!detailsModal);
    setMessage("Producto agregado correctamente");
    setSuccessMessage(!succesMessage);
    detalleComprobanteVenta.push({
      producto: detailRef.current.children[0].children[1].children[0].value,
      cantidad: detailRef.current.children[1].children[1].children[0].value,
      unidadMedida: detailRef.current.children[2].children[1].children[0].value,
      precioUnitario:
        detailRef.current.children[3].children[1].children[0].value,
      importe:
        detailRef.current.children[1].children[1].children[0].value *
        detailRef.current.children[3].children[1].children[0].value,
    });
    localStorage.setItem(
      "detalleComprobanteVenta",
      JSON.stringify(detalleComprobanteVenta)
    );
    detalleComprobanteVenta = JSON.parse(localStorage.getItem("detalleComprobanteVenta"));
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  const handleModifyButton = () => {
    setOpenModifyModal(!openModifyModal);
    setMessage("Datos de comprobante de venta modificados correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  return (
    <div className="Productos">
      <h1 className="Productos-title">Listado de Comprobantes de venta</h1>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="Button-add"
        type="button"
      >
        Agregar Comprobante de Venta
      </button>
      <Table
        onEdit={() => setOpenModifyModal(!openModifyModal)}
        body={modulo_ventas.comprobantesVenta}
        exceptions={[]}
        edit={false}
        del={false}
      />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={"Agregar Comprobante de Venta"}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}
        >
          <LabeledInput
            value={modulo_ventas.comprobantesVenta.length + 1}
            toShowId={true}
            text="Nro. Comprobante"
          />
          <LabeledDataList
            {...pedido}
            options={modulo_ventas.pedidos}
            which={["id"]}
            text="Nro.Pedido"
          />
          <LabeledInput {...fechaHora} text="Fecha de Comprobante" />
          <LabeledDataList
            options={modulo_ventas.comprobantesVenta}
            which={["nroFactura"]}
            {...nroFactura}
            text="Nro. de Factura"
          />
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
          <LabeledInput {...montoTotal} text="Monto total" />
          <Table
            onEdit={() => setDetailsModal(!detailsModal)}
            body={detalleComprobanteVenta}
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
          title={"Modificar datos de comprobante de venta"}
          multiple={true}
          edit={true}
          onEdit={() => handleModifyButton()}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModifyModal(!openModifyModal)}
        >
          <LabeledInput
            value={modulo_ventas.comprobantesVenta.length + 1}
            toShowId={true}
            text="Nro. Comprobante"
          />
          <LabeledDataList
            {...pedido}
            options={modulo_ventas.pedidos}
            which={["id"]}
            text="Nro.Pedido"
          />
          <LabeledInput {...fechaHora} text="Fecha de Comprobante" />
          <LabeledDataList
            options={modulo_ventas.comprobantesVenta}
            which={["nroFactura"]}
            {...nroFactura}
            text="Nro. de Factura"
          />
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
          <LabeledInput {...montoTotal} text="Monto total" />
          <Table
            onEdit={() => setDetailsModal(!detailsModal)}
            body={detalleComprobanteVenta}
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
      <Modal open={detailsModal} setClosed={() => setDetailsModal(false)}>
        <Form
          title={"Seleccionar Productos"}
          multiple={true}
          edit={false}
          //onEdit={() => handleModifyIngredientButton()}
          onAdd={() => handleAcceptIngredientButton()}
          onAddMultiple={() => setDetailsModal(!!detailsModal)}
          onCancel={() => setDetailsModal(!detailsModal)}
        >
          <div
            ref={detailRef}
            onChange={() =>
              setImporte(
                () =>
                  detailRef.current.children[1].children[1].children[0].value *
                  detailRef.current.children[3].children[1].children[0].value
              )
            }
          >
            <LabeledDataList
              {...producto}
              options={modulo_productos.productos}
              which={["descripcion"]}
              text="Producto"
            />
            <LabeledInput {...cantidadProducto} text="Cantidad" />
            <LabeledDataList
              {...unidadMedida}
              options={modulo_productos.recetas[2].materiaPrima}
              which={["unidadMedida"]}
              text="Unidad de medida"
            />
            <LabeledInput {...precioUnitario} text="Precio Unitario" />
            <LabeledInput value={importe} text="Importe" />
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

export default Ventas;
