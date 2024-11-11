const Joi = require("joi");
const mongoose = require("mongoose");
const validDepartments = ["Cardiology", "Neurology", "Pediatrics", "Oncology"];

const AppontmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 225,
  },
  department: {
    type: String,  // Single string value,
    enum: validDepartments,  // Restrict to the valid options
    required: [true, "A course must have a department"],
    message: "Department must be one of the following: Cardiology, Neurology, Pediatrics, Oncology.",
  },
  phoneNumber: {
    type: String,  // Use String to handle phone numbers
    required: [true, "A phone number is required"],
    validate: {
      validator: function (v) {
        // Regex for basic phone number validation (supports country codes)
        return /^\+?[1-9]\d{1,14}$/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`,
    },
  },
  date: {
    type: Date,
    required: [true, "A date is required"],
    default: Date.now,
  },



  isPublished: {
    type: Boolean,
   
  },DoctorName:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Doctor'
  }


  
});

// Create a compound index to enforce uniqueness of doctor and appointment date
AppontmentSchema.index({ DoctorName: 1, date: 1 }, { unique: true });

const Appointment = mongoose.model("Appointment", AppontmentSchema);
/**************************************************************************************************/
function handleAppointmentValidation(Appointment) {
  const validDepartments = ["Cardiology", "Neurology", "Pediatrics", "Oncology"];

  const schema = Joi.object({
    name: Joi.string().min(5).max(225).required(),  // Match the Mongoose schema rules
    department: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    date: Joi.date().required(),
    DoctorName:Joi.required()

  });

  return schema.validate(Appointment, { abortEarly: false });
}



exports.Appointment = Appointment;
exports.handleAppointmentValidation = handleAppointmentValidation;
