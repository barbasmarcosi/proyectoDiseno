import React from "react";
import Layout from "../components/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import Ventas from "../containers/Ventas";
import Productos from "../containers/Productos";
import Recetas from "../containers/Recetas/Recetas";
import Rubros from "../containers/Rubros/Rubros";
import Pedidos from "../containers/Pedidos";
import Presupuestos from "../containers/Presupuestos";
import Reclamos from "../containers/Reclamos";
import OrdenesCompra from "../containers/OrdenesCompra";
import FacturasCompra from "../containers/FacturasCompra";
import RemitosCompra from "../containers/RemitosCompra";
import CierresCaja from "../containers/CierresCaja";
import Personal from "../containers/Personal";
import Clientes from "../containers/Clientes/Clientes";
import Produccion from "../containers/Produccion";
import Deliverys from "../containers/Deliverys";
import Proveedores from "../containers/Proveedores";
import MateriaPrima from "../containers/MateriaPrima";
import TiposIVA from "../containers/TiposIVA";
import TiposResponsable from "../containers/TiposResponsable";
import Provincias from "../containers/Provincias";
import Localidades from "../containers/Localidades";
import Calles from "../containers/Calles";
import FormasPago from "../containers/FormasPago";
import Marcas from "../containers/Marcas/Marcas";
import RemitosEntrega from "../containers/RemitosEntrega";
import Estadistica from "../containers/Estadistica";
import UnidadMedida from "../containers/UnidadMedidad";
import TipoDocumento from "../containers/TipoDocumento";
import MovimientoMateriaPrima from "../containers/MovimientoMateriaPrima";
import PagoDelivery from "../components/PagoDelivery";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes className="Content">
            <Route path="/" element={<Home />} />
            <Route path="/recetas" element={<Recetas />} />
            <Route path="/rubros" element={<Rubros />} />
            <Route path="/marcas" element={<Marcas />} />
            <Route path="/pedidos" element={<Pedidos />} />
            <Route path="/estadistica" element={<Estadistica />} />
            <Route path="/presupuestos" element={<Presupuestos />} />
            <Route path="/reclamos" element={<Reclamos />} />
            <Route path="/ordenes-compra" element={<OrdenesCompra />} />
            <Route path="/facturas-compra" element={<FacturasCompra />} />
            <Route path="/remitos-compra" element={<RemitosCompra />} />
            <Route path="/ventas" element={<Ventas />} />
            <Route path="/cierres-caja" element={<CierresCaja />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/produccion" element={<Produccion />} />
            <Route path="/deliverys" element={<Deliverys />} />
            <Route path="/proveedores" element={<Proveedores />} />
            <Route path="/materia-prima" element={<MateriaPrima />} />
            <Route path="/tipos-iva" element={<TiposIVA />} />
            <Route path="/tipos-responsable" element={<TiposResponsable />} />
            <Route path="/provincias" element={<Provincias />} />
            <Route path="/localidades" element={<Localidades />} />
            <Route path="/calles" element={<Calles />} />
            <Route path="/formas-pago" element={<FormasPago />} />
            <Route path="/remitosEntrega" element={<RemitosEntrega />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/unidad-medida" element={<UnidadMedida />} />
            <Route path="/tipo-documento" element={<TipoDocumento />} />
            <Route
              path="/movimiento-materia-prima"
              element={<MovimientoMateriaPrima />}
            />
            <Route path="/pago-delivery" element={<PagoDelivery />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
