const express = require('express');
const { Doctor,handleDoctorValidation } = require('../../models/doctor'); 

const router = express.Router();

// Get all doctors
router.get("/", async (req, res) => {
    try {
      const doctor = await Doctor.find()
        .sort("name")
        .populate("appointments", "date");
      res.status(200).json( doctor );
    } catch (err) {
      console.error("error fettching doctors", err);
      res.status(500).send("Server error");
    }

  });


  // Get doctor by ID
router.get("/:id", async (req, res) => {
    console.log(req.params.id);
    const doctor = await Doctor.findById(req.params.id);
  
    if (!doctor) {
      return res.status(404).send("the course is not available");
    }
    
    res.status(200).json(doctor);
  });

  module.exports = router;
  