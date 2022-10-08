import React, { useState } from 'react'
import LabeledInput from '../components/LabeledInput';
import LabeledDataList from '../components/LabeledDataList';
import Switch from '../components/Switch';
import Form from '../components/Form';
import Message from '../components/Message';
import Modal from '../components/Modal';
import Table from '../components/Table';
import useInputValue from '../hooks/useInputValue';
import Labeler from '../components/Labeler';

function Pedidos() {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const cliente = useInputValue('');
  const delivery = useInputValue('');
  const personal = useInputValue('');
  const presupuesto = useInputValue('');
  const calle = useInputValue('');
  const altura = useInputValue('');
  const depto = useInputValue('');
  const fechaHora = useInputValue('');
  const [entregaDomicilio, setEntregaDomcilio] = useState(false);
  const costoEnvio = useInputValue('');
  const tipoVenta = useInputValue('');
  const observaciones = useInputValue('');
  const razonSocialEntrega = useInputValue('');
  const telefonoEntrega = useInputValue('');


  const handleAcceptButton = () => {
    setOpenModal(!openModal);
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true)
    }, 5000);
  }
  const body = [{
    Calle: 'Villegas',
    Localidad: 'Trenque Lauquen',
  },
  {
    Calle: 'Wilde',
    Localidad: 'Trenque Lauquen',
  }]
  return (
    <div className='Productos'>
      <h1 className='Productos-title'>Listado de Pedidos de Cliente</h1>
      <button onClick={() => setOpenModal(!openModal)} className='Button-add' type='button'>Agregar Pedido</button>
      <Table body={body} edit={false} del={false} />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={'Agregar Pedido'}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}>
          <LabeledInput {...cliente} text="Cliente" />
          <LabeledInput {...personal} text="Personal" />
          {/*<LabeledInput {...presupuesto} text="Presupuesto" />*/}
          <LabeledInput {...fechaHora} type='datetime-local' text="Fecha y hora" />
          <Labeler text="Envio">
            <Switch active={entregaDomicilio} onChangeSwitch={() => setEntregaDomcilio(!entregaDomicilio)} />
          </Labeler>
          <LabeledInput hidden={!entregaDomicilio} {...delivery} text="Delivery" />
          <LabeledInput hidden={!entregaDomicilio} {...costoEnvio} text="Costo de Envio" />
          <LabeledInput hidden={!entregaDomicilio} {...calle} text="Calle" />
          <LabeledInput hidden={!entregaDomicilio} {...altura} text="Altura" />
          <LabeledInput hidden={!entregaDomicilio} {...depto} text="Departamento" />
          {/*<tipoVenta hidden={!entregaDomicilio} {...tipoVenta} text="Tipo de Venta" />*/}
          <LabeledInput hidden={!entregaDomicilio} {...observaciones} text="Observaciones" />
          <LabeledInput hidden={!entregaDomicilio} {...razonSocialEntrega} text="Razon Social de Entrega" />
          <LabeledInput hidden={!entregaDomicilio} {...telefonoEntrega} text="Telefono de Entrega" />
        </Form>
      </Modal>
      <Message type="success" hide={succesMessage} onCLickClose={() => setSuccessMessage(!succesMessage)} >Pedido agregado correctamente</Message>
    </div>
  )
}

export default Pedidos