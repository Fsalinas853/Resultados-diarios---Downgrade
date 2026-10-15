// ============================================================
//  DATOS DEL DASHBOARD  (este es el único archivo que cambia cada día)
//  - Cada día se agrega un "snapshot" nuevo dentro de "snapshots".
//  - El dashboard compara automáticamente contra el snapshot anterior.
// ============================================================
window.DATA = {
  config: {
    objPorDia: 10,        // objetivo nominal de contactos efectivos por asesor y por día hábil
    diasHabilesMes: 22    // días hábiles totales del mes (para calcular "Proyectado")
  },
  snapshots: [
    {
      fecha: "2026-10-08",
      diasHabiles: 6,     // días hábiles transcurridos del mes a esa fecha
      asesores: [
        { nombre: "Florencia Wehner",  lider: "Fausto", leads: 190, atacados: 113, contactados: 24, convertidos: 1, negociacion: 6, pendiente: 7,  rechazado: 12, potenciados: 0 },
        { nombre: "Milagros Grimaldi", lider: "Fausto", leads: 190, atacados: 190, contactados: 13, convertidos: 0, negociacion: 0, pendiente: 11, rechazado: 3,  potenciados: 0 },
        { nombre: "Stefania Roa",      lider: "Fausto", leads: 190, atacados: 190, contactados: 17, convertidos: 0, negociacion: 2, pendiente: 16, rechazado: 2,  potenciados: 0 },
        { nombre: "Nahir Apud",        lider: "Fausto", leads: 190, atacados: 189, contactados: 21, convertidos: 0, negociacion: 2, pendiente: 18, rechazado: 1,  potenciados: 0 },
        { nombre: "Soledad Toro",      lider: "Fausto", leads: 191, atacados: 191, contactados: 37, convertidos: 0, negociacion: 3, pendiente: 27, rechazado: 7,  potenciados: 0 },
        { nombre: "Abigail Barroso",   lider: "Fausto", leads: 190, atacados: 190, contactados: 29, convertidos: 0, negociacion: 2, pendiente: 24, rechazado: 3,  potenciados: 0 }
      ]
    },
    {
      fecha: "2026-10-09",
      diasHabiles: 7,
      asesores: [
        { nombre: "Soledad Toro",      lider: "Fausto", leads: 192, atacados: 191, contactados: 44, convertidos: 1, negociacion: 3, pendiente: 31, rechazado: 9,  potenciados: 0 },
        { nombre: "Abigail Barroso",   lider: "Fausto", leads: 192, atacados: 190, contactados: 31, convertidos: 1, negociacion: 1, pendiente: 26, rechazado: 3,  potenciados: 0 },
        { nombre: "Nahir Apud",        lider: "Fausto", leads: 191, atacados: 189, contactados: 26, convertidos: 0, negociacion: 2, pendiente: 22, rechazado: 2,  potenciados: 0 },
        { nombre: "Florencia Wehner",  lider: "Fausto", leads: 190, atacados: 116, contactados: 24, convertidos: 1, negociacion: 6, pendiente: 7,  rechazado: 12, potenciados: 0 },
        { nombre: "Stefania Roa",      lider: "Fausto", leads: 191, atacados: 190, contactados: 20, convertidos: 0, negociacion: 2, pendiente: 19, rechazado: 2,  potenciados: 0 },
        { nombre: "Milagros Grimaldi", lider: "Fausto", leads: 190, atacados: 190, contactados: 13, convertidos: 0, negociacion: 0, pendiente: 11, rechazado: 3,  potenciados: 0 }
      ]
    },
    {
      fecha: "2026-10-13",
      diasHabiles: 9,
      asesores: [
        { nombre: "Soledad Toro",      lider: "Fausto", leads: 192, atacados: 191, contactados: 59, convertidos: 2, negociacion: 5, pendiente: 39, rechazado: 13, potenciados: 0 },
        { nombre: "Abigail Barroso",   lider: "Fausto", leads: 192, atacados: 192, contactados: 46, convertidos: 1, negociacion: 3, pendiente: 38, rechazado: 4,  potenciados: 1 },
        { nombre: "Nahir Apud",        lider: "Fausto", leads: 191, atacados: 189, contactados: 28, convertidos: 0, negociacion: 2, pendiente: 22, rechazado: 4,  potenciados: 0 },
        { nombre: "Florencia Wehner",  lider: "Fausto", leads: 190, atacados: 129, contactados: 27, convertidos: 2, negociacion: 7, pendiente: 6,  rechazado: 14, potenciados: 0 },
        { nombre: "Milagros Grimaldi", lider: "Fausto", leads: 190, atacados: 190, contactados: 26, convertidos: 0, negociacion: 7, pendiente: 16, rechazado: 4,  potenciados: 0 },
        { nombre: "Stefania Roa",      lider: "Fausto", leads: 191, atacados: 190, contactados: 24, convertidos: 0, negociacion: 2, pendiente: 23, rechazado: 2,  potenciados: 0 }
      ]
    },
    {
      fecha: "2026-10-14",
      diasHabiles: 10,
      asesores: [
        { nombre: "Soledad Toro",      lider: "Fausto", leads: 192, atacados: 191, contactados: 69, convertidos: 3, negociacion: 4,  pendiente: 43, rechazado: 19, potenciados: 0 },
        { nombre: "Florencia Wehner",  lider: "Fausto", leads: 190, atacados: 146, contactados: 40, convertidos: 2, negociacion: 12, pendiente: 10, rechazado: 17, potenciados: 0 },
        { nombre: "Abigail Barroso",   lider: "Fausto", leads: 192, atacados: 192, contactados: 58, convertidos: 2, negociacion: 3,  pendiente: 47, rechazado: 6,  potenciados: 1 },
        { nombre: "Milagros Grimaldi", lider: "Fausto", leads: 190, atacados: 190, contactados: 34, convertidos: 1, negociacion: 4,  pendiente: 24, rechazado: 6,  potenciados: 0 },
        { nombre: "Stefania Roa",      lider: "Fausto", leads: 191, atacados: 190, contactados: 27, convertidos: 0, negociacion: 2,  pendiente: 25, rechazado: 3,  potenciados: 0 },
        { nombre: "Nahir Apud",        lider: "Fausto", leads: 191, atacados: 189, contactados: 32, convertidos: 0, negociacion: 3,  pendiente: 24, rechazado: 5,  potenciados: 0 }
      ]
    }
  ]
};
