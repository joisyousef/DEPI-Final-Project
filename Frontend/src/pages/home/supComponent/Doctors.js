import { useEffect, useRef, useState } from "react";
import Doctor from '../Doctor'
import Modal from './Modal'


const Doctors = () => {
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
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
    <section class="Doctors">
    <div class="container " ref={sectionRef}>
      <div class="text-section">
        <p>meet our</p>
        <h1>mukti professional docrors</h1>
      </div>

      <Doctor isVisible={isVisible} />

      <button className="btn doc-btn" onClick={openModal}>
        View All Doctors
      </button>

      {/* Render the Modal if showModal is true */}
      {showModal && <Modal onClose={closeModal} />}
    </div>
  </section>
  )
}

export default Doctors