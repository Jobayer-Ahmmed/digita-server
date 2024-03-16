import express from "express"
import EnrollCollection from "../../../models/Enrollment.js"

const router = express.Router()

router.get("/course/enrollment/ref_id/:ref_id", async(req, res)=>{
    try{
        const ref_id = req.params.ref_id
        const query = {ref_id}
        const projection = { email: 1, _id: 0 } 
        const result = await EnrollCollection.find(query, projection)
        if(result)
        res.send(result)
        else{
            console.log("enrollmentGetByRef")
            res.status(404).send("enrollmentGetByRef");
        }        
    }catch(err){
        console.log("error in enrollmentGetByEmail: ", err)
        res.status(500).send("error in enrollmentGetByRef: ", err);
    }
})

export default router