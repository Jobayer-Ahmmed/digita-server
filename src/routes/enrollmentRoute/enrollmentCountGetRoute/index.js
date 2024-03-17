import express from "express";
import EnrollCollection from "../../../models/Enrollment.js";

const router = express.Router();

router.get("/admin/dashboard/enrollment/count", async (req, res) => {
    try {
        const count = await EnrollCollection.estimatedDocumentCount();
        res.send({ count });
    } catch (err) {
        console.error("Error in enrollmentCountGetRoute:", err);
        res.send("Error in enrollmentCountGetRoute");
    }
});

export default router;
