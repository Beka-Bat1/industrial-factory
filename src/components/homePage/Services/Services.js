import React from "react";

import s1 from "../../../assets/img/service/block_2.jpg";
import s2 from "../../../assets/img/service/block_1.jpg";
import s3 from "../../../assets/img/service/3.jpg";
import s4 from "../../../assets/img/service/4.jpg";
import s5 from "../../../assets/img/service/2.jpg";
import s6 from "../../../assets/img/service/5.jpg";

function Services() {
  return (
    <>
      {/* <!-- service area start --> */}
      <div class="Services-area bg-color area-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="section-headline text-center">
                <h3>სერვისები</h3>
                <p>
                  ჩვენ გთავაზობთ, მაღალი ხარისხის სამშენებლო მასალებს, თქვენთვის
                  სასურველ ადგილამდე მიტანით.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="services-all">
              {/* <!-- single-well end--> */}
              <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div class="single-services text-center">
                  <div class="services-img">
                    <img src={s1} alt="" />
                    <div class="image-layer">
                      <a href="#">
                        <i class="flaticon-brick"></i>
                      </a>
                    </div>
                  </div>
                  <div class="main-services">
                    <div class="service-content">
                      <h4>ბლოკი</h4>
                      <p>უმაღლესი ხარისხის ბლოკი</p>
                      <a class="service-btn" href="#">
                        გაიგე მეტი
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- single-well end--> */}
              <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div class="single-services text-center">
                  <div class="services-img">
                    <img src={s2} alt="" />
                    <div class="image-layer">
                      <a href="#">
                        <i class="flaticon-brick"></i>
                      </a>
                    </div>
                  </div>
                  <div class="main-services">
                    <div class="service-content">
                      <h4>პერლიტის ბლოკი</h4>
                      <p>უმაღლესი ხარისხის ბლოკი</p>
                      <a class="service-btn" href="#">
                        გაიგე მეტი
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- single-well end--> */}
              <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div class="single-services text-center">
                  <div class="services-img">
                    <img src={s3} alt="" />
                    <div class="image-layer">
                      <a href="#">
                        <i class="flaticon-desert"></i>
                      </a>
                    </div>
                  </div>
                  <div class="main-services">
                    <div class="service-content">
                      <h4> ქვიშახრეში 040 </h4>
                      <p>მაღალი ხარისხით დამზადებული ქვიშახრეში.</p>
                      <a class="service-btn" href="#">
                        გაიგე მეტი
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- single-well end--> */}
              <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div class="single-services text-center">
                  <div class="services-img">
                    <img src={s4} alt="" />
                    <div class="image-layer">
                      <a href="#">
                        <i
                          className=".flaticon-desert
"
                        ></i>
                      </a>
                    </div>
                  </div>
                  <div class="main-services">
                    <div class="service-content">
                      <h4>ინერტული მასალები</h4>
                      <p>თქვენ პროექტზე მორგებული მასალები.</p>
                      <a class="service-btn" href="#">
                        read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- single-well end--> */}
              <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div class="single-services text-center">
                  <div class="services-img">
                    <img src={s5} alt="" />
                    <div class="image-layer">
                      <a href="#">
                        <i class=".flaticon-truck-1"></i>
                      </a>
                    </div>
                  </div>
                  <div class="main-services">
                    <div class="service-content">
                      <h4>თვითმცლელი</h4>
                      <p>თვითმცლელის სერვისი.</p>
                      <a class="service-btn" href="#">
                        გაიგე მეტი
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- single-well end--> */}
              <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div class="single-services text-center">
                  <div class="services-img">
                    <img src={s6} alt="" />
                    <div class="image-layer">
                      <a href="#">
                        <i className=".flaticon-digger"></i>
                      </a>
                    </div>
                  </div>
                  <div class="main-services">
                    <div class="service-content">
                      <h4> JCB ექსკავატორი</h4>
                      <p>
                        მძიმე ტექნიკით მომსახურება, JCB ექსკავატორი გამოცდილი
                        ოპერატორით.
                      </p>
                      <a class="service-btn" href="#">
                        გაიგე მეტი
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- single-well end--> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- service area End --> */}
    </>
  );
}

export default Services;
