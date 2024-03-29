import express from "express";
import EnrollCollection from "../../../models/Enrollment.js";

const router = express.Router();

router.get("/admin/dashboard/enrollment", async (req, res) => {
    try {
        const page = parseInt(req.query.page) -1
        const size = parseInt(req.query.size)

        const result =await EnrollCollection.find().skip(page*size).limit(size)
        res.send(result)

    } catch (err) {
        console.log("Error in enrollmentGetRoute:", err);
        res.status(500).send("Error in enrollmentGetRoute: " + err); 
    }
});

export default router;
