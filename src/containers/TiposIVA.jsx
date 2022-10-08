import React from 'react'
import { useState } from 'react';
import Form from '../components/Form';
import LabeledInput from '../components/LabeledInput';
import Message from '../components/Message';
import Modal from '../components/Modal';
import Table from '../components/Table';
import useInputValue from '../hooks/useInputValue';

const TiposIVA = () => {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const descripcion = useInputValue('');

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
      <h1 className='Productos-title'>Listado de Tipos de IVA</h1>
      <button onClick={() => setOpenModal(!openModal)} className='Button-add' type='button'>Agregar Tipo de IVA</button>
      <Table body={body} edit={false} del={false} />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={'Agregar Tipo de IVA'}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}>
          <LabeledInput {...descripcion} text="Descripcion" />
        </Form>
      </Modal>
      <Message type="success" hide={succesMessage} onCLickClose={() => setSuccessMessage(!succesMessage)} >Tipos de IVA agregado correctamente</Message>
    </div>
  )
}

export default TiposIVA