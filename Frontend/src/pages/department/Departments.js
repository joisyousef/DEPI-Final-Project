 import  "../../style/Department.css"
 
 function Departments() {
    
    return (
      <section className="departments-section">
        <div className="container">
          <div className="main-section-title">
            <span> we are the </span>
            <h1>best our departments center</h1>
          </div>
          <div className="departments">
            <Depart title={"plastic surgery"} src={"./assets/images/departments/dep-1.png"} alt={"photo"} />
            <Depart title={"Rhinology"} src={"./assets/images/departments/dep-2.png"} alt={"photo"} />
            <Depart title={"Urology"} src={"./assets/images/departments/dep-3.png"} alt={"photo"} />
            <Depart title={"Gastroenterology"} src={"./assets/images/departments/dep-4.png"} alt={"photo"} />
            <Depart title={"Otology"} src={"./assets/images/departments/dep-5.png"} alt={"photo"} />
            <Depart title={"Pulmonology"} src={"./assets/images/departments/dep-6.png"} alt={"photo"} />
            <Depart title={"Urology"} src={"./assets/images/departments/dep-7.png"} alt={"photo"} />
            <Depart title={"Dental Care"} src={"./assets/images/departments/dep-8.png"} alt={"photo"} />
            <Depart title={"Orthopedics"} src={"./assets/images/departments/dep-4.png"} alt={"photo"} />
            <Depart title={"Eye Care"} src={"./assets/images/departments/dep-3.png"} alt={"photo"} />
          </div>
        </div>
      </section>
    );
  }
  function Depart({ title, src, alt }) {
    return (
      <div className="department">
        <h2 className="title">{title}</h2>
        <div className="icon">
          <img src={src} alt={alt} />
        </div>
        <a href="#" className="department-link">
          Read More <i className="fa-solid fa-angles-right"></i>
        </a>
      </div>
    );
  }
  
  export default Departments;
  