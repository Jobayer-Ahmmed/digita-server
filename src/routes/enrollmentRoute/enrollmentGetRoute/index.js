import express from "express"
import EventCollection from "../../../models/Event.js"


const router = express.Router()

router.get("/admin/dashboard/event", async(req, res)=>{
    const result = await EventCollection.find()
    res.send(result)
})

export default router