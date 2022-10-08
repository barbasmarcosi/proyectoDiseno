import React from 'react'
import { useState } from 'react';
import Form from '../components/Form';
import LabeledInput from '../components/LabeledInput';
import Message from '../components/Message';
import Modal from '../components/Modal';
import Table from '../components/Table';
import useInputValue from '../hooks/useInputValue';

const Ventas = () => {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const pedido = useInputValue('');
  const montoTotal = useInputValue('');
  const fechaHora = useInputValue('');
  const tipoFactura = useInputValue('');
  const nroFactura = useInputValue('');
  const razonSocial = useInputValue('');
  const domicilioComercial = useInputValue('');
  const inicioActividad = useInputValue('');
  const ingresosBrutos = useInputValue('');


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
      <h1 className='Productos-title'>Listado de Ventas</h1>
      <button onClick={() => setOpenModal(!openModal)} className='Button-add' type='button'>Agregar Comprobante de Venta</button>
      <Table body={body} edit={false} del={false} />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={'Agregar Comprobante de Venta'}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}>
          <LabeledInput {...pedido} text="Pedido" />
          <LabeledInput {...montoTotal} text="Monto Total" />
          <LabeledInput {...nroFactura} text="Numero de Factura" />
          <LabeledInput {...tipoFactura} text="Tipo de Factura" />
          <LabeledInput {...razonSocial} text="Razon Social" />
          <LabeledInput {...domicilioComercial} text="Domicilio Comercial" />
          <LabeledInput {...inicioActividad} type='date' text="Inicio de Actividad" />
          <LabeledInput {...ingresosBrutos} text="Ingresos Brutos" />
        </Form>
      </Modal>
      <Message type="success" hide={succesMessage} onCLickClose={() => setSuccessMessage(!succesMessage)} >Comprobante de venta agregado correctamente</Message>
    </div>
  )
}

export default Ventas