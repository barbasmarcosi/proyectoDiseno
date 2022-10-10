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
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [message, setMessage] = useState('');
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
    setMessage('Comprobante de venta agregado correctamente')
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true)
    }, 5000);
  }
  const handleModifyButton = () => {
    setOpenModifyModal(!openModifyModal)
    setMessage('Datos de comprobante de venta modificados correctamente')
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
      <Table onEdit={() => setOpenModifyModal(!openModifyModal)} body={body} edit={false} del={false} />
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
      <Modal open={openModifyModal} setClosed={() => setOpenModifyModal(false)}>
        <Form
          title={'Modificar datos de comprobante de venta'}
          multiple={true}
          edit={true}
          onEdit={() => handleModifyButton()}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModifyModal(!openModifyModal)}>
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
      <Message type="success" hide={succesMessage} onCLickClose={() => setSuccessMessage(!succesMessage)} >{message}</Message>
    </div>
  )
}

export default Ventas