import express from "express"
import UserCollection from "../../../models/User.js"


const router = express.Router()

router.post("/user", async(req, res)=>{
    const data = req.body
    const sentData = new UserCollection(data)
    const result = await sentData.save()
    res.send(result)
})
export default router