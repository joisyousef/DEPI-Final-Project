import { configureStore } from "@reduxjs/toolkit";
import doctorSlice from "../reducers/doctorSlice";
export default configureStore({
  reducer: {
    doctors: doctorSlice,
  },
});
