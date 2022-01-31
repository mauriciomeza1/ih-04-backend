// 1. IMPORTACIONES

/**
 *PATRONES DE DISEÑO 
  SON PROPUESTAS Y CASOS DE USO DIARIO QUE PERMITEN RESOLVER PROBLEMAS COTIDIANOS
  * 1. MODULE PATTERN - PATRÓN MODULAR
  *
  * APLICA VALIDES DE IMPORTACIONES Y EXPORTACIONES EN UN PROYECTO
  * 
  * 
  * IMPORTAR - PROCESO DE TRAERNOS FUNCIONES O VARIABLES DE OTROS ARCHIVOS JS A ESTE 
*/


// A. ARCHIVOS EXTERNOS PROPRIOS

// const suma = require("./suma")

//const resta = require("./resta")

// B. ARCHIVOS DE NODE_MODULES
// EXPRESS ES UNA LIBRERIA QUE FUNCIONA PARA LA GESTIÓN DE RUTEOS Y MIDDLEWARES
const express = require("express")
const app     = express()           //GENERAR INSTANCIA DE APP

// 2. MIDDLEWARES


// 3. RUTAS 
app.use("/",require("./routes/index"))


// 4. SERVIDOR
app.listen(3005, () => {
    console.log("Servidor activo")
})    //PUERTO (POR DONDE EL CLIENTE VA A ACCEDER AL SERVIDOR), CALLBACK