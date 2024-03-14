import expres, { query } from "express"
import CourseCollection from "../../../models/Course.js"


var router = expres.Router()
router.delete("/course/:id", async(req, res)=>{
    const getId = req.params.id   
    const result = await CourseCollection.findByIdAndDelete(getId)
    res.send(result)

})

export default router