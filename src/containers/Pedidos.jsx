import React, { useState, useRef } from "react";
import LabeledInput from "../components/LabeledInput";
import LabeledDataList from "../components/LabeledDataList";
import Switch from "../components/Switch";
import Form from "../components/Form";
import Message from "../components/Message";
import Modal from "../components/Modal";
import Table from "../components/Table";
import useInputValue from "../hooks/useInputValue";
import Labeler from "../components/Labeler";
import modulo_ventas from "../initialState/modulo_ventas";
import modulo_productos from "../initialState/modulo_productos";

function Pedidos() {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [message, setMessage] = useState("");
  const [detailsModal, setDetailsModal] = useState(false);
  const cliente = useInputValue("");
  const personal = useInputValue("");
  const fechaHoraPedido = useInputValue("");
  const fechaHoraEnvio = useInputValue("");
  const presupuesto = useInputValue("");
  const estado = useInputValue("");
  const [entregaDomicilio, setEntregaDomcilio] = useState(false);
  const costoEnvio = useInputValue("");
  const razonSocialEntrega = useInputValue("");
  const telefonoEntrega = useInputValue("");
  const delivery = useInputValue("");
  const calle = useInputValue("");
  const altura = useInputValue("");
  const depto = useInputValue("");
  const tipoVenta = useInputValue("");
  const observaciones = useInputValue("");
  const montoTotal = useInputValue("");
  const producto = useInputValue("");
  const cantidadProducto = useInputValue("");
  const unidadMedida = useInputValue("");
  const precioUnitario = useInputValue("");
  const [importe, setImporte] = useState("");
  const detailRef = useRef();
  let detallePedido = JSON.parse(localStorage.getItem("detallePedido"))
    ? JSON.parse(localStorage.getItem("detallePedido"))
    : [];

  const handleAcceptButton = () => {
    setOpenModal(!openModal);
    setMessage("Pedido agregado correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  const handleAcceptIngredientButton = () => {
    setDetailsModal(!detailsModal);
    setMessage("Producto agregado correctamente");
    setSuccessMessage(!succesMessage);
    detallePedido.push({
      producto: detailRef.current.children[0].children[1].children[0].value,
      cantidad: detailRef.current.children[1].children[1].children[0].value,
      unidadMedida: detailRef.current.children[2].children[1].children[0].value,
      precioUnitario:
        detailRef.current.children[3].children[1].children[0].value,
      importe:
        detailRef.current.children[1].children[1].children[0].value *
        detailRef.current.children[3].children[1].children[0].value,
    });
    localStorage.setItem("detallePedido", JSON.stringify(detallePedido));
    detallePedido = JSON.parse(localStorage.getItem("detallePedido"));
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  const handleModifyButton = () => {
    setOpenModifyModal(!openModifyModal);
    setMessage("Pedido modificado correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  return (
    <div className="Productos">
      <h1 className="Productos-title">Listado de Pedidos de Cliente</h1>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="Button-add"
        type="button"
      >
        Agregar Pedido
      </button>
      <Table
        onEdit={() => setOpenModifyModal(!openModifyModal)}
        body={modulo_ventas.pedidos}
        exceptions={[]}
        edit={false}
        del={false}
      />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={"Agregar Pedido"}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}
        >
          <LabeledInput
            value={modulo_ventas.pedidos.length + 1}
            text="Nro. Pedido"
            toShowId={true}
          />

          <LabeledDataList
            {...cliente}
            options={modulo_ventas.pedidos}
            which={["cliente", "calle", "altura", "depto", "telefonoEntrega"]}
            text="Cliente"
          />
          <LabeledDataList
            {...personal}
            options={modulo_ventas.pedidos}
            which={["encargado"]}
            text="Encargado"
          />
          <LabeledInput
            {...fechaHoraPedido}
            type="datetime-local"
            text="Fecha y hora del pedido"
          />
          <LabeledInput
            {...fechaHoraEnvio}
            type="datetime-local"
            text="Fecha y hora de Entrega"
          />
          <LabeledDataList
            {...presupuesto}
            nullable={true}
            options={modulo_ventas.pedidos}
            which={["id"]}
            text="Presupuesto"
          />
          <LabeledDataList
            {...tipoVenta}
            options={[{ tipoVenta: "Minorista" }, { tipoVenta: "Mayorista" }]}
            which={["tipoVenta"]}
            text="Tipo de Venta"
          />
          <LabeledDataList
            {...estado}
            options={[
              { estado: "En proceso" },
              { estado: "En entrega" },
              { estado: "Lista para entregar" },
            ]}
            which={["estado"]}
            text="Estado"
          />
          <Labeler text="Envio">
            <Switch
              active={entregaDomicilio}
              onChangeSwitch={() => setEntregaDomcilio(!entregaDomicilio)}
            />
          </Labeler>
          <LabeledInput
            hidden={!entregaDomicilio}
            {...razonSocialEntrega}
            text="Razon Social de Entrega"
          />
          <LabeledDataList
            hidden={!entregaDomicilio}
            {...calle}
            options={modulo_ventas.pedidos}
            which={["calle"]}
            text="Calle"
          />
          <LabeledInput hidden={!entregaDomicilio} {...altura} text="Altura" />
          <LabeledInput
            hidden={!entregaDomicilio}
            {...depto}
            text="Departamento"
          />
          <LabeledInput
            hidden={!entregaDomicilio}
            {...telefonoEntrega}
            text="Telefono de Entrega"
          />
          <LabeledDataList
            hidden={!entregaDomicilio}
            {...delivery}
            options={modulo_ventas.pedidos}
            which={["delivery"]}
            text="Delivery"
          />
          <LabeledInput
            hidden={!entregaDomicilio}
            {...costoEnvio}
            text="Costo de Envio"
          />
          <LabeledInput
            hidden={!entregaDomicilio}
            {...observaciones}
            text="Observaciones"
          />
          <LabeledInput {...montoTotal} text="Monto total" />
          <Table
            onEdit={() => setDetailsModal(!detailsModal)}
            body={detallePedido}
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
          title={"Modificar Pedido"}
          multiple={true}
          edit={true}
          onEdit={() => handleModifyButton()}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModifyModal(!openModifyModal)}
        >
          <LabeledInput
            value={modulo_ventas.pedidos.length + 1}
            text="Nro. Pedido"
            toShowId={true}
          />
          <LabeledDataList
            {...cliente}
            options={modulo_ventas.pedidos}
            which={["cliente"]}
            text="Cliente"
          />
          <LabeledDataList
            {...personal}
            options={modulo_ventas.pedidos}
            which={["encargado"]}
            text="Encargado"
          />
          <LabeledInput
            {...fechaHoraPedido}
            type="datetime-local"
            text="Fecha y hora del pedido"
          />
          <LabeledInput
            {...fechaHoraEnvio}
            type="datetime-local"
            text="Fecha y hora de Entrega"
          />
          <LabeledDataList
            {...presupuesto}
            options={modulo_ventas.pedidos}
            which={["id"]}
            text="Presupuesto"
          />
          <LabeledDataList
            {...tipoVenta}
            options={[{ tipoVenta: "Minorista" }, { tipoVenta: "Mayorista" }]}
            which={["tipoVenta"]}
            text="Tipo de Venta"
          />
          <LabeledDataList
            {...estado}
            options={[
              { estado: "En proceso" },
              { estado: "En entrega" },
              { estado: "Lista para entregar" },
            ]}
            which={["estado"]}
            text="Estado"
          />
          <Labeler text="Envio">
            <Switch
              active={entregaDomicilio}
              onChangeSwitch={() => setEntregaDomcilio(!entregaDomicilio)}
            />
          </Labeler>
          <LabeledInput
            hidden={!entregaDomicilio}
            {...razonSocialEntrega}
            text="Razon Social de Entrega"
          />
          <LabeledDataList
            hidden={!entregaDomicilio}
            {...calle}
            options={modulo_ventas.pedidos}
            which={["calle"]}
            text="Calle"
          />
          <LabeledInput hidden={!entregaDomicilio} {...altura} text="Altura" />
          <LabeledInput
            hidden={!entregaDomicilio}
            {...depto}
            text="Departamento"
          />
          <LabeledInput
            hidden={!entregaDomicilio}
            {...telefonoEntrega}
            text="Telefono de Entrega"
          />
          <LabeledDataList
            hidden={!entregaDomicilio}
            {...delivery}
            options={modulo_ventas.pedidos}
            which={["delivery"]}
            text="Delivery"
          />
          <LabeledInput
            hidden={!entregaDomicilio}
            {...costoEnvio}
            text="Costo de Envio"
          />
          <LabeledInput
            hidden={!entregaDomicilio}
            {...observaciones}
            text="Observaciones"
          />
          <LabeledInput {...montoTotal} text="Monto total" />
          <Table
            onEdit={() => setDetailsModal(!detailsModal)}
            body={detallePedido}
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
}

export default Pedidos;
