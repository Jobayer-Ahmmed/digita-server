import express from "express";
import EnrollCollection from "../../../../models/Enrollment.js";

const router = express.Router();

router.get("/admin/dashboard/enrollment/today", async (req, res) => {
  try {

    const today = new Date();
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const endOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    
    const result = await EnrollCollection.find({
        createdAt: {
            $gte: startOfToday,
            $lt: endOfToday
        }
    })
    res.send(result);
  } catch (err) {
    console.log("Error in enrollmentGetRoute:", err);
    res.status(500).send("Error in enrollmentGetRoute: " + err);
  }
});

export default router;

