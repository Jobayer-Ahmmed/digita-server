import express from "express"
import CourseCollection from "../../../../models/Course.js"

const router = express.Router()

router.post("/course", async(req, res)=>{
    const data = req.body
    const sentData = new CourseCollection(data)
    const result = await sentData.save()
    res.send(result)
})
export default router