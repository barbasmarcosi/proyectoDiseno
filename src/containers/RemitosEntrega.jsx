import Form from "../components/Form";
import LabeledInput from "../components/LabeledInput";
import Message from "../components/Message";
import Modal from "../components/Modal";
import Table from "../components/Table";
import useInputValue from "../hooks/useInputValue";
import initialState from "../initialState/initialState";
import LabeledDataList from "../components/LabeledDataList";
import { useState } from "react";
import manageLocalStorage from "../usefullFunctions/manageLocalStorage";
import { useEffect } from "react";

const RemitosEntrega = () => {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [message, setMessage] = useState("");
  const pedido = useInputValue("");
  const fechaRemito = useInputValue("");
  const montoTotal = useInputValue("");
  const condicionVenta = useInputValue("");
  const observaciones = useInputValue("");
  const entity = "remitoEntrega";
  const [remitosEntrega, setRemitosEntrega] = useState(
    manageLocalStorage("get", entity)
  );

  useEffect(() => {}, [remitosEntrega]);

  const handleAcceptButton = () => {
    setOpenModal(!openModal);
    setMessage("Remito de entrega agregado correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  const handleModifyButton = () => {
    setOpenModifyModal(!openModifyModal);
    setMessage("Datos de remito de entrega modificado correctamente");
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true);
    }, 5000);
  };
  return (
    <div className="Productos">
      <h1 className="Productos-title">Listado de Remitos de Entrega</h1>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="Button-add"
        type="button"
      >
        Agregar Remito de Entrega
      </button>
      <Table
        onDelete={(id) =>
          setRemitosEntrega(manageLocalStorage("delete", entity, "", id))
        }
        onEdit={() => setOpenModifyModal(!openModifyModal)}
        body={remitosEntrega}
        exceptions={[]}
        edit={false}
        del={false}
        searchingFor={["pedido"]}
      />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={"Agregar Remito de Entrega"}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}
        >
          <LabeledInput
            value={initialState.remitoEntrega.length + 1}
            toShowId={true}
            text={"Nro. Remito"}
          />
          <LabeledDataList
            {...pedido}
            options={initialState.pedido}
            which={["id"]}
            text="Nro. Pedido"
          />
          <LabeledInput
            {...fechaRemito}
            type="datetime-local"
            text="Fecha de Remito"
          />
          <LabeledInput {...montoTotal} text="Monto Total" />
          <LabeledDataList
            {...condicionVenta}
            options={initialState.remitoEntrega}
            which={["id"]}
            text="Condicion de venta"
          />
          <LabeledInput {...observaciones} text="Observaciones" />
        </Form>
      </Modal>
      <Modal open={openModifyModal} setClosed={() => setOpenModifyModal(false)}>
        <Form
          title={"Modificar datos de remito de entrega"}
          multiple={true}
          edit={true}
          onEdit={() => handleModifyButton()}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModifyModal(!openModifyModal)}
        >
          <LabeledInput
            value={initialState.remitoEntrega.length + 1}
            toShowId={true}
            text={"Nro. Remito"}
          />
          <LabeledDataList
            {...pedido}
            options={initialState.pedido}
            which={["id"]}
            text="Nro. Pedido"
          />
          <LabeledInput
            {...fechaRemito}
            type="datetime-local"
            text="Fecha de Remito"
          />
          <LabeledInput {...montoTotal} text="Monto Total" />
          <LabeledDataList
            {...condicionVenta}
            options={initialState.remitoEntrega}
            which={["id"]}
            text="Condicion de venta"
          />
          <LabeledInput {...observaciones} text="Observaciones" />
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
