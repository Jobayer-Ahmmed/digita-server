import expres from "express"
import UserCollection from "../../../models/User.js"

var router = expres.Router()

router.get("/user/email/:email", async(req, res)=>{
    const email = req.params.email
    const query = {email}
    const result2 = await UserCollection.find(query)
    const result = result2[0].ref_id
    res.send(result)
})

export default router