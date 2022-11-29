import React, { useState } from "react";
import Table from "../components/Table";
import manageLocalStorage from "../usefullFunctions/manageLocalStorage";

const Estadistica = () => {
  const entity = "pedido";
  const [pedidos, setPedidos] = useState(manageLocalStorage("get", entity));
  const [pedidosCopy, setPedidosCopy] = useState(pedidos);
  const [exceptions, setExceptions] = useState([
    "encargado",
    "tipoVenta",
    "observaciones",
    "fechaPedido",
    "horaPedido",
    "delivery",
    "costoEnvio",
  ]);

  const filterFunction = (field, newField) => {
    const firstExtract = pedidos.map((pedido) => {
      return {
        [field]: pedido[field],
        montoTotal: pedido.montoTotal,
      };
    });
    const arr = [];
    firstExtract.map((item) => {
      let total = 0;
      let count = 0;
      firstExtract.map((item2) => {
        if (item[field] === item2[field]) {
          total += item2.montoTotal;
          count++;
        }
      });
      const alreadyExists = [
        ...new Set(
          arr.map((element) => {
            return element[newField] !== item[field];
          })
        ),
      ];
      if (
        (alreadyExists[0] && alreadyExists.length < 2) ||
        !alreadyExists.length
      ) {
        arr.push({
          [newField]: item[field],
          montoTotal: total,
          cantidad: count,
        });
      }
    });
    setExceptions([]);
    console.log(arr)
    setPedidosCopy(arr.sort((a, b) => b.cantidad - a.cantidad));
  };

  const doFilter = (value) => {
    if (value === "monthFilter") {
      const months = pedidos.map((pedido) => {
        const arr = pedido.fechaPedido.split(/\//);
        return { mes: `${arr[1]}-${arr[2]}`, montoTotal: pedido.montoTotal };
      });
      const arr = [];
      months.map((month) => {
        let total = 0;
        let count = 0;
        months.map((month2) => {
          if (month.mes === month2.mes) {
            total += month2.montoTotal;
            count++;
          }
        });
        const alreadyExists = [
          ...new Set(
            arr.map((element) => {
              return element.mes !== month.mes;
            })
          ),
        ];
        if (
          (alreadyExists[0] && alreadyExists.length < 2) ||
          !alreadyExists.length
        ) {
          arr.push({ mes: month.mes, montoTotal: total, cantidad: count });
        }
      });
      setExceptions([]);
      setPedidosCopy(arr.sort((a, b) => b.cantidad - a.cantidad));
    }
    if (value === "default") setPedidosCopy(pedidos);
    if (value === "payment") filterFunction("formaPago", "metodoDePago");
    if (value === "topSellers") {
      const products = pedidos.map((pedido) =>
        pedido.productos.map((product) => ({
          producto: product.producto,
          cantidad: product.cantidad,
          precio: product.precioUnitario,
        }))
      );
      const arr = [];
      products.map((product) => {
        product.map((item) => {
          const arr2 = [];
          let quantity = 0;
          products.map((product2) => {
            product2.map((item2) => {
              if (item2.producto === item.producto) {
                quantity += item2.cantidad;
              }
            });
          });
          let count = 0;
          arr2.push({
            producto: item.producto,
            cantidad: quantity,
            precio: item.precio,
          });
          arr2.map((el2) => {
            arr.map((el) => {
              if (el.producto === el2.producto) {
                count++;
              }
            });
          });
          if (!count || !arr.length) {
            arr.push({
              producto: item.producto,
              cantidad: quantity,
              precio: item.precio,
              total: quantity * item.precio,
            });
          }
        });
      });
      setExceptions([]);
      setPedidosCopy(arr.sort((a, b) => b.cantidad - a.cantidad));
    }
    if (value === "topClients") filterFunction("cliente", "cliente");
    if (value === "sellType") filterFunction("tipoVenta", "tipoDeVenta");
    if (value === "sellDate") filterFunction("fechaPedido", "fechaDePedido");
    if (value === "seller") filterFunction("encargado", "vendedor");
    if (value === "delivery") filterFunction("delivery", "delivery");
  };

  return (
    <div className="Productos">
      <h1 className="Productos-title">Estadisticas de venta</h1>
      <select
        style={{
          height: "2rem",
          width: "20rem",
          marginBottom: "1rem",
          borderRadius: "0.5rem",
          textAlign: "center",
          fontSize: "1rem",
        }}
        onChange={(e) => doFilter(e.target.value)}
      >
        <option value="default">Seleccione la estadistica</option>
        <option value="monthFilter">Ventas por mes</option>
        <option value="payment">Por metodos de pago</option>
        <option value="topSellers">Producto mas vendido</option>
        <option value="topClients">Cliente mas recurrente</option>
        <option value="sellType">Por tipo de venta</option>
        <option value="sellDate">Por fecha de pedido</option>
        <option value="seller">Por vendedor</option>
        <option value="delivery">Por delivery</option>
      </select>
      <Table
        body={pedidosCopy}
        edit={true}
        del={true}
        searchingFor={["presupuesto"]}
        exceptions={exceptions}
      />
    </div>
  );
};

export default Estadistica;
