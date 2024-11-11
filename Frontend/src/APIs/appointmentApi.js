// src/api/appointmentApi.js
import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

// Function to create an appointment
export const createAppointment = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/appointment`, formData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
