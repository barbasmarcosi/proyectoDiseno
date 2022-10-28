export default {
    ordenesCompra: [
      {
        id: 1,
        proveedor: "Juan Cortes",
        fecha: "24/05/2022",
        encargado: "Federico Franchini",
        hora: "10:00",
        terminoEntrega: "Entrega en local y pago en efectivo",
        montoTotal: 14876,
        observaciones: "",
        productos: [
          { materiaPrima: null, producto: "Vino Tinto Benjamin", cantidad: 10, unidadMedida: "unidades", costoUnitario: 718, importe: 7180},
          { materiaPrima: "Muzarella", producto: null, cantidad: 5, unidadMedida: "kilogramos", costoUnitario: 1000, importe: 5000},
          { materiaPrima: "Brocoli x kg", producto: null, cantidad: "4", unidadMedida: "kilogramos", costoUnitario: 674, importe: 2696}
        ]
      },
      {
        id: 2,
        proveedor: "Pedro Díaz",
        encargado: "Federico Franchini",
        fecha: "24/06/2022",
        hora: "17:00",
        terminoEntrega: "Entrega en local y pago en efectivo",
        montoTotal: 7530,
        observaciones: "",
        productos: [
          { materiaPrima: null, producto: "Aceite de Oliva 250ml", cantidad: 6, unidadMedida: "unidades", costoUnitario: 530, importe: 3180},
          { materiaPrima: "Morcilla x kg", producto: null, cantidad: 3, unidadMedida: "kilogramos", costoUnitario: 700, importe: 2100},
          { materiaPrima: "Queso Roquefort x kg", producto: null, cantidad: 1.5, unidadMedida: "kilogramos", costoUnitario: 1500, importe: 2250}
        ]
      },
      {
        id: 3,
        proveedor: "Manuel Perez",
        encargado: "Federico Franchini",
        fecha: "24/10/2022",
        hora: "12:00",
        terminoEntrega: "Entrega en local y pago en efectivo",
        montoTotal: 8650,
        observaciones: "",
        productos: [
          { materiaPrima: null, producto: "Pickles 220g", cantidad: 5, unidadMedida: "unidades", costoUnitario: 250, importe: 1250},
          { materiaPrima: "Jamon Crudo", producto: null, cantidad: 1.5, unidadMedida: "kilogramos", costoUnitario: 3600, importe: 5400},
          { materiaPrima: "Cebolla x kg", producto: null, cantidad: 4, unidadMedida: "kilogramos", costoUnitario: 500, importe: 2000}
        ]
      },
    ],
    facturasCompra: [
      {
        id: 1,
        ordenCompra: 1,
        remito: 1,
        tipoFactura: "B",
        fecha: "27/05/2022",
        hora: "11:00",
        nroFactura: "001/2022",
        montoTotal: 14876, 
        condicionVenta: "contado efectivo",
        observaciones: "",
        productos: [
          { materiaPrima: null, producto: "Vino Benjamin", cantidad: 10, unidadMedida: "unidades", costoUnitario: 718, importe: 7180},
          { materiaPrima: "Muzarella", producto: null, cantidad: 5, unidadMedida: "kilogramos", costoUnitario: 1000, importe: 5000},
          { materiaPrima: "Brocoli x kg", producto: null, cantidad: "4", unidadMedida: "kilogramos", costoUnitario: 674, importe: 2696}
        ]
      },
      {
        id: 2,
        ordenCompra: 3,
        remito: 2,
        tipoFactura: "A",
        fecha: "18/07/2022",
        hora: "16:00",
        nroFactura: "002/2022",
        montoTotal: 10350, 
        condicionVenta: "contado efectivo",
        observaciones: "",
        productos: [
          { materiaPrima: "Muzarella", producto: null, cantidad: 5, unidadMedida: "kilogramos", costoUnitario: 1000, importe: 5000},
          { materiaPrima: null, producto: "Pickles 220g", cantidad: 5, unidadMedida: "unidades", costoUnitario: 250, importe: 1250},
          { materiaPrima: "Morcilla x kg", producto: null, cantidad: 3, unidadMedida: "kilogramos", costoUnitario: 700, importe: 2100},
        ]
      },
      {
        id: 3,
        ordenCompra: 4,
        remito: 3,
        tipoFactura: "B",
        fecha: "19/08/2022",
        hora: "10:00",
        nroFactura: "003/2022",
        montoTotal: 12680, 
        condicionVenta: "contado efectivo",
        observaciones: "",
        productos: [
          { materiaPrima: null, producto: "Aceite de Oliva 250ml", cantidad: 6, unidadMedida: "unidades", costoUnitario: 530, importe: 3180},
          { materiaPrima: "Morcilla x kg", producto: null, cantidad: 3, unidadMedida: "kilogramos", costoUnitario: 700, importe: 2100},
          { materiaPrima: "Jamon Crudo", producto: null, cantidad: 1.5, unidadMedida: "kilogramos", costoUnitario: 3600, importe: 5400},
          { materiaPrima: "Cebolla x kg", producto: null, cantidad: 4, unidadMedida: "kilogramos", costoUnitario: 500, importe: 2000}
        ]
      },
    ],
    remitosProveedor: [
      {
        id: 1,
        tipoFactura: "B",
        fecha: "27/05/2022",
        hora: "11:00",
        nroFactura: "001/2022",
        montoTotal: 14876, 
        condicionVenta: "contado efectivo",
        observaciones: "",
        productos: [
          { materiaPrima: null, producto: "Vino Benjamin", cantidad: 10, unidadMedida: "unidades", costoUnitario: 718, importe: 7180},
          { materiaPrima: "Muzarella", producto: null, cantidad: 5, unidadMedida: "kilogramos", costoUnitario: 1000, importe: 5000},
          { materiaPrima: "Brocoli x kg", producto: null, cantidad: "4", unidadMedida: "kilogramos", costoUnitario: 674, importe: 2696}
        ]
      },
      {
        id: 2,
        tipoFactura: "A",
        fecha: "18/07/2022",
        hora: "16:00",
        nroFactura: "002/2022",
        montoTotal: 10350, 
        condicionVenta: "contado efectivo",
        observaciones: "",
        productos: [
          { materiaPrima: "Muzarella", producto: null, cantidad: 5, unidadMedida: "kilogramos", costoUnitario: 1000, importe: 5000},
          { materiaPrima: null, producto: "Pickles 220g", cantidad: 5, unidadMedida: "unidades", costoUnitario: 250, importe: 1250},
          { materiaPrima: "Morcilla x kg", producto: null, cantidad: 3, unidadMedida: "kilogramos", costoUnitario: 700, importe: 2100},
        ]
      },
      {
        remito: 3,
        tipoFactura: "B",
        fecha: "19/08/2022",
        hora: "10:00",
        nroFactura: "003/2022",
        montoTotal: 12680, 
        condicionVenta: "contado efectivo",
        observaciones: "",
        productos: [
          { materiaPrima: null, producto: "Aceite de Oliva 250ml", cantidad: 6, unidadMedida: "unidades", costoUnitario: 530, importe: 3180},
          { materiaPrima: "Morcilla x kg", producto: null, cantidad: 3, unidadMedida: "kilogramos", costoUnitario: 700, importe: 2100},
          { materiaPrima: "Jamon Crudo", producto: null, cantidad: 1.5, unidadMedida: "kilogramos", costoUnitario: 3600, importe: 5400},
          { materiaPrima: "Cebolla x kg", producto: null, cantidad: 4, unidadMedida: "kilogramos", costoUnitario: 500, importe: 2000}
        ]
      },
    ],
  };
  