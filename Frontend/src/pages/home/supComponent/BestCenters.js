import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

const BestCenters = () => {
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
    <section className="Best-centers">
      <div className="container" ref={sectionRef}>
        {/* Animate the text */}
        <div className="text-section">
          <motion.p
            initial={{ opacity: 0, x: -100 }} // Slide in from the left
            animate={isVisible ? { opacity: 1, x: 0 } : {}} // Animate to the original position
            transition={{ duration: 0.7 }} // Set the animation duration
          >
            we are the
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: 100 }} // Slide in from the right
            animate={isVisible ? { opacity: 1, x: 0 } : {}} // Animate to the original position
            transition={{ duration: 0.7, delay: 0.2 }} // Add a delay for staggered effect
          >
            best our departments centers
          </motion.h1>
        </div>

        {/* Animate icons with staggered effect */}
        <div className="icons">
          {[
            "./assets/images/home/01.png",
            "./assets/images/home/01.png",
            "./assets/images/home/03.png",
            "./assets/images/home/04.png",
            "./assets/images/home/05.png",
            "./assets/images/home/06.png",
            "./assets/images/home/07.png",
            "./assets/images/home/08.png",
            "./assets/images/home/09.png",
            "./assets/images/home/01.png",
          ].map((src, index) => (
            <motion.img
              key={index}
              className="icon"
              src={src}
              alt=""
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
          ))}
        </div>

        <div className="speciality-rhinology">
          <motion.div
            className="left"
            initial={{ opacity: 0, x: -300 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <b>speciality rhinology 1</b>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              exercitationem quia debitis sint ex obcaecati dolor iure repellat
              cum! Debitis placeat accusantium error vitae, ad cum unde alias
              corrupti iure? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Facere voluptate, fugit nobis fugiat officia expedita.
              Laborum voluptates culpa nostrum. Adipisci assumenda autem et odit
              inventore natus aperiam nesciunt excepturi vitae!
            </p>
            <div className="services">
              <span> qualified doctors</span>
              <span> qualified doctors</span>
              <span> qualified doctors</span>
              <span> qualified doctors</span>
              <span> qualified doctors</span>
              <span> qualified doctors</span>
            </div>
            <button className="btn">Appointment Now</button>
          </motion.div>

          <motion.div
            className="right"
            initial={{ opacity: 0, x: 300 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default BestCenters;
