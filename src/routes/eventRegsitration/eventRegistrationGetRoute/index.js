
import express from "express"
import EventRegistrationCollection from "../../../models/EventRegistraion.js"

const router = express.Router()

router.get("/admin/dashboard/event-registration", async(req, res)=>{
    try{
        const page = parseInt(req.query.page)-1
        const size = parseInt(req.query.size)
        console.log(page, size)
        const result = await EventRegistrationCollection.find().skip(page*size).limit(size)
        res.send(result)
    } catch(err){
        console.log("Error in eventRegistraionGetRoute", err)
        res.status(500).send("Error in eventRegistraionGetRoute", err)
    }
})

export default router