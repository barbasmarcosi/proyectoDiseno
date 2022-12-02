import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Form from "../components/Form";
import LabeledInput from "../components/LabeledInput";
import LabeledDataList from "../components/LabeledDataList";
import LabeledSelector from "../components/LabeledSelector";
import Message from "../components/Message";
import Modal from "../components/Modal";
import Table from "../components/Table";
import useInputValue from "../hooks/useInputValue";
import manageLocalStorage from "../usefullFunctions/manageLocalStorage";
import initialState from "../initialState/initialState";

const CierresCaja = () => {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [message, setMessage] = useState("");
  const fechaCierreCaja = useInputValue(
    new Date(Date.now()).toISOString().slice(0, 16)
  );
  const saldoInicial = useInputValue("");
  const saldoFinal = useInputValue("");
  const encargado = useInputValue("");
  const retiros = useInputValue("");
  const gastosExtras = useInputValue("");
  const ingresosExtra = useInputValue("");
  const entity = "cierreCaja";
  const [cierresCaja, setCierresCaja] = useState(
    manageLocalStorage("get", entity)
  );

  useEffect(() => {}, [cierresCaja]);

  const handleAcceptButton = () => {
    setOpenModal(!openModal);
    setMessage("Cierre de caja generado correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  const handleModifyButton = () => {
    setOpenModifyModal(!openModifyModal);
    setMessage("Cierre de caja modificado correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  return (
    <div className="Productos">
      <h1 className="Productos-title">Listado de Cierres de Caja</h1>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="Button-add"
        type="button"
      >
        Generar Cierre de Caja
      </button>
      <Table
        onDelete={(id) =>
          setCierresCaja(manageLocalStorage("delete", entity, "", id))
        }
        body={cierresCaja}
        onEdit={() => setOpenModifyModal(!openModifyModal)}
        edit={false}
        del={false}
      />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={"Generar Cierre de Caja"}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}
        >
          <LabeledInput
            {...fechaCierreCaja}
            type="datetime-local"
            text="Fecha de Cierre de Caja"
          />
          <LabeledDataList
            {...encargado}
            options={initialState.personal}
            which={["nombreApellido"]}
            text="Encargado"
          />
          <LabeledInput {...saldoInicial} text="Saldo Inicial" />
          <LabeledInput {...retiros} text="Retiros" />
          <LabeledInput {...gastosExtras} text="Gastos Extras" />
          <LabeledInput {...ingresosExtra} text="Ingresos Extras" />
          <LabeledSelector
            options={initialState.ordenCompra}
            which={["id", "fecha", "proveedor"]}
            text={"Ordenes de compra"}
          />
          <LabeledSelector
            options={initialState.pedido}
            which={["id", "fechaPedido", "cliente", "calle", "altura"]}
            text={"Pedidos de cliente"}
          />
          <LabeledSelector
            options={initialState.pagoDelivery}
            which={["id", "fechaPago", "delivery"]}
            text={"Pagos de delivery"}
          />
          <LabeledInput {...saldoInicial} text="Saldo Final" toShowId={'true'} />
        </Form>
      </Modal>
      <Modal open={openModifyModal} setClosed={() => setOpenModifyModal(false)}>
        <Form
          title={"Modificar Cierre de Caja"}
          multiple={true}
          edit={true}
          onEdit={() => handleModifyButton()}
          onCancel={() => setOpenModifyModal(!openModifyModal)}
        >
          <LabeledInput
            {...fechaCierreCaja}
            type="datetime-local"
            text="Fecha de Cierre de Caja"
          />
          <LabeledDataList
            {...encargado}
            options={initialState.personal}
            which={["nombreApellido"]}
            text="Encargado"
          />
          <LabeledInput {...saldoInicial} text="Saldo Inicial" />
          <LabeledInput {...retiros} text="Retiros" />
          <LabeledInput {...gastosExtras} text="Gastos Extras" />
          <LabeledInput {...ingresosExtra} text="Ingresos Extras" />
          <LabeledSelector
            options={initialState.ordenCompra}
            which={["id", "fecha", "proveedor"]}
            text={"Ordenes de compra"}
          />
          <LabeledSelector
            options={initialState.pedido}
            which={["id", "fechaPedido", "cliente", "calle", "altura"]}
            text={"Pedidos de cliente"}
          />
          <LabeledSelector
            options={initialState.pagoDelivery}
            which={["id", "fechaPago", "delivery"]}
            text={"Pagos de delivery"}
          />
          <LabeledInput {...saldoFinal} text="Saldo Final" />
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

export default CierresCaja;
