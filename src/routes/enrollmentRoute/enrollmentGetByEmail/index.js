import express from "express"
import EnrollCollection from "../../../models/Enrollment.js"

const router = express.Router()

router.get("/course/enrollment/:email", async(req, res)=>{
    try{
        const email = req.params.email
        const query = {email}
        const projection = { course_name: 1, _id: 0 } 
        const result = await EnrollCollection.find(query, projection)
        if(result)
        res.send(result)
        else{
            console.log("enrollmentGetByEmail")
            res.status(404).send("enrollmentGetByEmail");
        }        
    }catch(err){
        console.log("error in enrollmentGetByEmail: ", err)
        res.status(500).send("error in enrollmentGetByEmail: ", err);
    }


})

export default router