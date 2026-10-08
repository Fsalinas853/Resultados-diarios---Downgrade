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
    }
  ]
};
