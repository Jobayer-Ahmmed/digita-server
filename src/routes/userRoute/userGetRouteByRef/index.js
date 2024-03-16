import expres from "express"
import UserCollection from "../../../models/User.js"

var router = expres.Router()

router.get("/user/:id", async(req, res)=>{
    const ref_id = req.params.id
    const query = {ref_id}
    const result = await UserCollection.find(query)
    res.send(result)
})

export default router