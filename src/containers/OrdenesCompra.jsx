import React from 'react'
import { useState } from 'react';
import Form from '../components/Form';
import LabeledInput from '../components/LabeledInput';
import Message from '../components/Message';
import Modal from '../components/Modal';
import Table from '../components/Table';
import useInputValue from '../hooks/useInputValue';

const OrdenesCompra = () => {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const personal = useInputValue('');
  const proveedor = useInputValue('');
  const terminoEntrega = useInputValue('');
  const fecha = useInputValue('');
  const razonSocial = useInputValue('');
  const domicilioComercial = useInputValue('');
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
      <h1 className='Productos-title'>Listado de Ordenes de Compra</h1>
      <button onClick={() => setOpenModal(!openModal)} className='Button-add' type='button'>Agregar Orden de Compra</button>
      <Table body={body} edit={false} del={false} />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={'Agregar Orden de Compra'}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}>
          <LabeledInput {...personal} text="Personal" />
          <LabeledInput {...proveedor} text="Proveedor" />
          <LabeledInput {...terminoEntrega} text="Termino de Entrega" />
          <LabeledInput {...fecha} type='date' text="Fecha" />
          <LabeledInput {...razonSocial} text="Razon Social" />
          <LabeledInput {...domicilioComercial} text="Domicilio Comercial" />
          <LabeledInput {...observaciones} text="Observaciones" />
        </Form>
      </Modal>
      <Message type="success" hide={succesMessage} onCLickClose={() => setSuccessMessage(!succesMessage)} >Orden de compra agregada correctamente</Message>
    </div>
  )
}

export default OrdenesCompra