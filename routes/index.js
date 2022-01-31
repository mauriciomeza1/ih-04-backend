// 1. IMPORTACIONES
const express           = require("express")
const res = require("express/lib/response")
const router            = express.Router()


// 2. RUTEO
router.get("/", (req, res) => {
    res.send("Hola mundo")
})

router.get("/contacto", (req, res) => {
    res.send("Contacto")
})

router.get("/hello", (req, res) => {
    res.send("hello")
})

router.get("/sponge", (req, res) => {
    res.render("index")
})


// 3. EXPORTACIONES
module.exports = router

