import React from 'react'
import { useState } from 'react';
import Form from '../components/Form';
import LabeledInput from '../components/LabeledInput';
import Message from '../components/Message';
import Modal from '../components/Modal';
import Table from '../components/Table';
import useInputValue from '../hooks/useInputValue';

const Personal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const nombre = useInputValue('');
  const apellido = useInputValue('');
  const dni = useInputValue('');
  const cuil = useInputValue('');
  const calle = useInputValue('');
  const altura = useInputValue('');
  const depto = useInputValue('');
  const telefono = useInputValue('');
  const mail = useInputValue('');
  const puesto = useInputValue('');
  const sueldo = useInputValue('');


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
      <h1 className='Productos-title'>Listado de Personal</h1>
      <button onClick={() => setOpenModal(!openModal)} className='Button-add' type='button'>Agregar Personal</button>
      <Table body={body} edit={false} del={false} />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={'Agregar Personal'}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}>
          <LabeledInput {...nombre} text="Nombres" />
          <LabeledInput {...apellido} text="Apellidos" />
          <LabeledInput {...dni} text="DNI" />
          <LabeledInput {...cuil} text="CUIL" />
          <LabeledInput {...calle} text="Calle" />
          <LabeledInput {...altura} text="Altura" />
          <LabeledInput {...depto} text="Departamento" />
          <LabeledInput {...telefono} text="Telefono" />
          <LabeledInput {...mail} text="Mail" />
          <LabeledInput {...puesto} text="Puesto" />
          <LabeledInput {...sueldo} text="Sueldo" />
        </Form>
      </Modal>
      <Message type="success" hide={succesMessage} onCLickClose={() => setSuccessMessage(!succesMessage)} >Personal agregado correctamente</Message>
    </div>
  )
}

export default Personal