import "../../style/doctors.css"


function Doctors() {
  return (
    <section className="doctor-section">
      <div className="main-section-title">
        <span> meet our</span>
        <h1>Mukit Professional doctors</h1>
      </div>
      <div className="container">
        <div className="doctors">
          <Cards
            src={"01 (1).jpg"}
            title={"Dr. Jason Kovalsky"}
            text={"Cardiologist"}
          />

          <Cards
            src={"assets/images/doctors/02 (1).jpg"}
            title={"Dr. Jason Kovalsky"}
            text={"Cardiologist"}
          />

          <Cards
            src={"03 (1).jpg"}
            title={"Dr. Jason Kovalsky"}
            text={"Cardiologist"}
          />

          <Cards
            src={"04 (1).jpg"}
            title={"Dr. Jason Kovalsky"}
            text={"Cardiologist"}
          />

          <Cards
            src={"04 (1).jpg"}
            title={"Dr. Jason Kovalsky"}
            text={"Cardiologist"}
          />

          <Cards
            src={"assets/ima"}
            title={"Dr. Jason Kovalsky"}
            text={"Cardiologist"}
          />
          <Cards
            src={"02 (1).jpg"}
            title={"Dr. Jason Kovalsky"}
            text={"Cardiologist"}
          />
          <Cards
            src={"03 (1).jpg"}
            title={"Dr. Jason Kovalsky"}
            text={"Cardiologist"}
          />
        </div>
      </div>
    </section>
  );
}
function Cards({ src, title, text }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={src} alt="Doctor" />
      </div>
      <div className="card-body">
        <div className="card-title">{title}</div>
        <div className="card-text">{text}</div>
      </div>
    </div>
  );
}
export default Doctors;
