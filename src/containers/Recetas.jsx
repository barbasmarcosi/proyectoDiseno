import React from 'react'
import { useState } from 'react';
import Form from '../components/Form';
import LabeledInput from '../components/LabeledInput';
import Message from '../components/Message';
import Modal from '../components/Modal';
import Table from '../components/Table';
import useInputValue from '../hooks/useInputValue';
import modulo_productos from '../initialState/modulo_productos';
import LabeledDataList from '../components/LabeledDataList';

const Recetas = () => {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [message, setMessage] = useState('');
  const [detailsModal, setDetailsModal] = useState(false);
  const producto = useInputValue('');
  const descripcion = useInputValue('');
  const tiempoElaboracion = useInputValue('');
  const cantidadProducto = useInputValue('');


  const handleAcceptButton = () => {
    setOpenModal(!openModal);
    setMessage('Receta agregada correctamente')
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true)
    }, 5000);
  }
  const handleModifyButton = () => {
    setOpenModifyModal(!openModifyModal)
    setMessage('Receta modificada correctamente')
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true)
    }, 5000);
  }
  return (
    <div className='Productos'>
      <h1 className='Productos-title'>Listado de Recetas</h1>
      <button onClick={() => setOpenModal(!openModal)} className='Button-add' type='button'>Agregar Receta</button>
      <Table onEdit={() => setOpenModifyModal(!openModifyModal)} body={modulo_productos.recetas}  exceptions={['materiaPrima']} edit={false} del={false} />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={'Agregar Receta'}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}>
          <LabeledDataList {...producto} options={modulo_productos.productos} which={'descripcion'} text="Producto" />
          <LabeledInput {...descripcion} text="Descripcion" />
          <LabeledInput {...tiempoElaboracion} text="Tiempo de Elaboracion" />
          <LabeledInput {...cantidadProducto} text="Cantidad de Producto" />
          <button style={{ width: "max-content", marginBottom: '5rem'}} onClick={() => setDetailsModal(true)} type="button" className='Button-cancel'>Seleccionar materia prima</button>
        </Form>
      </Modal>
      <Modal open={openModifyModal} setClosed={() => setOpenModifyModal(false)}>
        <Form
          title={'Modificar Receta'}
          multiple={true}
          edit={true}
          onEdit={() => handleModifyButton()}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModifyModal(!openModifyModal)}>
          <LabeledDataList {...producto} options={modulo_productos.productos} which={'descripcion'} text="Producto" />
          <LabeledInput {...descripcion} text="Descripcion" />
          <LabeledInput {...tiempoElaboracion} text="Tiempo de Elaboracion" />
          <LabeledInput {...cantidadProducto} text="Cantidad de Producto" />
          <button style={{ width: "max-content", marginBottom: '5rem'}} onClick={() => setDetailsModal(true)} type="button" className='Button-cancel'>Seleccionar materia prima</button>
        </Form>
      </Modal>
      {/*<Modal open={detailsModal} setClosed={() => setDetailsModal(false)}>
      <Table onEdit={() => setOpenModifyModal(!openModifyModal)} body={modulo_productos.recetas} edit={false} del={false} />

  </Modal>*/}
      <Message type="success" hide={succesMessage} onCLickClose={() => setSuccessMessage(!succesMessage)} >{message}</Message>
    </div>
  )
}

export default Recetas