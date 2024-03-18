import express from "express";
import UserCollection from "../../../models/User.js";

var router = express.Router();

router.get("/user", async (req, res) => {
    try {
        const count = await UserCollection.find().estimatedDocumentCount()
        res.send({count})
    } catch (error) {
        console.error("Error retrieving user:", error);
        res.status(500).send("Error retrieving user");
    }
});

export default router;
