import React from 'react'
import { useState } from 'react';
import Form from '../components/Form';
import LabeledInput from '../components/LabeledInput';
import Message from '../components/Message';
import Modal from '../components/Modal';
import Table from '../components/Table';
import useInputValue from '../hooks/useInputValue';
import modulo_ventas from '../initialState/modulo_ventas';
import LabeledDataList from '../components/LabeledDataList';

const Ventas = () => {
  const [openModal, setOpenModal] = useState(false);
  const [succesMessage, setSuccessMessage] = useState(true);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [message, setMessage] = useState('');
  const pedido = useInputValue('');
  const fechaHora = useInputValue('');
  const nroFactura = useInputValue('');
  const tipoFactura = useInputValue('');
  const montoTotal = useInputValue('');
  const productos = useInputValue('');



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
      <h1 className='Productos-title'>Listado de Comprobantes de venta</h1>
      <button onClick={() => setOpenModal(!openModal)} className='Button-add' type='button'>Agregar Comprobante de Venta</button>
      <Table onEdit={() => setOpenModifyModal(!openModifyModal)} body={modulo_ventas.comprobantesVenta} exceptions={['productos']} edit={false} del={false} />
      <Modal open={openModal} setClosed={() => setOpenModal(false)}>
        <Form
          title={'Agregar Comprobante de Venta'}
          multiple={true}
          onAdd={() => handleAcceptButton()}
          onAddMultiple={() => setOpenModal(!!openModal)}
          onCancel={() => setOpenModal(!openModal)}>
          <LabeledInput value={modulo_ventas.comprobantesVenta.length + 1} toShowId={true} text="Nro. Comprobante" />
          <LabeledDataList {...pedido} options={modulo_ventas.pedidos} which={'id'} text="Nro.Pedido" />
          <LabeledInput {...fechaHora} text="Fecha de Comprobante" />
          <LabeledDataList options={modulo_ventas.comprobantesVenta} which={'nroFactura'} {...nroFactura} text="Nro. de Factura" />
          <LabeledDataList
            {...tipoFactura}
            options={[
              { tipoFactura: "A" },
              { tipoFactura: "B" },
              { tipoFactura: "C" },
            ]}
            which={"tipoFactura"}
            text="Tipo de factura"
          />
          <LabeledInput {...montoTotal} text="Monto total" />
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
          <LabeledInput value={modulo_ventas.comprobantesVenta.length + 1} toShowId={true} text="Nro. Comprobante" />
          <LabeledDataList {...pedido} options={modulo_ventas.pedidos} which={'id'} text="Nro.Pedido" />
          <LabeledInput {...fechaHora} text="Fecha de Comprobante" />
          <LabeledDataList options={modulo_ventas.comprobantesVenta} which={'nroFactura'} {...nroFactura} text="Nro. de Factura" />
          <LabeledDataList
            {...tipoFactura}
            options={[
              { tipoFactura: "A" },
              { tipoFactura: "B" },
              { tipoFactura: "C" },
            ]}
            which={"tipoFactura"}
            text="Tipo de factura"
          />
          <LabeledInput {...montoTotal} text="Monto total" />
        </Form>
      </Modal>
      <Message type="success" hide={succesMessage} onCLickClose={() => setSuccessMessage(!succesMessage)} >{message}</Message>
    </div>
  )
}

export default Ventas