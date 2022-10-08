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
  const product = useInputValue('');
  const rubro = useInputValue('');
  const descripcion = useInputValue('');
  const precioVenta = useInputValue('');
  const precioCosto = useInputValue('');


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
      <Message type="success" hide={succesMessage} onCLickClose={() => setSuccessMessage(!succesMessage)} >Producto agregado correctamente</Message>
    </div>
  )
}

export default Productos