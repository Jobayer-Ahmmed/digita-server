import express from "express";
import EnrollCollection from "../../../models/Enrollment.js";

const router = express.Router();

router.get("/admin/dashboard/enrollment-total", async (req, res) => {
    try {
        const result =await EnrollCollection.find()
        res.send(result)

    } catch (err) {
        console.log("Error in enrollmentGetRoute:", err);
        res.status(500).send("Error in enrollmentGetRoute: " + err); 
    }
});

export default router;
