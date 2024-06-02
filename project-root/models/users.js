let datos = {
  users: [
    {
      id: 1,
      nombre: "Juan",
      cuentas: [
        {
          id: 1,
          tipo: "ahorro",
          balance: 1000,
          tasa_interes: 0.02,
          fecha_proximo_pago: "2024-06-01",
        },
        {
          id: 2,
          tipo: "prestamo",
          balance: -5000,
          tasa_interes: 0.05,
          fecha_proximo_pago: "2024-06-15",
        },
      ],
      cooperativas: [
        {
          id: 1,
          nombre: "Cooperativa de Vivienda",
          Tipo: "Vivienda",
          credito: 1645,
        },
      ],
    },
    {
      id: 2,
      nombre: "María",
      cuentas: [
        {
          id: 3,
          tipo: "ahorro",
          balance: 1500,
          tasa_interes: 0.03,
          fecha_proximo_pago: "2024-06-05",
        },
      ],
      cooperativas: [
        {
          id: 2,
          nombre: "Cooperativa de Seguro",
          Tipo: "Seguro",
          credito: 2500,
        },
      ],
    },
    {
      id: 3,
      nombre: "Pedro",
      cuentas: [
        {
          id: 4,
          tipo: "ahorro",
          balance: 2000,
          tasa_interes: 0.025,
          fecha_proximo_pago: "2024-06-10",
        },
      ],
      cooperativas: [
        {
          id: 4,
          nombre: "Cooperativa de automovil",
          Tipo: "Autocredito de automovil",
          credito: 1000,
        },
      ],
    },
    {
      id: 4,
      nombre: "Ana",
      cuentas: [
        {
          id: 5,
          tipo: "prestamo",
          balance: -3000,
          tasa_interes: 0.04,
          fecha_proximo_pago: "2024-06-20",
        },
        {
          id: 6,
          tipo: "ahorro",
          balance: 3000,
          tasa_interes: 0.03,
          fecha_proximo_pago: "2024-06-25",
        },
      ],
      cooperativas: [
        {
          id: 3,
          nombre: "Cooperativa de automovil",
          Tipo: "Autocredito de automovil",
          credito: 1000,
        },
      ],
    },
    {
      id: 5,
      nombre: "Luis",
      cuentas: [
        {
          id: 6,
          tipo: "ahorro",
          balance: 3000,
          tasa_interes: 0.03,
          fecha_proximo_pago: "2024-06-25",
        },
      ],
      cooperativas: [
        {
          id: 2,
          nombre: "Cooperativa de vivienda",
          Tipo: "Vivienda",
          credito: 5000,
        },
      ],
    },
  ],
  cooperativas: [
    {
      id: 1,
      nombre: "Cooperativa 1",
      usuarios: [1, 3],
    },
    {
      id: 2,
      nombre: "Cooperativa 2",
      usuarios: [2, 5],
    },
    {
      id: 3,
      nombre: "Cooperativa 3",
      usuarios: [4],
    },
  ],
  cuentas: [
    {
      id: 1,
      tipo: "ahorro",
      balance: 1000,
      tasa_interes: 0.02,
      fecha_proximo_pago: "2024-06-01",
    },
    {
      id: 2,
      tipo: "prestamo",
      balance: -5000,
      tasa_interes: 0.05,
      fecha_proximo_pago: "2024-06-15",
    },
    {
      id: 3,
      tipo: "ahorro",
      balance: 1500,
      tasa_interes: 0.03,
      fecha_proximo_pago: "2024-06-05",
    },
    {
      id: 4,
      tipo: "ahorro",
      balance: 2000,
      tasa_interes: 0.025,
      fecha_proximo_pago: "2024-06-10",
    },
    {
      id: 5,
      tipo: "prestamo",
      balance: -3000,
      tasa_interes: 0.04,
      fecha_proximo_pago: "2024-06-20",
    },
    {
      id: 6,
      tipo: "ahorro",
      balance: 3000,
      tasa_interes: 0.03,
      fecha_proximo_pago: "2024-06-25",
    },
  ],
};

module.exports.datos = datos;
