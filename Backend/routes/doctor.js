const { Appointment } = require("../models/appointment");
const { Doctor, handleDoctorValidation } = require("../models/doctor");

const upload = require("./image_uploader");
const express = require("express");
const router = express.Router();

/**************************************************************************************************/
// Render add doctor form
router.get("/new", async (req, res) => {

  res.render("add_doctor", { errors: [], doctor: {} });
});

router.get("/:id/edit", async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);

    if (!doctor) {
      return res.status(404).send("doctor not found");
    }
    // Pass the doctor data to the edit form
    res.render("edit_doctor", { errors: [], doctor: doctor });
  } catch (err) {
    res.status(500).send("An error occurred while fetching doctor ");
  }
});

/**************************************************************************************************/
// Get all doctors
router.get("/", async (req, res) => {
  try {
    const doctor = await Doctor.find()
      .sort("name")
      .populate("appointments", "date");
    res.render("doctor", { doctor });
  } catch (err) {
    console.error("error fettching doctors", err);
    res.status(500).send("Server error");
  }

});

/**************************************************************************************************/
// Get doctor by ID
router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  const doctor = await Doctor.findById(req.params.id);

  if (!doctor) {
    return res.status(404).send("the doctor is not available");
  }

  res.render("view_doctor", { doctor });
});

/**************************************************************************************************/
// Adding doctor ,
router.post("/", upload.single("img"), async (req, res) => {
  console.log(req.doctor);

  const { error } = handleDoctorValidation(req.body);

  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    return res
      .status(400)
      .render("add_doctor", { errors: errorMessages, doctor: req.body });
  }


  if (!req.file) {
    console.log("not img");
    res.status(400).send("doct pic is required..");
  }

  const impPath = req.file.path.replace(/\\/g, "/"); // Normalize backslashes to forward slashes

  let doctor = new Doctor({
    name: req.body.name,
    department: req.body.department,
    phoneNumber: req.body.phoneNumber,
    date: req.body.date,
    isPublished: req.body.isPublished,
    img: impPath,
  });

  try {
    doctor = await doctor.save();
    res.status(201).redirect("/doctor");
  } catch (error) {
    res.status(500).send("An error occurred");
  }
});

/**************************************************************************************************/
// Updating doctor
router.put("/:id", upload.single('img'), async (req, res) => {

  // Validate the doctor
  const { error } = handleDoctorValidation(req.body);
  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).render('edit_doctor', { errors: errorMessages, doctor: req.body });
  }

  // Check if the doctor exists
  let doctor = await Doctor.findById(req.params.id);
  if (!doctor) return res.status(404).send('The doctor with the given ID was not found');

  // Prepare the updated data
  const updatedData = {
    name: req.body.name,
    department: req.body.department,
    phoneNumber: req.body.phoneNumber,
    date: req.body.date,
    isPublished: req.body.isPublished,
  };

  // Handle image upload
  if (req.file) {
    req.body.img = req.file.path.replace(/\\/g, '/');
    updatedData.img = req.body.img;
  }

  // Update the doctor in the database
  doctor = await Doctor.findByIdAndUpdate(req.params.id, updatedData, { new: true });

  // Update DoctorName and department in all related appointments
  await Appointment.updateMany(
    { DoctorName: doctor._id }, // Find all appointments with the old doctor's _id
    { 
      $set: { 
        DoctorName: doctor._id,   // Set the new doctor _id
        department: req.body.department // Set the new department
      } 
    }
  );

  res.status(200).send(doctor);
});



/**************************************************************************************************/
// Deleting doctor
router.delete("/:id", async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!doctor) {
      return res.status(404).send("The doctor is not available");
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send("An error occurred during deletion");
  }
});

module.exports = router;
