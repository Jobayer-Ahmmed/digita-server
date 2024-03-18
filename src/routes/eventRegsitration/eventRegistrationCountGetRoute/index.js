import express from "express"
import EventRegistrationCollection from "../../../models/EventRegistraion.js"


const router = express.Router()

router.get("/admin/dashboard/event-registration/count", async(req, res)=>{
    try{

        const count = await EventRegistrationCollection.find().estimatedDocumentCount()
        res.send({count})      
    }catch(err){
        console.log("error in EventRegistrationCountGetRouteByEmail: ", err)
        res.status(500).send("error in EventRegistrationCountGetRouteByEmail: ", err);
    }


})

export default router