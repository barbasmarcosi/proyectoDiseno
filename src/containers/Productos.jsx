import React, { useState } from 'react'
import Form from '../components/Form';
import LabeledInput from '../components/LabeledInput';
import Message from '../components/Message';
import Modal from '../components/Modal'
import Table from '../components/Table'
import useInputValue from '../hooks/useInputValue';

const Productos = () => {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [message, setMessage] = useState('');
  const product = useInputValue('');
  const rubro = useInputValue('');
  const descripcion = useInputValue('');
  const precioVenta = useInputValue('');
  const precioCosto = useInputValue('');


  const handleAcceptButton = () => {
    setOpenModal(!openModal);
    setMessage('Producto agregado correctamente')
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true)
    }, 5000);
  }
  const handleModifyButton = () => {
    setOpenModifyModal(!openModifyModal)
    setMessage('Datos de producto modificados correctamente')
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
      <Table onEdit={() => setOpenModifyModal(!openModifyModal)} body={body} edit={false} del={false} />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={'Agregar Producto'}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}>
          <LabeledInput {...product} text="Producto" />
          <LabeledInput {...rubro} text="Rubro" />
          <LabeledInput {...descripcion} text="Descripcion" />
          <LabeledInput {...precioVenta} text="Precio de Venta" />
          <LabeledInput {...precioCosto} text="Precio al Costo" />
        </Form>
      </Modal>
      <Modal open={openModifyModal} setClosed={() => setOpenModifyModal(false)}>
        <Form
          title={'Modificar Datos del Producto'}
          multiple={true}
          edit={true}
          onEdit={() => handleModifyButton()}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModifyModal(!openModifyModal)}>
          <LabeledInput {...product} text="Producto" />
          <LabeledInput {...rubro} text="Rubro" />
          <LabeledInput {...descripcion} text="Descripcion" />
          <LabeledInput {...precioVenta} text="Precio de Venta" />
          <LabeledInput {...precioCosto} text="Precio al Costo" />
        </Form>
      </Modal>
      <Message type="success" hide={succesMessage} onCLickClose={() => setSuccessMessage(!succesMessage)} >{message}</Message>
    </div>
  )
}

export default Productos