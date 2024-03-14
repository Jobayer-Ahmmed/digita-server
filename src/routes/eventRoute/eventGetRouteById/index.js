import expres from "express"
import EventCollection from "../../../models/Event.js"

var router = expres.Router()

router.get("/admin/dashboard/event/:id", async(req, res)=>{
    const getId = req.params.id
    const result = await EventCollection.findById(getId)
    res.send(result)
})

export default router