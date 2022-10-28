import React from 'react'
import { useState } from 'react';
import Form from '../../components/Form';
import LabeledInput from '../../components/LabeledInput';
import Message from '../../components/Message';
import Modal from '../../components/Modal';
import Table from '../../components/Table';
import useInputValue from '../../hooks/useInputValue';
import ClientesAdd from './ClientesAdd';

const Clientes = () => {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [message, setMessage] = useState('');
  const tipoResponsable = useInputValue('');
  const nombre = useInputValue('');
  const apellido = useInputValue('');
  const calle = useInputValue('');
  const altura = useInputValue('');
  const depto = useInputValue('');
  const razonSocial = useInputValue('');
  const cuit = useInputValue('');
  const fechaNacimiento = useInputValue('');
  const telefono = useInputValue('');
  const mail = useInputValue('');

  const handleModifyButton = () => {
    setOpenModifyModal(!openModifyModal)
    setMessage('Cliente modificado correctamente')
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
      <h1 className='Productos-title'>Listado de Clientes</h1>
      <button onClick={() => setOpenModal(!openModal)} className='Button-add' type='button'>Agregar Cliente</button>
      <Table body={body} onEdit={() => setOpenModifyModal(!openModifyModal)} edit={false} del={false} />
      <ClientesAdd setMessage={setMessage} setMessageState={setSuccessMessage} setOpenModal={setOpenModal} openModal={openModal} />
      <Modal open={openModifyModal} setClosed={() => setOpenModifyModal(!openModifyModal)}>
        <Form
          title={'Agregar Cliente'}
          multiple={true}
          edit={true}
          onEdit={() => handleModifyButton()}
          onAdd={() => handleModifyButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModifyModal(!openModifyModal)}>
          <LabeledInput {...nombre} text="Nombres" />
          <LabeledInput {...apellido} text="Apellidos" />
          <LabeledInput {...razonSocial} text="Razon Social" />
          <LabeledInput {...cuit} text="CUIT" />
          <LabeledInput {...fechaNacimiento} type='date' text="Fecha De Nacimiento" />
          <LabeledInput {...telefono} text="Telefono" />
          <LabeledInput {...mail} text="Mail" type='mail' />
          <LabeledInput {...calle} text="Calle" />
          <LabeledInput {...altura} text="Altura" />
          <LabeledInput {...depto} text="Departamento" />
          <LabeledInput {...tipoResponsable} text="Tipo de Responsable" />
        </Form>
      </Modal>
      <Message type="success" hide={succesMessage} onCLickClose={() => setSuccessMessage(!succesMessage)} >{message}</Message>
    </div>
  )
}

export default Clientes