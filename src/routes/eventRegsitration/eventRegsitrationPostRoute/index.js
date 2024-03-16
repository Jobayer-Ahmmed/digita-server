import express from "express"
import EventRegistrationCollection from "../../../models/EventRegistraion.js"

const router = express.Router()

router.post("/event/registration", async(req, res)=>{
    const data = req.body
    const sentData = new EventRegistrationCollection(data)
    const result = await sentData.save()
    res.send(result)
})
export default router