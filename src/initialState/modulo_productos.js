export default {
    rubros: [
      {
        id: 1,
        descripcion: "Comidas",
      },
      {
        id: 2,
        descripcion: "Bebidas",
      },
      {
        id: 3,
        descripcion: "Envasados"
      }
    ],
    marcas: [ 
      {
        id: 1,
        nombre: "Trapiche",
      },
      {
        id: 2,
        nombre: "Cocinero",
      },
      {
        id: 3,
        nombre: "Don Silvestre"
      }
    ],
    productos: [
      {
        id: 1,
        descripcion: "Empanada de Roquefort y Jamon",
        rubro: "Comidas",
        marca: null,
        proveedor: null,
        receta: 1,
        tipoIva: "4%", 
        stock: 20,
        stockMinimo: 10,
        precioVenta: 150,
        precioCosto: null,
        
      },
      {
        id: 2,
        descripcion: "Vino Tinto Malbec",
        rubro: "Bebidas",
        marca: "Trapiche",
        proveedor: "Codeana S.A",
        receta: null,
        tipoIva: "21%", 
        stock: 5,
        stockMinimo: 2,
        precioVenta: 1200,
        precioCosto: 700,
      },
      {
        id: 3,
        descripcion: "Aceite de Oliva 250ml",
        rubro: "Envasados",
        marca: "Cocinero",
        proveedor: "Distribuidora Pepe",
        receta: null,
        tipoIva: "4%", 
        stock: 7,
        stockMinimo: 5,
        precioVenta: 500,
        precioCosto: 300,
      },
    ],
    recetas: [
      {
        id: 1,
        producto: 1,
        descripcion: "Empanada de Roquefort y Jamon",
        tiempoElaboracion: "35 min",
        cantidadProducto: 12,
        unidadMedida: "unidades",
        materiaPrima: [
          {nombre: "Muzzarella", cantidad: 100, unidadMedida: "gramos"},
          {nombre: "Jamon Cocido", cantidad: 150, unidadMedida: "gramos"},
          {nombre: "Queso Roquefort", cantidad: 200, unidadMedida: "gramos"}
        ],
      },
      {
        id: 2,
        producto: 5,
        descripcion: "Canastita de Caprese",
        tiempoElaboracion: "30 min",
        cantidadProducto: 12,
        unidadMedida: "unidades",
        materiaPrima: [
          {nombre: "Muzzarella", cantidad: 150, unidadMedida: "gramos"},
          {nombre: "Queso Rallado", cantidad: 150, unidadMedida: "gramos"},
          {nombre: "Queso Por Salut", cantidad: 150, unidadMedida: "gramos"},
          {nombre: "Tomate", cantidad: 300, unidadMedida: "gramos"},
          {nombre: "Albhaca Fresca", cantidad: 1, unidadMedida: "unidades"}
        ], 
      },
      {
        id: 3,
        producto: 8,
        descripcion: "Empanada de Carne",
        tiempoElaboracion: "40 min",
        cantidadProducto: 12,
        unidadMedida: "unidades",
        materiaPrima: [
          {nombre: "Carne Picada", cantidad: 500, unidadMedida: "gramos"},
          {nombre: "Cebolla", cantidad: 2, unidadMedida: "unidades"},
          {nombre: "Dientes de Ajo", cantidad: 2, unidadMedida: "unidades"},
          {nombre: "Tomate", cantidad: 1, unidadMedida: "unidades"},
          {nombre: "Albhaca Fresca", cantidad: 1, unidadMedida: "unidades"},
          {nombre: "Puré de Tomate", cantidad: 2, unidadMedida: "cucharadas"},
          {nombre: "Aceitunas", cantidad: 5, unidadMedida: "unidades"}
        ], 
      },
      
    ],
  };