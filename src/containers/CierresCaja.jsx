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

const CierresCaja = () => {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [message, setMessage] = useState("");
  const fechaCierreCaja = useInputValue(
    new Date(Date.now()).toISOString().slice(0, 16)
  );
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
  /*const body = [
    {
      "Fecha de Cierre": "07/10/2022",
      Retiros: 2531.25,
      "Gastos Extras": 365.2,
      "Ingresos Extras": 2987.22,
      Total: 25899.75,
    },
    {
      "Fecha de Cierre": "07/10/2022",
      Retiros: 1231.25,
      "Gastos Extras": 985.22,
      "Ingresos Extras": 278.14,
      Total: 32900.25,
    },
  ];*/
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
          <LabeledInput {...retiros} text="Retiros" />
          <LabeledInput {...gastosExtras} text="Gastos Extras" />
          <LabeledInput {...ingresosExtra} text="Ingresos Extras" />
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
            type="date"
            text="Fecha de Cierre de Caja"
          />
          <LabeledInput {...retiros} text="Retiros" />
          <LabeledInput {...gastosExtras} text="Gastos Extras" />
          <LabeledInput {...ingresosExtra} text="Ingresos Extras" />
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
