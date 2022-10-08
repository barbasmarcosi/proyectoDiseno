import React from 'react'
import { useState } from 'react';
import Form from '../components/Form';
import LabeledInput from '../components/LabeledInput';
import Message from '../components/Message';
import Modal from '../components/Modal';
import Table from '../components/Table';
import useInputValue from '../hooks/useInputValue';

const Presupuestos = () => {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const cliente = useInputValue('');
  const fechaVencimiento = useInputValue('');
  const costoTotal = useInputValue('');
  const descuento = useInputValue('');
  const observaciones = useInputValue('');


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
      <h1 className='Productos-title'>Listado de Presupuestos</h1>
      <button onClick={() => setOpenModal(!openModal)} className='Button-add' type='button'>Agregar Presupuesto</button>
      <Table body={body} edit={false} del={false} />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={'Agregar Presupuesto'}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}>
          <LabeledInput {...cliente} text="Cliente" />
          <LabeledInput {...fechaVencimiento} type='date' text="Fecha de Vencimiento" />
          <LabeledInput {...costoTotal} text="Costo Total" />
          <LabeledInput {...descuento} text="Descuento" />
          <LabeledInput {...observaciones} text="Observaciones" />
        </Form>
      </Modal>
      <Message type="success" hide={succesMessage} onCLickClose={() => setSuccessMessage(!succesMessage)} >Presupuesto agregado correctamente</Message>
    </div>
  )
}

export default Presupuestos