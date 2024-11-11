import React from "react";
import { useEffect, useState } from "react";
import style from "../../style/ServiceSection.css"

function ServiceSection() {
  const [servicesData, setServicesData] = useState([]);

  function fetchData(i) {
    return servicesData.map(function (services, index) {
      if (index === i)
        return (
          <SingleService
            src={`assets/images/home/${services.imageUrl}`}
            alt={services.title}
            key={services.id}>
            {services.description}
          </SingleService>
        );
    });
  }

  useEffect(function () {
    async function fetchBlog() {
      const res = await fetch("http://localhost:5000/api/v1/services");

      const data = await res.json();
      /*  console.log(data.data.blogs); */

      setServicesData(data.data.services);
    }

    fetchBlog();
  }, []);
  const [show, setShow] = useState(1);
  return (
    <section className="blog">
      <div className="container">
        {show === 1 && fetchData(0)}
        {show === 2 && fetchData(1)}
        {show === 3 && fetchData(2)}
        {show === 4 && fetchData(3)}
        {/* <SingleService /> */}
      </div>
      <Pagination show={show} setShow={setShow} />
    </section>
  );
}

function SingleService({ children, src, alt }) {
  return (
    <div className="single-blog">
      <div className="single-img">
        <img src={src} alt={alt} />
      </div>
      <div className="text">
        <h1>Family Health Solutions</h1>
        <p>{children}</p>
      </div>
    </div>
  );
}
function Pagination({ show, setShow }) {
  return (
    <div className="pagination">
      <p className={show === 1 ? "active" : ""} onClick={() => setShow(1)}>
        1
      </p>

      <p className={show === 2 ? "active" : ""} onClick={() => setShow(2)}>
        2
      </p>
      <p className={show === 3 ? "active" : ""} onClick={() => setShow(3)}>
        3
      </p>
      <p className={show === 4 ? "active" : ""} onClick={() => setShow(4)}>
        4
      </p>
    </div>
  );
}

export default ServiceSection;
