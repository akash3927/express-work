const express = require("express");
require("../src/db/conn")

const MensData = require("../src/models/mens");
const router = require("../src/routers/men")
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(router);
//post request
// app.post("/mens", async(req,res) => {
//     try{
//         const addingMensData = new MensData(req.body)
//         console.log(req.body);
//         const insertMens = await addingMensData.save()
//         res.status(201).res.send(insertMens);
//     }catch(e){
//         res.status(400).res.send(e);
//     }
// })

// //to get the data
// app.get("/mens", async(req, res) =>{
//     try{
//         const getMens = await MensData.find({}).sort({"uid":1})
//         res.send(getMens);
//     }catch(e){
//         res.status(400).res.send(e);
//     }
// })
// //to update the data
// app.patch("/mens/:id", async(req, res) =>{
//     try{
//         const _id = req.params.id;
//         const getMens = await MensData.findByIdAndUpdate(_id,req.body)
//         res.send(getMens);
//     }catch(e){
//         res.status(500).res.send(e);
//     }
// })
// //to delete data
// app.delete("/mens/:id", async(req, res) =>{
//     try{
//         const getMens = await MensData.findByIdAndDelete(req.params.id)
//         res.send(getMens);
//     }catch(e){
//         res.status(500).res.send(e);
//     }
// })

app.listen(port, () =>{
    console.log(`connnection is ok ${port}`)
})