import React from 'react'
import Table from '../components/Table'

function Productos() {
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
      <input className='Button-add' type='button' value="Agregar Producto"/>
      <Table body={body} edit={false} del={false} />
    </div>
  )
}

export default Productos