import expres from "express"
import CourseCollection from "../../../models/Course.js"


var router = expres.Router()

router.get("/admin/dashboard/course/:id", async(req, res)=>{
    const getId = req.params.id
    const result = await CourseCollection.findById(getId)
    res.send(result)
})

export default router