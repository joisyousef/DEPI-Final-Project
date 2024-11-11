const {
  Appointment,
  handleAppointmentValidation,
} = require("../models/appointment");
const { Doctor } = require("../models/doctor");

const upload = require("./image_uploader");
const express = require("express");
const router = express.Router();

/**************************************************************************************************/
// Render add appoitment form
router.get("/new", async (req, res) => {
  const doctors = await Doctor.find();

  res.render("add_appointment", {
    errors: [],
    appointment: {},
    doctors: doctors,
  });
});

router.get("/:id/edit", async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    const doctors = await Doctor.find();
    const doctor = await Doctor.findById(appointment.DoctorName); // Fetch doctor details
    const selectedDoc = doctor ? doctor.name : null; // Get the doctor's name
    
    console.log(selectedDoc)

    if (!appointment) {
      return res.status(404).send("Appointment not found");
    }

    // Pass appointment data, doctors, and the selected doctor to the template
    res.render("edit_appointment", {
      errors: [],
      appointment,
      doctors,
      selectedDoc,
    });
  } catch (err) {
    res
      .status(500)
      .send("An error occurred while fetching appointment or doctors");
  }
});

/**************************************************************************************************/
// Get all appointments
router.get("/", async (req, res) => {
  try {
    const appointment = await Appointment.find()
      .sort("name")
      .populate("DoctorName", "name"); // Ensure the 'name' field of the doctor is populated

    res.render("appointment", { appointment });
  } catch (err) {
    console.error("Error fetching appointments:", err);
    res.status(500).send("Server error");
  }
});

/**************************************************************************************************/
// Get appointment by ID
router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  const appointment = await Appointment.findById(req.params.id);

  if (!appointment) {
    return res.status(404).send("the course is not available");
  }
  // res.send(course);
  res.render("view_appointment", { appointment });
});

/**************************************************************************************************/
// Adding appointment
router.post("/", async (req, res) => {
  console.log(req.body);
 
  try {
    const { error } = handleAppointmentValidation(req.body);

    if (error) {

      const errorMessages = error.details.map((err) => err.message);
      return res
        .status(400)
        .render("add_appointment", {
          errors: errorMessages,
          appointment: req.body,
        });
    }

    const doctor = await Doctor.findOne({
      name: req.body.DoctorName,
      department: req.body.department,
    });

    if (!doctor) {
      return response.status(404).send({ message: "Doctor not found" });
    }

    let appontment = new Appointment({
      name: req.body.name,
      department: req.body.department,
      phoneNumber: req.body.phoneNumber,
      date: req.body.date,
      isPublished: req.body.isPublished,
      DoctorName: doctor._id,
    });

    if (doctor) {
      doctor.appointments.push(appontment._id);
      await doctor.save();
    }

    appontment = await appontment.save();
    res.status(201).redirect("/appointment");
  } catch (error) {
    if (error.code === 11000) {
      console.log("work");
      return res
        .status(400)
        .render("add_appointment", {
          errors: ["the docotr already taken"],
          appointment: req.body,
        });
    }

    res.status(500).send("An error occurred");
  }
});

/**************************************************************************************************/
// // Updating doctor
router.put("/:id", async (req, res) => {
  try {
  

    // Validate the appointment

console.log("down")
    const doctor = await Doctor.findOne({
      name: req.body.DoctorName,
      department: req.body.department,
    });

    if (!doctor) {
      return res.status(404).send({ message: "Doctor not found" });
    }

    let appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res
        .status(404)
        .send("The appointment with the given ID was not found");
    }

    console.log("yyyyy");
    // Prepare the updated data
    const updatedData = {
      name: req.body.name,
      department: req.body.department,
      phoneNumber: req.body.phoneNumber,
      date: req.body.date,
      isPublished: req.body.isPublished,
      DoctorName: doctor._id,
    };
    console.log("2yyyyy");

    // Update the appointment in the database
    appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );
    res.status(200).send(appointment);

  } catch (err) {
    // Log the error and send a server error response
    console.error("Error updating appointment:", err);
    res.status(500).send({ message: "Server error" });
  }
});


/**************************************************************************************************/
// Deleting course
router.delete("/:id", async (req, res) => {
  try {
    const appontment = await Appointment.findByIdAndDelete(req.params.id);
    if (!appontment) {
      return res.status(404).send("The course is not available");
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send("An error occurred during deletion");
  }
});

module.exports = router;
