import React from 'react'
import { Link } from 'react-router-dom';
import Accordion from './Accordion';

const NavBar = () => {
    return (
        <div className='NavBar'>
            <ul className="NavBar-items">
                <Accordion title="Productos">
                    <Link className='NavBar-item-link' to="/productos">Productos</Link>
                    <Link className='NavBar-item-link' to="/recetas">Recetas</Link>
                    <Link className='NavBar-item-link' to="/rubros">Rubros</Link>
                </Accordion>
                <Accordion title="Pedidos">
                    <Link className='NavBar-item-link' to="/pedidos">Pedidos</Link>
                    <Link className='NavBar-item-link' to="/presupuestos">Presupuestos</Link>
                    <Link className='NavBar-item-link' to="/reclamos">Reclamos</Link>
                </Accordion>
                <Accordion title="Finanzas">
                    <Link className='NavBar-item-link' to="/ordenes-compra">Ordenes de Compra</Link>
                    <Link className='NavBar-item-link' to="/facturas-compra">Facutras de Compra</Link>
                    <Link className='NavBar-item-link' to="/remitos-compra">Remitos de Proveedor</Link>
                    <Link className='NavBar-item-link' to="/ventas">Ventas</Link>
                    <Link className='NavBar-item-link' to="/cierres-caja">Cierres de Caja</Link>
                </Accordion>
                <Accordion title="Administrar">
                    <Link className='NavBar-item-link' to="/personal">Personal</Link>
                    <Link className='NavBar-item-link' to="/clientes">Clientes</Link>
                    <Link className='NavBar-item-link' to="/produccion">Produccion</Link>
                    <Link className='NavBar-item-link' to="/deliverys">Deliverys</Link>
                    <Link className='NavBar-item-link' to="/proveedores">Proveedores</Link>
                    <Link className='NavBar-item-link' to="/materia-prima">Materia Prima</Link>
                    <Link className='NavBar-item-link' to="/tipos-iva">Tipos de IVA</Link>
                    <Link className='NavBar-item-link' to="/tipos-responsable">Tipos de Responsabilidad</Link>
                    <Link className='NavBar-item-link' to="/provincias">Provincias</Link>
                    <Link className='NavBar-item-link' to="/localidades">Localidades</Link>
                    <Link className='NavBar-item-link' to="/calles">Calles</Link>
                    <Link className='NavBar-item-link' to="/formas-pago">Formas de Pago</Link>
                </Accordion>
            </ul>
        </div>
    )
}

export default NavBar