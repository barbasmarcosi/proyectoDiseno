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

const Estadistica = () => {
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
    console.log(val);
    if (val) {
      const data = val.split(", ");
      console.log(data);
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
      <h1 className="Productos-title">Estadisticas de venta</h1>
      <Table
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
      <Message
        type={messageType}
        hide={succesMessage}
        onCLickClose={() => setSuccessMessage(!succesMessage)}
      >
        {message}
      </Message>
    </div>
  );
};

export default Estadistica;
