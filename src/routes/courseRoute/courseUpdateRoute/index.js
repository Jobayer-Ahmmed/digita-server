
import expres, { query } from "express"
import CourseCollection from "../../../models/Course.js"


var router = expres.Router()
router.put("/course/:id", async(req, res)=>{
    const getId = req.params.id
    const data = req.body
    const query = {_id:getId}
    const result = await CourseCollection.findOneAndUpdate(query, {
        $set : data
    })
    res.send(result)
})

export default router