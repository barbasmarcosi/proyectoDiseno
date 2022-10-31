export default {
  pedidos: [
    {
      id: 1,
      cliente: "Carlos Zabala",
      delivery: "Pedro Ríos",
      encargado: "Marcos Ozamis",
      presupuesto: null,
      fechaPedido: "15/05/2022",
      horaPedido: "21:30",
      fechaEnvio: "15/05/2022",
      horaEnvio: "22:30",
      entregaDomicilio: true,
      costoEnvio: 200,
      razonSocialEntrega: "Juan Diaz",
      telefonoEntrega: "2392475869",
      calle: "Roca",
      altura: 855,
      depto: 1,
      tipoVenta: "minorista",
      estado: "en entrega",
      observaciones: "La casa tiene una reja negra.",
      montoTotal: 1380, 
      productos: [
        { producto: "Empanada de Carne", cantidad: 5, unidadMedida: "unidades", precioUnitario: 120, importe: 600 },
        { producto: "Canastita de Queso y Cebolla", cantidad: 3, unidadMedida: "unidades", precioUnitario: 100, importe: 300 },
        { producto: "Empanada de Hongos", cantidad: 4, unidadMedida: "unidades", precioUnitario: 125, importe: 480, }
      ],
    },
    {
      id: 2,
      cliente: "Hernan Botte",
      delivery: null,
      encargado: "Vero Carrizo",
      presupuesto: null,
      fechaPedido: "23/06/2022",
      horaPedido: "22:15",
      fechaEnvio: "24/06/2022",
      horaEnvio: "12:00",
      entregaDomicilio: false,
      costoEnvio: 0,
      razonSocialEntrega: "Hernan Botte", 
      telefonoEntrega: "2392789563",
      calle: "Rivadavia",
      altura: 285,
      depto: null,
      tipoVenta: "minorista",
      estado: "en proceso",
      observaciones: null,
      montoTotal: 2740, 
      productos: [
        { producto: "Vino Malbec Benjamin x 750", cantidad: 1, unidadMedida: "unidades", precioUnitario: 700, importe: 700 },
        { producto: "Empanada de Jamon y Queso", cantidad: 6, unidadMedida: "unidad",  precioUnitario: 100, importe: 600 },
        { producto: "Empanada de Carne", cantidad: 6, unidadMedida: "unidad",  precioUnitario: 120, importe: 720 },
        { producto: "Canastita de Pollo y Brocoli", cantidad: 6, unidadMedida: "unidad",  precioUnitario: 120, importe: 720 }
      ],
    },
    {
      id: 3,
      cliente: "Karina Gonzalez",
      delivery: null,
      encargado: "Marcos Ozamis",
      presupuesto: 2,
      fechaPedido: "04/07/2022",
      horaPedido: "13:00",
      fechaEnvio: "08/07/2022",
      horaEnvio: "10:00",
      entregaDomicilio: false,
      costoEnvio: 0,
      razonSocialEntrega: null,
      telefonoEntrega: null,
      calle: null,
      altura: null,
      depto: null,
      tipoVenta: "mayorista",
      estado: "lista para entrega",
      observaciones: "Pedido especial para cumpleaños. Envío a cargo del cliente.",
      montoTotal: 21160, 
      productos: [
        { producto: "Vino Malbec Benjamin x 750", cantidad: 10, unidadMedida: "unidades", precioUnitario: 700, importe: 7000 },
        { producto: "Empanada de Jamon y Queso", cantidad: 36, unidadMedida: "unidad",  precioUnitario: 110, importe: 3960 },
        { producto: "Empanada de Carne", cantidad: 36, unidadMedida: "unidad",  precioUnitario: 120, importe: 4320 },
        { producto: "Canastita de Pollo y Brocoli", cantidad: 12, unidadMedida: "unidad",  precioUnitario: 120, importe: 1440 },
        { producto: "Jamon y Roquefort", cantidad: 12, unidadMedida: "unidad",  precioUnitario: 150, importe: 1800 },
        { producto: "Canastita de Humita", cantidad: 24, unidadMedida: "unidad",  precioUnitario: 110, importe: 2640 }
      ],
    }
  ],
  presupuestos: [
    {
      id: 1,
      fechaEmision: "10/05/2020",
      horaEmision: "12:10",
      fechaEvento: "30/05/2020",
      horaEvento: "",
      validez: 10,
      cliente: "Juan Arias",
      subTotal: 10800,
      descuento: 1080,
      costoTotal: 9720, 
      observaciones: "",
      productos: [
        { producto: "Empanada de Carne", cantidad: 36, unidadMedida: "unidades" , precioUnitario: 120, importe: 4320 },
        { producto: "Empanada de Jamon y Queso", cantidad: 36, unidadMedida: "unidades" , precioUnitario: 100, importe: 3600 },
        { producto: "Canastita de Humita", cantidad: 24, unidadMedida: "unidades" , precioUnitario: 120, importe: 2880 },
      ]
    },
    {
      id: 2,
      fechaEmision: "04/06/2021",
      horaEmision: "12:10",
      fechaEvento: "04/07/2020",
      horaEvento: "",
      validez: 7,
      cliente: "Damian Gonzales",
      subTotal: 9280,
      descuento: 0,
      costoTotal: 9280,
      observaciones: "",
      productos: [
        {producto: "Empanada de Jamon y Queso", cantidad: 24, unidadMedida: "unidades", precioUnitario: 100, importe: 2400},
        {producto: "Empanada de Carne ", cantidad: 24, unidadMedida: "unidades", precioUnitario: 120, importe: 2880},
        {producto: "Vino Malbec Benjamin", cantidad: 5, unidadMedida: "unidades", precioUnitario: 800, importe: 4000}
      ]
    },
  ],
  reclamos: [
    {
      id: 1,
      fecha: "12/10/2018",
      pedidoCliente: 1,
      descripcion: "Faltaron dos empanadas de hongos",
    },
    {
      id: 2,
      fecha: "12/10/2020",
      pedidoCliente: 2,
      descripcion: "Las canastitas de brocoli llegaron frias",
    },
    {
      id: 3,
      fecha: "12/10/2020",
      pedidoCliente: 5,
      descripcion: "El cliente pidió empanadas de atun y no se le enviaron",
    },
  ],
  comprobantesVenta: [
    {
      id: 1,
      tipoFactura: "B",
      nroFactura: "001/2022",
      fecha: "15/05/2022",
      hora: "22:00",
      pedido: 1,
      montoTotal: 1380,
      observaciones: "",
      productos: [
        { producto: "Empanada de Carne", cantidad: 5, unidadMedida: "unidades", precioUnitario: 120, importe: 600 },
        { producto: "Canastita de Queso y Cebolla", cantidad: 3, unidadMedida: "unidades", precioUnitario: 100, importe: 300 },
        { producto: "Empanada de Hongos", cantidad: 4, unidadMedida: "unidades", precioUnitario: 125, importe: 480, }
      ]
    },
    {
      id: 2,
      tipoFactura: "A",
      nroFactura: "002/2022",
      fecha: "08/07/2022",
      hora: "10:05",
      pedido: 3,
      montoTotal: 21160,
      observaciones: "",
      productos: [
        { producto: "Vino Malbec Benjamin x 750", cantidad: 10, unidadMedida: "unidades", precioUnitario: 700, importe: 7000 },
        { producto: "Empanada de Jamon y Queso", cantidad: 36, unidadMedida: "unidad",  precioUnitario: 110, importe: 3960 },
        { producto: "Empanada de Carne", cantidad: 36, unidadMedida: "unidad",  precioUnitario: 120, importe: 4320 },
        { producto: "Canastita de Pollo y Brocoli", cantidad: 12, unidadMedida: "unidad",  precioUnitario: 120, importe: 1440 },
        { producto: "Jamon y Roquefort", cantidad: 12, unidadMedida: "unidad",  precioUnitario: 150, importe: 1800 },
        { producto: "Canastita de Humita", cantidad: 24, unidadMedida: "unidad",  precioUnitario: 110, importe: 2640 }
      ]
    },
    {
      id: 3,
      tipoFactura: "B",
      nroFactura: "003/2022",
      fecha: "05/10/2022",
      hora: "21:00",
      pedido: 5,
      montoTotal: 1380,
      observaciones: "",
      productos: [
        { producto: "Empanada de Carne", cantidad: 6, unidadMedida: "unidades", precioUnitario: 120, importe: 720 },
        { producto: "Empanada de Jamon y Queso", cantidad: 6, unidadMedida: "unidades", precioUnitario: 110, importe: 660, }
      ]
    },
  ],
  remitosEntrega: [
    {
      id: 1,
      fecha: "15/05/2022",
      hora: "22:00",
      pedido: 1,
      montoTotal: 1380,
      condicionVenta: 'contado efectivo',
      observaciones: '',
      productos: [
        { producto: "Empanada de Carne", cantidad: 5, unidadMedida: "unidades", precioUnitario: 120, importe: 600 },
        { producto: "Canastita de Queso y Cebolla", cantidad: 3, unidadMedida: "unidades", precioUnitario: 100, importe: 300 },
        { producto: "Empanada de Hongos", cantidad: 4, unidadMedida: "unidades", precioUnitario: 125, importe: 480, }
      ]
    },
    {
      id: 2,
      fecha: "08/07/2022",
      hora: "10:05",
      pedido: 3,
      montoTotal: 21160,
      condicionVenta: 'contado efectivo',
      observaciones: '',
      productos: [
        { producto: "Vino Malbec Benjamin x 750", cantidad: 10, unidadMedida: "unidades", precioUnitario: 700, importe: 7000 },
        { producto: "Empanada de Jamon y Queso", cantidad: 36, unidadMedida: "unidad",  precioUnitario: 110, importe: 3960 },
        { producto: "Empanada de Carne", cantidad: 36, unidadMedida: "unidad",  precioUnitario: 120, importe: 4320 },
        { producto: "Canastita de Pollo y Brocoli", cantidad: 12, unidadMedida: "unidad",  precioUnitario: 120, importe: 1440 },
        { producto: "Jamon y Roquefort", cantidad: 12, unidadMedida: "unidad",  precioUnitario: 150, importe: 1800 },
        { producto: "Canastita de Humita", cantidad: 24, unidadMedida: "unidad",  precioUnitario: 110, importe: 2640 }
      ]
    },
    {
      id: 3,
      fecha: "05/10/2022",
      hora: "21:00",
      pedido: 5,
      montoTotal: 1380,
      condicionVenta: 'contado efectivo',
      observaciones: '',
      productos: [
        { producto: "Empanada de Carne", cantidad: 6, unidadMedida: "unidades", precioUnitario: 120, importe: 720 },
        { producto: "Empanada de Jamon y Queso", cantidad: 6, unidadMedida: "unidades", precioUnitario: 110, importe: 660, }
      ]
    },
  ]
};
