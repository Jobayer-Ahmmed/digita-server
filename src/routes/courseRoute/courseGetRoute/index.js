import express from "express"
import CourseCollection from "../../../models/Course.js"

const router = express.Router()

router.get("/admin/dashboard/course", async(req, res)=>{
    const result = await CourseCollection.find()
    res.send(result)
})

export default router