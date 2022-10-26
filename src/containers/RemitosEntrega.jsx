import Form from "../components/Form";
import LabeledInput from "../components/LabeledInput";
import Message from "../components/Message";
import Modal from "../components/Modal";
import Table from "../components/Table";
import useInputValue from "../hooks/useInputValue";
import modulo_ventas from "../initialState/modulo_ventas";
import LabeledDataList from "../components/LabeledDataList";
import { useState } from "react";

const RemitosEntrega = () => {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [message, setMessage] = useState("");
  const pedido = useInputValue("");
  const fechaRemito = useInputValue("");
  const nroFactura = useInputValue("");
  const tipoFactura = useInputValue("");
  const montoTotal = useInputValue("");
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
        body={modulo_ventas.remitosEntrega}
        exceptions={["productos"]}
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
          <LabeledInput value={modulo_ventas.remitosEntrega.length + 1} toShowId={true} text={'Nro. Remito'} />
          <LabeledDataList
            {...pedido}
            options={modulo_ventas.pedidos}
            which={"id"}
            text="Nro. Pedido"
          />
          <LabeledInput {...fechaRemito} type="datetime-local" text='Fecha de Remito'/>
          <LabeledDataList
            {...nroFactura}
            options={modulo_ventas.comprobantesVenta}
            which={"nroFactura"}
            text="Nro. Factura"
          />
          <LabeledDataList
            {...tipoFactura}
            options={[
              { tipoFactura: "A" },
              { tipoFactura: "B" },
              { tipoFactura: "C" },
            ]}
            which={"tipoFactura"}
            text="Tipo de factura"
          />
          <LabeledInput {...montoTotal} text="Monto Total" />
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
          <LabeledInput value={modulo_ventas.remitosEntrega.length + 1} toShowId={true} text={'Nro. Remito'} />
          <LabeledDataList
            {...pedido}
            options={modulo_ventas.pedidos}
            which={"id"}
            text="Nro. Pedido"
          />
          <LabeledInput {...fechaRemito} type="datetime-local" text='Fecha de Remito'/>
          <LabeledDataList
            {...nroFactura}
            options={modulo_ventas.comprobantesVenta}
            which={"nroFactura"}
            text="Nro. Factura"
          />
          <LabeledDataList
            {...tipoFactura}
            options={[
              { tipoFactura: "A" },
              { tipoFactura: "B" },
              { tipoFactura: "C" },
            ]}
            which={"tipoFactura"}
            text="Tipo de factura"
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

export default RemitosEntrega;
