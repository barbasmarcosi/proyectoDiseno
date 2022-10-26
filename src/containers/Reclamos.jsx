import React from 'react'
import { useState } from 'react';
import Form from '../components/Form';
import LabeledInput from '../components/LabeledInput';
import Message from '../components/Message';
import Modal from '../components/Modal';
import Table from '../components/Table';
import useInputValue from '../hooks/useInputValue';
import modulo_ventas from '../initialState/modulo_ventas';
import LabeledDataList from '../components/LabeledDataList';

const Reclamos = () => {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [message, setMessage] = useState('');
  const pedidoCliente = useInputValue('');
  const fechaReclamo = useInputValue('');
  const descripcion = useInputValue('');


  const handleAcceptButton = () => {
    setOpenModal(!openModal);
    setMessage('Reclamo generado correctamente')
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true)
    }, 5000);
  }
  const handleModifyButton = () => {
    setOpenModifyModal(!openModifyModal)
    setMessage('Reclamo modificado correctamente')
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true)
    }, 5000);
  }
  return (
    <div className='Productos'>
      <h1 className='Productos-title'>Listado de Reclamos</h1>
      <button onClick={() => setOpenModal(!openModal)} className='Button-add' type='button'>Generar Reclamo</button>
      <Table onEdit={() => setOpenModifyModal(!openModifyModal)} body={modulo_ventas.reclamos} edit={false} del={false} />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={'Generar Reclamo'}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}>
          <LabeledInput value={modulo_ventas.reclamos.length + 1} toShowId={true} text="Nro. Reclamo" />
          <LabeledDataList {...pedidoCliente} options={modulo_ventas.pedidos} which={'id'} text="Pedido de Cliente" />
          <LabeledInput {...fechaReclamo} type="datetime-local" text="Fecha de Reclamo" />
          <LabeledInput {...descripcion} text="Descripcion" />
        </Form>
      </Modal>
      <Modal open={openModifyModal} setClosed={() => setOpenModifyModal(false)}>
        <Form
          title={'Modificar Reclamo'}
          multiple={true}
          edit={true}
          onEdit={() => handleModifyButton()}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModifyModal(!openModifyModal)}>
          <LabeledInput value={modulo_ventas.reclamos.length + 1} toShowId={true} text="Nro. Reclamo" />
          <LabeledDataList {...pedidoCliente} options={modulo_ventas.pedidos} which={'id'} text="Pedido de Cliente" />
          <LabeledInput {...fechaReclamo} type="datetime-local" text="Fecha de Reclamo" />
          <LabeledInput {...descripcion} text="Descripcion" />
        </Form>
      </Modal>
      <Message type="success" hide={succesMessage} onCLickClose={() => setSuccessMessage(!succesMessage)} >{message}</Message>
    </div>
  )
}

export default Reclamos