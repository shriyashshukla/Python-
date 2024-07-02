const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("user  List")
})
router.get("/new", (req, res) => {

    res.send("user  new")
})

router.post('/',(req,res)=> {
    res.send("user  created")
})

router
.route('/:id')
.get((req,res)=>{
    res.send(`Get the by Id ${req.params.id}`)
})
.put((req,res)=>{
    res.send(`Update the by Id ${req.params.id}`)
})
.delete((req,res)=>{
    res.send(`Delete the by Id ${req.params.id}`)
})



module.exports = router