const express = require('express');
const { Appointment, handleAppointmentValidation } = require('../../models/appointment');
const { Doctor } = require('../../models/doctor');
const router = express.Router();

/**************************************************************************************************/
/*
  this API for connecting the client project so it will return json 
  not like the courses at this path:  \routes\courses.js  it returns html (ejs)

*/

router.post('/',async(req,res)=>{

    console.log(req.body)
 
  
    const { error } = handleAppointmentValidation(req.body);
    
    if (error) {
      console.log("777")
      const errorMessages = error.details.map((err) => err.message);
      // const authors = await Author.find();
      return res.status(400).render('add_appointment', { errors: errorMessages, appointment: req.body });
  
    }
  
    const doctor = await Doctor.findOne({name:req.body.DoctorName})
  
    if (!doctor) {
      return response.status(404).send({ message: "Doctor not found" });
    }
  
   
  
    let appontment = new Appointment({
      name: req.body.name,
      department: req.body.department,
      phoneNumber: req.body.phoneNumber,
      date: req.body.date,
      isPublished: req.body.isPublished,
      DoctorName:doctor._id,
  
    });
  
    if(doctor){
      doctor.appointments.push(appontment._id)
      await doctor.save();
    }
  
    try {
      appontment = await appontment.save();
   
    } catch (error) {
      res.status(500).send('An error occurred');
    }
  });


// Get all courses (API route for client-side JSON requests)
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find(); // Fetch courses from MongoDB
    res.status(200).json(appointments);  // Send JSON response
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});
/**************************************************************************************************/
// Get course by ID (API route for fetching a single course by its ID)
router.get('/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id); // Fetch course by ID from MongoDB
    if (!appointment) {
      return res.status(404).json({ error: 'Course not found' }); // Handle course not found
    }
    res.status(200).json(appointment);  // Send JSON response
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch course' });
  }
});
module.exports = router;
