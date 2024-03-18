import express from "express";
import EnrollCollection from "../../../../models/Enrollment.js";

const router = express.Router();

router.get("/admin/dashboard/enrollment/year", async (req, res) => {
  try {
    const today = new Date();
    const startDate = new Date();
    startDate.setDate(today.getDate() - 365);
    const result = await EnrollCollection.find({
      createdAt: {
        $gte: startDate,
        $lt: today,
      },
    })
    res.send(result);
  } catch (err) {
    console.log("Error in enrollmentWeekGetRoute:", err);
    res.status(500).send("Error in enrollmentWeekGetRoute: " + err);
  }
});

export default router;






