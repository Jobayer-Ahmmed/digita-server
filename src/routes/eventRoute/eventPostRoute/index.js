import express from "express"
import EventCollection from "../../../models/Event.js"



const router = express.Router()

router.post("/admin/dashboard/event", async(req, res)=>{
    const data = req.body
    const sentData = new EventCollection(data)
    const result = await sentData.save()
    res.send(result)
})
export default router