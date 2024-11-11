import React from 'react'

function Info() {
  return (
    <section class="info">
    <div class="container">
      <div class="informtions">
        <div class="single-info">
          <i class="fa-solid fa-hospital-user"></i>
          <div class="details ">
            <strong>152+</strong>
            <span>patients every day</span>
          </div>
        </div>

        <div class="single-info">
          <i class="fa-solid fa-hospital-user"></i>
          <div class="details">
            <strong>122+</strong>
            <span>patients every day</span>
          </div>
        </div>
        <div class="single-info">
          <i class="fa-solid fa-hospital-user"></i>
          <div class="details ">
            <strong>3+</strong>
            <span>patients every day</span>
          </div>
        </div>
        <div class="single-info">
          <i class="fa-solid fa-hospital-user"></i>
          <div class="details d-flex flex-column">
            <strong>105+</strong>
            <span>patients every day</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Info