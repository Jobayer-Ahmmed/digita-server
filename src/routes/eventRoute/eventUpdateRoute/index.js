import expres, { query } from "express"
import EventCollection from "../../../models/Event.js"

var router = expres.Router()
router.put("/admin/dashboard/event/:id", async(req, res)=>{
    const getId = req.params.id
    const data = req.body
    const query = {_id:getId}
    const result = await EventCollection.findOneAndUpdate(query, {
        $set : data
    })
    res.send(result)
})

export default router