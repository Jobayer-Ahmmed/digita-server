import express from "express"
import EnrollCollection from "../../../models/Enrollment.js"

const router = express.Router()

router.get("/course/enrollment", async(req, res)=>{
    const result = await EnrollCollection.find()
    res.send(result)
})

export default router