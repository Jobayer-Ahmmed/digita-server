import express from "express"
import EnrollCollection from "../../../models/Enrollment.js"

const router = express.Router()

router.post("/course/enrollment", async(req, res)=>{
    const data = req.body
    const sentData = new EnrollCollection(data)
    const result = await sentData.save()
    res.send(result)
})
export default router