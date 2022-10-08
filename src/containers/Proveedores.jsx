import React from 'react'
import { useState } from 'react';
import Form from '../components/Form';
import LabeledInput from '../components/LabeledInput';
import Message from '../components/Message';
import Modal from '../components/Modal';
import Table from '../components/Table';
import useInputValue from '../hooks/useInputValue';

function Proveedores() {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const razonSocial = useInputValue('');
  const cuit = useInputValue('');
  const tipoResponable = useInputValue('');
  const calle = useInputValue('');
  const altura = useInputValue('');
  const telefono = useInputValue('');
  const mail = useInputValue('');
  const cbu = useInputValue('');
  const web = useInputValue('');


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
      <h1 className='Productos-title'>Listado de Proveedores</h1>
      <button onClick={() => setOpenModal(!openModal)} className='Button-add' type='button'>Agregar Proveedor</button>
      <Table body={body} edit={false} del={false} />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={'Agregar Proveedor'}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}>
          <LabeledInput {...razonSocial} text="Razon Social" />
          <LabeledInput {...cuit} text="CUIT" />
          <LabeledInput {...tipoResponable} text="Tipo de Responsable" />
          <LabeledInput {...calle} text="Calle" />
          <LabeledInput {...altura} text="Altura" />
          <LabeledInput {...telefono} text="Telefono" />
          <LabeledInput {...mail} text="Mail" />
          <LabeledInput {...cbu} text="CBU" />
          <LabeledInput {...web} text="Web" />
        </Form>
      </Modal>
      <Message type="success" hide={succesMessage} onCLickClose={() => setSuccessMessage(!succesMessage)} >Proveedor agregado correctamente</Message>
    </div>
  )
}

export default Proveedores