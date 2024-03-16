import express from "express"
import EventRegistrationCollection from "../../../models/EventRegistraion.js"


const router = express.Router()

router.get("/event/registration/:email", async(req, res)=>{
    try{
        const email = req.params.email
        const query = {email}
        const result = await EventRegistrationCollection.find(query)
        if(result)
        res.send(result)
        else{
            console.log("EventRegistrationGetRouteByEmail")
            res.status(404).send("EventRegistrationGetRouteByEmail");
        }        
    }catch(err){
        console.log("error in EventRegistrationGetRouteByEmail: ", err)
        res.status(500).send("error in EventRegistrationGetRouteByEmail: ", err);
    }


})

export default router