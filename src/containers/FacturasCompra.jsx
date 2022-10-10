import React from 'react'
import { useState } from 'react';
import Form from '../components/Form';
import LabeledInput from '../components/LabeledInput';
import Message from '../components/Message';
import Modal from '../components/Modal';
import Table from '../components/Table';
import useInputValue from '../hooks/useInputValue';

const FacturasCompra = () => {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [message, setMessage] = useState('');
  const ordenCompra = useInputValue('');
  const proveedor = useInputValue('');
  const montoTotal = useInputValue('');
  const fecha = useInputValue('');
  const tipoFactura = useInputValue('');
  const nroFactura = useInputValue('');
  const domicilioComercial = useInputValue('');
  const domicilioVenta = useInputValue('');
  const condicionVenta = useInputValue('');
  const inicioActividad = useInputValue('');
  const ingresosBrutos = useInputValue('');

  const handleAcceptButton = () => {
    setOpenModal(!openModal);
    setMessage('Factura de compra agregada correctamente')
    setSuccessMessage(!succesMessage);
    setTimeout(() => {
      setSuccessMessage(true)
    }, 5000);
  }
  const handleModifyButton = () => {
    setOpenModifyModal(!openModifyModal)
    setMessage('Factura de compra modificada correctamente')
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
      <h1 className='Productos-title'>Listado de Factura de Compra</h1>
      <button onClick={() => setOpenModal(!openModal)} className='Button-add' type='button'>Agregar Factura de Compra</button>
      <Table body={body} onEdit={() => setOpenModifyModal(!openModifyModal)} edit={false} del={false} />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={'Agregar Factura de Compra'}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}>
          <LabeledInput {...ordenCompra} text="Orden de Compra" />
          <LabeledInput {...proveedor} text="Proveedor" />
          <LabeledInput {...fecha} type='date' text="Fecha de Factura" />
          <LabeledInput {...montoTotal} text="Monto Total" />
          <LabeledInput {...tipoFactura} text="Tipo de Factura" />
          <LabeledInput {...nroFactura} text="Numero de Factura" />
          <LabeledInput {...domicilioComercial} text="Domicilio Comercial" />
          <LabeledInput {...domicilioVenta} text="Domicilio de Venta" />
          <LabeledInput {...condicionVenta} text="Condicion de Venta" />
          <LabeledInput {...inicioActividad} type='date' text="Inicio de Actividad" />
          <LabeledInput {...ingresosBrutos} text="Ingresos Brutos" />
        </Form>
      </Modal>
      <Modal open={openModifyModal} setClosed={() => setOpenModifyModal(false)}>
        <Form
          title={'Modificar Factura de Compra'}
          multiple={true}
          edit={true}
          onAdd={() => handleAcceptButton()}
          onEdit={() => handleModifyButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModifyModal(!openModifyModal)}>
          <LabeledInput {...ordenCompra} text="Orden de Compra" />
          <LabeledInput {...proveedor} text="Proveedor" />
          <LabeledInput {...fecha} type='date' text="Fecha de Factura" />
          <LabeledInput {...montoTotal} text="Monto Total" />
          <LabeledInput {...tipoFactura} text="Tipo de Factura" />
          <LabeledInput {...nroFactura} text="Numero de Factura" />
          <LabeledInput {...domicilioComercial} text="Domicilio Comercial" />
          <LabeledInput {...domicilioVenta} text="Domicilio de Venta" />
          <LabeledInput {...condicionVenta} text="Condicion de Venta" />
          <LabeledInput {...inicioActividad} type='date' text="Inicio de Actividad" />
          <LabeledInput {...ingresosBrutos} text="Ingresos Brutos" />
        </Form>
      </Modal>
      <Message type="success" hide={succesMessage} onCLickClose={() => setSuccessMessage(!succesMessage)} >{message}</Message>
    </div>
  )
}

export default FacturasCompra