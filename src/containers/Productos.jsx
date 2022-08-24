import React, { useState } from 'react'
import Message from '../components/Message';
import Modal from '../components/Modal'
import Table from '../components/Table'

function Productos() {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const handleAcceptButton = () => {
    setOpenModal(!openModal);
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true)
    }, 5000);
  }
  const body = [{
    Producto: 'Empanada',
    Precio: 12,
  },
  {
    Producto: 'Vino',
    Precio: 8,
  }]
  return (
    <div className='Productos'>
      <h1 className='Productos-title'>Listado de Productos</h1>
      <button onClick={() => setOpenModal(!openModal)} className='Button-add' type='button'>Agregar Producto</button>
      <Table body={body} edit={false} del={false} />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Table body={body} edit={false} del={false} />
        <Table body={body} edit={false} del={false} />
        <Table body={body} edit={false} del={false} />
        <Table body={body} edit={false} del={false} />
        <Table body={body} edit={false} del={false} />
        <Table body={body} edit={false} del={false} />
        <Table body={body} edit={false} del={false} />
        <Table body={body} edit={false} del={false} />
        <Table body={body} edit={false} del={false} />
        <Table body={body} edit={false} del={false} />
        <Table body={body} edit={false} del={false} />
        <Table body={body} edit={false} del={false} />
        <Table body={body} edit={false} del={false} />
        <Table body={body} edit={false} del={false} />
        <Table body={body} edit={false} del={false} />
        <Table body={body} edit={false} del={false} />
        <Table body={body} edit={false} del={false} />
        <Table body={body} edit={false} del={false} />
        <Table body={body} edit={false} del={false} />
        <Table body={body} edit={false} del={false} />
        <div className="Button-container">
          <button onClick={() => setOpenModal(!openModal)} type="button" className='Button-cancel'>Cancelar</button>
          <button onClick={handleAcceptButton} type="button" className='Button-accept'>Agregar</button>
          <button onClick={() => setOpenModal(!!openModal)} type="button" className='Button-accept'>Seguir agregando</button>
        </div>
      </Modal>
      <Message type="success" hide={succesMessage} onCLickClose={() => setSuccessMessage(!succesMessage)} >Producto agregado correctamente</Message>
    </div>
  )
}

export default Productos