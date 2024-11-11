import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

const Specialized = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Create and set up the IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility to true when section is in view
          observer.disconnect(); // Stop observing once the section is visible
        }
      },
      {
        threshold: 0.1, // Adjust threshold as needed
      }
    );

    // Check if sectionRef is defined, and observe it
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup function to stop observing when the component unmounts
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef]);

  return (
    <div className="specialized">
      <div className="container" ref={sectionRef}>
        <div className="text-section">
          <motion.p
            initial={{ x: 300 }} // Start off-screen to the right
            animate={isVisible ? { x: 0 } : {}} // Animate to the original position
            transition={{ duration: 0.7 }} // Set the animation duration
          >
            We Offer Specialized
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -300 }} // Start off-screen to the left
            animate={isVisible ? { opacity: 1, x: 0 } : {}} // Animate to the original position
            transition={{ duration: 0.7, delay: 0.2 }} // Set the duration and add delay for staggered effect
          >
            Orthopedics To Meet Your Needs
          </motion.h1>
        </div>

        <div className="specialisations" ref={sectionRef}>
          {/* First Card Group Coming From the Right */}
          <motion.div
            className="card"
            initial={{ opacity: 0, x: 100 }} // Start from the right
            animate={isVisible ? { opacity: 1, x: 0 } : {}} // Animate to original position
            transition={{ duration: 0.5 }}
          >
            <img src="./assets/images/home/medical-symbol.png" alt="" />
            <div className="card-body">
              <b className="card-title">Medical Treatment</b>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vlo te
                optio animi?
              </p>
              <span className="card-text">Read More »</span>
            </div>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, x: 100 }} // Start from the right
            animate={isVisible ? { opacity: 1, x: 0 } : {}} // Animate to original position
            transition={{ duration: 0.5, delay: 0.2 }} // Add delay for staggered effect
          >
            <img
              src="./assets/images/home/delivery-truck.png"
              alt="Medical Treatment"
            />
            <div className="card-body">
              <b className="card-title">Emergency Help</b>
              <p className="card-text m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vlo te
                optio animi?
              </p>
              <span className="card-text">Read More »</span>
            </div>
          </motion.div>

          {/* Second Card Group Coming From the Left */}
          <motion.div
            className="card"
            initial={{ opacity: 0, x: -100 }} // Start from the left
            animate={isVisible ? { opacity: 1, x: 0 } : {}} // Animate to original position
            transition={{ duration: 0.5, delay: 0.4 }} // Add delay for staggered effect
          >
            <img
              src="./assets/images/home/hospital-building.png"
              alt="Medical Treatment"
            />
            <div className="card-body">
              <b className="card-title">Medical Professionals</b>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vlo te
                optio animi?
              </p>
              <span className="card-text">Read More »</span>
            </div>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, x: -100 }} // Start from the left
            animate={isVisible ? { opacity: 1, x: 0 } : {}} // Animate to original position
            transition={{ duration: 0.5, delay: 0.6 }} // Add delay for staggered effect
          >
            <img
              src="./assets/images/home/doctor.png"
              alt="Medical Treatment"
            />
            <div className="card-body">
              <b className="card-title">Qualified Doctors</b>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vlo te
                optio animi?
              </p>
              <span className="card-text">Read More »</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Specialized;
