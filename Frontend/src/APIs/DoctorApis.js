import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchDoctors = createAsyncThunk('Doctors/fetchDoctors', async () => {
    const response = await axios.get(`http://localhost:5000/api/doctor`);
    return response.data;
  });