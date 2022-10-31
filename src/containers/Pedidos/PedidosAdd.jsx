import React, { useState, useRef } from "react";
import LabeledInput from "../../components/LabeledInput";
import LabeledDataList from "../../components/LabeledDataList";
import Switch from "../../components/Switch";
import Form from "../../components/Form";
import Modal from "../../components/Modal";
import Table from "../../components/Table";
import useInputValue from "../../hooks/useInputValue";
import Labeler from "../../components/Labeler";
import modulo_ventas from "../../initialState/modulo_ventas";
import modulo_productos from "../../initialState/modulo_productos";
import formValidator from "../../usefullFunctions/formValidator";
import messageTimeOut from "../../usefullFunctions/messageTimeOut";
import toGetFormValues from "../../usefullFunctions/toGetFormValues";
import ClientesAdd from "../Clientes/ClientesAdd";

const PedidosAdd = ({
  setSuccessMessage,
  setMessage,
  setMessageType,
  openModal,
  setOpenModal,
  detailsModal,
  setDetailsModal,
  data = "",
}) => {
  console.log(data);
  const [openClientModal, setOpenClientModal] = useState(false);
  const cliente = useInputValue(data.cliente);
  const personal = useInputValue(data.encargado);
  const fechaHoraPedido = useInputValue(data.fechaPedido);
  const fechaHoraEnvio = useInputValue(data.fechaEnvio);
  const presupuesto = useInputValue(data.presupuesto);
  const estado = useInputValue(data.estado);
  const [entregaDomicilio, setEntregaDomcilio] = useState(
    data.entregaDomicilio
  );
  const costoEnvio = useInputValue(data.costoEnvio);
  const razonSocialEntrega = useInputValue(data.razonSocialEntrega);
  const telefonoEntrega = useInputValue(data.telefonoEntrega);
  const delivery = useInputValue(data.delivery);
  const calle = useInputValue(data.calle);
  const altura = useInputValue(data.altura);
  const depto = useInputValue(data.depto);
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

  const toGetValue = (index) =>
    detailRef.current.children[index].children[1].children[0].value;

  let detallePedido = localStorage.getItem("detallePedido").length
    ? JSON.parse(localStorage.getItem("detallePedido"))
    : [];

  const handleAcceptButton = () => {
    setOpenModal(!openModal);
    setMessageType("success");
    setMessage("Pedido agregado correctamente");
    setSuccessMessage(false);
    //messageTimeOut(setSuccessMessage);
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
  return (
    <>
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={"Agregar Pedido"}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(openModal)}
          onCancel={() => setOpenModal(false)}
        >
          <LabeledInput
            value={modulo_ventas.pedidos.length + 1}
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
            options={modulo_ventas.pedidos}
            which={["cliente", "calle", "altura", "depto", "telefonoEntrega"]}
            text="Cliente"
          />
          <button
            type="button"
            onClick={() => setOpenClientModal(true)}
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
          <LabeledDataList
            {...calleCliente}
            options={modulo_ventas.pedidos}
            which={["calle"]}
            text="Calle"
          />
          <LabeledInput {...alturaCliente} text="Altura" />
          <LabeledInput {...deptoCliente} text="Departamento" />
          <LabeledInput {...telefonoCliente} text="Telefono de Entrega" />
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
      <Modal open={detailsModal} setClosed={() => setDetailsModal(false)}>
        <Form
          title={"Seleccionar Productos"}
          multiple={true}
          edit={false}
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
            <LabeledInput value={importe.value} text="Importe" />
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default PedidosAdd;
