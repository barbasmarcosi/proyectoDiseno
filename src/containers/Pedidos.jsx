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
import initialState from "../initialState/initialState";
import formValidator from "../usefullFunctions/formValidator";
import messageTimeOut from "../usefullFunctions/messageTimeOut";
import toGetFormValues from "../usefullFunctions/toGetFormValues";
import ClientesAdd from "./Clientes/ClientesAdd";
import manageLocalStorage from "../usefullFunctions/manageLocalStorage";
import { useEffect } from "react";

function Pedidos() {
  const [openModal, setOpenModal] = useState(false);
  const [openClientModal, setOpenClientModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [message, setMessage] = useState("");
  const [detailsModal, setDetailsModal] = useState(false);
  const cliente = useInputValue("");
  const personal = useInputValue("");
  const fechaHoraPedido = useInputValue(
    new Date(Date.now()).toISOString().slice(0, 16)
  );
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
  const formaPago = useInputValue("");
  const calleCliente = useInputValue("");
  const alturaCliente = useInputValue("");
  const deptoCliente = useInputValue("");
  const telefonoCliente = useInputValue("");
  const tipoVenta = useInputValue("");
  const observaciones = useInputValue("");
  const montoTotal = useInputValue("");
  const producto = useInputValue("");
  const cantidadProducto = useInputValue("");
  const unidadMedida = useInputValue("");
  const precioUnitario = useInputValue("");
  const importe = useInputValue("");
  const detailRef = useRef();
  const clienteRef = useRef();
  const [messageType, setMessageType] = useState("success");
  const entity = "pedido";
  const [pedidos, setPedidos] = useState(manageLocalStorage("get", entity));

  useEffect(() => {}, [pedidos]);

  const toGetValue = (index) =>
    detailRef.current.children[index].children[1].children[0].value;

  let detallePedido = localStorage.getItem("detallePedido")
    ? JSON.parse(localStorage.getItem("detallePedido"))
    : [];

  const handleAcceptButton = () => {
    setOpenModal(!openModal);
    setMessageType("success");
    setMessage("Pedido agregado correctamente");
    setSuccessMessage(false);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  const handleAcceptIngredientButton = (multiple = false) => {
    const valid = formValidator(
      setDetailsModal,
      setMessage,
      setMessageType,
      setSuccessMessage,
      "Producto agregado correctamente",
      detailRef,
      multiple
    );
    if (valid) {
      let index = 0;
      detallePedido.push({
        producto: toGetFormValues(index++, detailRef),
        cantidad: toGetFormValues(index++, detailRef),
        unidadMedida: toGetFormValues(index++, detailRef),
        precioUnitario: toGetFormValues(index, detailRef),
        importe: toGetFormValues(1, detailRef) * toGetFormValues(3, detailRef),
      });
      localStorage.setItem("detallePedido", JSON.stringify(detallePedido));
      detallePedido = JSON.parse(localStorage.getItem("detallePedido"));
      producto.setValue("");
      cantidadProducto.setValue("");
      unidadMedida.setValue("");
      precioUnitario.setValue("");
      importe.setValue("");
    }
  };

  const setClientData = () => {
    const val = clienteRef.current.value;
    if (val) {
      const data = val.split(", ");
      data[0] !== "null" ? cliente.setValue(data[0]) : cliente.setValue("");
      data[1] !== "null"
        ? calleCliente.setValue(data[1])
        : calleCliente.setValue("");
      data[2] !== "null"
        ? alturaCliente.setValue(data[2])
        : alturaCliente.setValue("");
      data[3] !== "null"
        ? deptoCliente.setValue(data[3])
        : deptoCliente.setValue("");
      data[4] !== "null"
        ? telefonoCliente.setValue(data[4])
        : telefonoCliente.setValue("");
    } else {
      calleCliente.setValue("");
      alturaCliente.setValue("");
      deptoCliente.setValue("");
      telefonoCliente.setValue("");
    }
  };

  const handleModifyButton = () => {
    setOpenModifyModal(!openModifyModal);
    setMessage("Pedido modificado correctamente");
    setSuccessMessage(false);
    messageTimeOut(setSuccessMessage);
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
        dateFilter={true}
        whichDateField={"fechaPedido"}
        onDelete={(id) =>
          setPedidos(manageLocalStorage("delete", entity, "", id))
        }
        onEdit={() => setOpenModifyModal(!openModifyModal)}
        body={pedidos}
        searchingFor={["presupuesto"]}
        exceptions={[
          "encargado",
          "tipoVenta",
          "observaciones",
          "fechaPedido",
          "horaPedido",
          "delivery",
          "costoEnvio",
        ]}
        isDocument={true}
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
            value={initialState.pedido.length + 1}
            text="Nro. Pedido"
            toShowId={true}
          />

          <LabeledDataList
            getValue={clienteRef}
            value={cliente.value}
            setValue={cliente.setValue}
            onChange={(e) => {
              cliente.setValue(e.target.value);
              setClientData();
            }}
            options={initialState.cliente}
            which={["razonSocial", "calle", "altura", "depto", "telefonoEntrega"]}
            text="Cliente"
          />
          <button
            type="button"
            onClick={() => setOpenClientModal(!openClientModal)}
            className="Button-add"
            style={{ height: "3.5rem", marginTop: "2rem" }}
          >
            Agregar Cliente
          </button>
          <ClientesAdd
            setMessage={setMessage}
            setMessageState={setSuccessMessage}
            setOpenModal={setOpenClientModal}
            openModal={openClientModal}
          />
          <LabeledInput
            value={initialState.pedido.length + 1}
            text="Nro. Pedido"
            toShowId={true}
          />
          <LabeledDataList
            {...cliente}
            options={initialState.cliente}
            which={["razonSocial"]}
            text="Cliente"
          />
          <LabeledDataList
            {...calleCliente}
            options={initialState.calle}
            which={["nombre"]}
            text="Calle"
          />
          <LabeledInput {...alturaCliente} text="Altura" />
          <LabeledInput {...deptoCliente} text="Departamento" />
          <LabeledInput {...telefonoCliente} text="Telefono de Entrega" />
          <LabeledDataList
            {...personal}
            options={initialState.personal}
            which={["nombreApellido"]}
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
            options={initialState.presupuesto}
            which={["id", "fechaEmision", "cliente"]}
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
            options={initialState.calle}
            which={["nombre"]}
            text="Calle"
          />
          <LabeledInput hidden={!entregaDomicilio} {...altura} text="Altura" />
          <LabeledInput
            hidden={!entregaDomicilio}
            {...depto}
            text="Departamento"
          />
          <LabeledDataList
            {...formaPago}
            options={initialState.formaPago}
            which={["descripcion"]}
            text="Forma de Pago"
          />
          <LabeledInput
            hidden={!entregaDomicilio}
            {...telefonoEntrega}
            text="Telefono de Entrega"
          />
          <LabeledDataList
            hidden={!entregaDomicilio}
            {...delivery}
            options={initialState.delivery}
            which={["nombreApellido"]}
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
            value={initialState.pedido.length + 1}
            text="Nro. Pedido"
            toShowId={true}
          />
          <LabeledDataList
            {...cliente}
            options={initialState.cliente}
            which={["razonSocial"]}
            text="Cliente"
          />
          <LabeledDataList
            {...calleCliente}
            options={initialState.calle}
            which={["nombre"]}
            text="Calle"
          />
          <LabeledInput {...alturaCliente} text="Altura" />
          <LabeledInput {...deptoCliente} text="Departamento" />
          <LabeledInput {...telefonoCliente} text="Telefono de Entrega" />
          <LabeledDataList
            {...personal}
            options={initialState.personal}
            which={["nombreApellido"]}
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
            options={initialState.presupuesto}
            which={["id", "fechaEmision", "cliente"]}
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
            options={initialState.calle}
            which={["nombre"]}
            text="Calle"
          />
          <LabeledInput hidden={!entregaDomicilio} {...altura} text="Altura" />
          <LabeledInput
            hidden={!entregaDomicilio}
            {...depto}
            text="Departamento"
          />
          <LabeledDataList
            {...formaPago}
            options={initialState.formaPago}
            which={["descripcion"]}
            text="Forma de Pago"
          />
          <LabeledInput
            hidden={!entregaDomicilio}
            {...telefonoEntrega}
            text="Telefono de Entrega"
          />
          <LabeledDataList
            hidden={!entregaDomicilio}
            {...delivery}
            options={initialState.delivery}
            which={["nombreApellido"]}
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
          onAddMultiple={() => handleAcceptIngredientButton(true)}
          onCancel={() => setDetailsModal(!detailsModal)}
        >
          <div
            ref={detailRef}
            onChange={() => importe.setValue(toGetValue(1) * toGetValue(3))}
          >
            <LabeledDataList
              {...producto}
              options={initialState.producto}
              which={["descripcion"]}
              text="Producto"
            />
            <LabeledInput {...cantidadProducto} text="Cantidad" />
            <LabeledDataList
              {...unidadMedida}
              options={initialState.receta[2].materiaPrima}
              which={["unidadMedida"]}
              text="Unidad de medida"
            />
            <LabeledInput {...precioUnitario} text="Precio Unitario" />
            <LabeledInput value={importe.value} text="Importe" />
          </div>
        </Form>
      </Modal>
      <Message
        type={messageType}
        hide={succesMessage}
        onCLickClose={() => setSuccessMessage(!succesMessage)}
      >
        {message}
      </Message>
    </div>
  );
}

export default Pedidos;
