import { useEffect, useRef, useState } from "react";


import "../../style/home.css";
import Appointment from "./supComponent/Appointment";


import Landing from "./supComponent/Landing";
import Specialized from "./supComponent/Specialized";
import BestCenters from "./supComponent/BestCenters";
import Doctors from "./supComponent/Doctors";
import Info from "./supComponent/Info";
import NewsFed from "./supComponent/NewsFed";

const Home = () => {
  return (
    <>
      <Landing />

      <Specialized />

      <BestCenters />

      <Info/>

      <Doctors/>

   
      <Appointment />


      <NewsFed/>



      <section class="logos">
        <div class="container">
          <div class="logs ">
            <div class="col">
              <img src="././assets/images/home/1 (1).png" alt="" />
            </div>
            <div class="col">
              <img src="./assets/images/home/2 (1).png" alt="" />
            </div>
            <div class="col">
              <img src="./assets/images/home/3 (1).png" alt="" />
            </div>
            <div class="col">
              <img src="./assets/images/home/4.png" alt="" />
            </div>
            <div class="col">
              <img src="./assets/images/home/5.png" alt="" />
            </div>
            <div class="col">
              <img src="./assets/images/home/6.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section class="join">
        <div class="container">
          <div class="row ">
            <div class="col">
              <h1>join our newsletter</h1>
            </div>

            <div class="col-left">
              <div class="input-filed">
                <i class="fa-solid fa-paper-plane"></i>
                <input type="email" placeholder="Enter Your Email" />
                <button>Subscribe Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="footer">
        <div class="container">
          <div class="row ">
            <div class="first">
              <h3>contact info</h3>
              <p>
                rapidiously seize wireless strategic theme areas and corporate
                testing procedures uniquely
              </p>
              <ul class="d-flex flex-column gap-1">
                <li>
                  <i class="fa-solid fa-house me-1"></i> suite 02 new elephant
                  road usa
                </li>
                <li>
                  <i class="fa-solid fa-phone me-1"></i> +880 142 258
                  123,02-96936
                </li>
                <li>
                  <i class="fa-solid fa-envelope me-1"></i> info@muki.com
                </li>
                <li>
                  <i class="fa-solid fa-globe me-1"></i> info@mukti.com
                </li>
              </ul>
            </div>

            <div class="seconnd">
              <h3>our doctors</h3>
              <ul class="d-flex flex-column gap-1 arrow">
                <li>dr.nick sims</li>
                <li>dr.michael linden</li>
                <li>dr.max turner</li>
                <li>dr.amy adams</li>
                <li>dr.julia jameson</li>
                <li>dr michael lindem</li>
              </ul>
            </div>

            <div class="third">
              <h3>our services</h3>
              <ul class="d-flex flex-column gap-1 arrow">
                <li>ourparient surgery</li>
                <li>cardic linic</li>
                <li>ophthalmology</li>
                <li>gynaecological clinc</li>
                <li>outpatient</li>
                <li>outpateint rehabilitation</li>
              </ul>
            </div>

            <div class="fourth">
              <h3>opening hours</h3>
              <div class="row ">
                <div class="col">satarday</div>
                <div class="col">8:00 am-10:00 pm</div>
              </div>

              <div class="row">
                <div class="col">satarday</div>
                <div class="col">8:00 am-10:00 pm</div>
              </div>
              <div class="row">
                <div class="col">satarday</div>
                <div class="col">8:00 am-10:00 pm</div>
              </div>
              <div class="row">
                <div class="col">satarday</div>
                <div class="col">8:00 am-10:00 pm</div>
              </div>
              <div class="row">
                <div class="col">satarday</div>
                <div class="col">8:00 am-10:00 pm</div>
              </div>
              <div class="row">
                <div class="col">satarday</div>
                <div class="col">8:00 am-10:00 pm</div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="container">
              Copyright © 2021 <span className="site-name">Mukti</span>. All
              Rights Reserved. By
              <span className="developer">LabArtisan</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
