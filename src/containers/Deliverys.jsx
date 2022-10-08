import React from 'react'
import { useState } from 'react';
import Form from '../components/Form';
import LabeledInput from '../components/LabeledInput';
import Message from '../components/Message';
import Modal from '../components/Modal';
import Table from '../components/Table';
import useInputValue from '../hooks/useInputValue';

const Deliverys = () => {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const nombre = useInputValue('');
  const apellido = useInputValue('');
  const calle = useInputValue('');
  const altura = useInputValue('');
  const depto = useInputValue('');
  const cuil = useInputValue('');
  const fechaNacimiento = useInputValue('');
  const telefono = useInputValue('');
  const mail = useInputValue('');
  const vehiculo = useInputValue('');
  const numeroHabilitacion = useInputValue('');
  const vencimientoHanilitacion = useInputValue('');


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
      <h1 className='Productos-title'>Listado de Deliverys</h1>
      <button onClick={() => setOpenModal(!openModal)} className='Button-add' type='button'>Agregar Delivery</button>
      <Table body={body} edit={false} del={false} />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={'Agregar Delivery'}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}>
          <LabeledInput {...nombre} text="Nombres" />
          <LabeledInput {...apellido} text="Apellidos" />
          <LabeledInput {...cuil} text="CUIL" />
          <LabeledInput {...fechaNacimiento} type='date' text="Fecha De Nacimiento" />
          <LabeledInput {...telefono} text="Telefono" />
          <LabeledInput {...mail} text="Mail" type='mail' />
          <LabeledInput {...calle} text="Calle" />
          <LabeledInput {...altura} text="Altura" />
          <LabeledInput {...depto} text="Departamento" />
          <LabeledInput {...vehiculo} text="Vehiculo" />
          <LabeledInput {...numeroHabilitacion} text="Numero de Habilitacion" />
          <LabeledInput {...vencimientoHanilitacion} type='date' text="Vencimiento de Habilitacion" />
        </Form>
      </Modal>
      <Message type="success" hide={succesMessage} onCLickClose={() => setSuccessMessage(!succesMessage)} >Delivery agregado correctamente</Message>
    </div>
  )
}

export default Deliverys