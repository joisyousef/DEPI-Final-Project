import { createSlice } from '@reduxjs/toolkit';
import { fetchDoctors } from "../APIs/DoctorApis";

// Fetch courses from the API

const doctorSlice = createSlice({
  name: 'doctors',
  initialState: {
    doctors: [],
    status: 'idle',
    error: null,

  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctors.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.doctors = action.payload;
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })


  },
});

export default doctorSlice.reducer;

