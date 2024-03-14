import expres, { query } from "express"
import EventCollection from "../../../models/Event.js"



var router = expres.Router()
router.delete("/event/:id", async(req, res)=>{
    const getId = req.params.id   
    const result = await EventCollection.findByIdAndDelete(getId)
    res.send(result)

})

export default router