import { useEffect, useRef, useState } from "react";

import { motion } from 'framer-motion'
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctors } from "../../APIs/DoctorApis";

const Doctor = ({isVisible}) => {

  const dispatch = useDispatch();
  const { doctors } = useSelector((state) => state.doctors);

  useEffect(()=>{
      // Dispatch action to fetch doctors
      dispatch(fetchDoctors());
  },[dispatch])



  return (
<div className="docs">
      {doctors.slice(0, 4).map((doctor, index) => (
        <motion.div
          className="col"
          key={doctor.id}
          initial={{ opacity: 0, y: 20 }}
          animate={ isVisible? {opacity: 1, y: 0 }:{} }
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <img src={`http://localhost:5000/${doctor.img}`} alt={doctor.name} />
          <div className="mid first">
            <strong>dr.{doctor.name}</strong>
            <span>{doctor.department}</span>
          </div>
          <div className="bottom">
            <strong>phone: <span>{doctor.phoneNumber}</span></strong>
            <strong>phone: <span>658 222 127 964</span></strong>
          </div>
        </motion.div>
      ))}
    </div>
 
  )
}

export default Doctor