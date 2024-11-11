import React from 'react'
import { motion } from "framer-motion";

const Landing = () => {
  return (


    <motion.div
    className="landing"
    initial={{ opacity: 0 }} // Optional: To fade in the landing div
    animate={{ opacity: 1 }} // Optional: Fade in effect for the landing div
    transition={{ duration: 0.7 }}
  >
    <div class="container">
      <motion.div
        className="content"
        initial={{ opacity: 0, x: -200 }} // Start off-screen to the right
        animate={{ opacity: 1, x: 0 }} // Move to the original position
        transition={{ duration: 0.7 }} // Animation duration
      >
        <h4>Best Medical Clinic</h4>

        <b class="blue-color">
          Bringing Health{" "}
          <b style={{ color: "black", fontSize: "1em" }}>To </b>{" "}
        </b>
        <b> Life For The Whole</b>
        <b>Family...</b>

        <button class="btn btn-primary">Get Appoinments »</button>
      </motion.div>
    </div>
  </motion.div>


  )
}

export default Landing