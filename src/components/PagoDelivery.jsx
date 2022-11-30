import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Form from "../components/Form";
import LabeledInput from "../components/LabeledInput";
import Message from "../components/Message";
import Modal from "../components/Modal";
import Table from "../components/Table";
import useInputValue from "../hooks/useInputValue";
import manageLocalStorage from "../usefullFunctions/manageLocalStorage";
import initialState from "../initialState/initialState";
import LabeledDataList from "../components/LabeledDataList";
import LabeledSelector from "./LabeledSelector";

const PagoDelivery = () => {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [message, setMessage] = useState("");
  const fechaHoraPago = useInputValue(new Date().toISOString().slice(0, 16));
  const delivery = useInputValue("");
  const formaPago = useInputValue("");
  const montoTotal = useInputValue("");
  const entity = "pagoDelivery";
  const [pagoDelivery, setPagoDelivery] = useState(
    manageLocalStorage("get", entity)
  );
  useEffect(() => {}, [pagoDelivery]);

  const handleAcceptButton = () => {
    setOpenModal(!openModal);
    setMessage("Pago a delivery generado correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  const handleModifyButton = () => {
    setOpenModifyModal(!openModifyModal);
    setMessage("Pago a delivery modificado correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  return (
    <div className="Productos">
      <h1 className="Productos-title">Listado de pagos a deliverys</h1>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="Button-add"
        type="button"
      >
        Generar Pago a Delivery
      </button>
      <Table
        onDelete={(id) =>
          setPagoDelivery(manageLocalStorage("delete", entity, "", id))
        }
        body={pagoDelivery}
        onEdit={() => setOpenModifyModal(!openModifyModal)}
        edit={false}
        del={false}
      />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={"Generar Pago a Delivery"}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}
        >
          <LabeledInput
            type="datetime-local"
            {...fechaHoraPago}
            text="Fecha y Hora de Pago"
          />
          <LabeledDataList
            {...delivery}
            options={initialState.delivery}
            which={["nombreApellido"]}
            text="Delivery"
          />
          <LabeledDataList
            {...formaPago}
            options={initialState.formaPago}
            which={["descripcion"]}
            text="Forma de Pago"
          />
          <LabeledInput {...montoTotal} text="Monto Total" />
          <LabeledSelector
            options={initialState.pedido.filter(
              (item) => item.delivery === delivery.value
            )}
            which={["id", "fechaPedido", "horaPedido"]}
            text="Pedidos"
          />
        </Form>
      </Modal>
      <Modal open={openModifyModal} setClosed={() => setOpenModifyModal(false)}>
        <Form
          title={"Modificar Pago a Delivery"}
          multiple={true}
          edit={true}
          onEdit={() => handleModifyButton()}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModifyModal(!openModifyModal)}
        >
          <LabeledInput
            type="datetime-local"
            {...fechaHoraPago}
            text="Fecha y Hora de Pago"
          />
          <LabeledDataList
            {...delivery}
            options={initialState.delivery}
            which={["nombreApellido"]}
            text="Delivery"
          />
          <LabeledDataList
            {...formaPago}
            options={initialState.formaPago}
            which={["descripcion"]}
            text="Forma de Pago"
          />
          <LabeledInput {...montoTotal} text="Monto Total" />
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

export default PagoDelivery;
