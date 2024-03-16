import express from "express";
import UserCollection from "../../../models/User.js";

const router = express.Router();

router.get("/user/:id", async (req, res) => {
    try {
        const ref_id = req.params.id;
        const query = { ref_id };
        const projection = { ref_id: 1, _id: 0 };
        const result = await UserCollection.findOne(query, projection);
        
        if (result) {
            
            res.send(result.ref_id);
        } else {
            res.status(404).send("User not found");
        }
    } catch (error) {
        console.error("Error retrieving user:", error);
        res.status(500).send("Error retrieving user");
    }
});

export default router;
