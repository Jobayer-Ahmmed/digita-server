import express from "express";
import EnrollCollection from "../../../../models/Enrollment.js";

const router = express.Router();

router.get("/admin/dashboard/enrollment/month", async (req, res) => {
  try {
    const today = new Date();
    const startDate = new Date();
    startDate.setDate(today.getDate() - 30);
    const result = await EnrollCollection.find({
      createdAt: {
        $gte: startDate,
        $lt: today,
      },
    })
    res.send(result);
  } catch (err) {
    console.log("Error in enrollmentMonthGetRoute:", err);
    res.status(500).send("Error in enrollmentMonthGetRoute: " + err);
  }
});

export default router;






