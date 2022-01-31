// 1. IMPORTACIONES
const express           = require("express")
const res = require("express/lib/response")
const router            = express.Router()


// 2. RUTEO
router.get("/", (req, res) => {
    res.send("Hola mundo")
})




// 3. EXPORTACIONES
module.exports = router
