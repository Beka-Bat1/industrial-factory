import React from "react";
import { Link } from "react-router-dom";

import s6 from "../../../assets/img/s2-min.jpg";
import s5 from "../../../assets/img/s1-min.jpg";

function Slider() {
  return (
    <>
      {/* <!-- Start Slider Area --> */}
      <div class="intro-area intro-area-4 intro-area-5">
        <div class="main-overly"></div>
        <div class="intro-carousel">
          <div class="intro-content">
            <div class="slider-images">
              <img src={s5} srcset={s5 + " 2x"} alt="" width="1420" />
            </div>
            <div class="slider-content">
              <div class="display-table">
                <div class="display-table-cell">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12">
                        {/* <!-- layer 1 --> */}
                        <div class="layer-1-2">
                          <h1 class="title2">
                            უმაღლესი ხარისხის სამშენებლო მასალები
                          </h1>
                        </div>
                        <div class="layer-1-1 ">
                          <p>
                            ჩვენთან სამშენებლო მასალების წარმოება ხდება ევროპული
                            სტანდარტების დანადგარებით.
                          </p>
                        </div>
                        {/* <!-- layer 3 --> */}
                        <div class="layer-1-3">
                          <Link to="services" class="ready-btn left-btn">
                            სერვისები
                          </Link>

                          <Link to="services" class="ready-btn right-btn">
                            დაგვიკავშირდი
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="intro-content">
            <div class="slider-images">
              <img src={s6} alt="" />
            </div>
            <div class="slider-content">
              <div class="display-table">
                <div class="display-table-cell">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12">
                        {/* <!-- layer 1 --> */}
                        <div class="layer-1-2">
                          <h1 class="title2">უმაღლესი ხარისხის ბლოკი</h1>
                        </div>
                        <div class="layer-1-1 ">
                          <p>
                            ჩვენთან სამშენებლო მასალების წარმოება ხდება ევროპული
                            სტანდარტების დანადგარებით.
                          </p>
                        </div>
                        {/* <!-- layer 3 --> */}
                        <div class="layer-1-3">
                          <Link to="services" class="ready-btn left-btn">
                            სერვისები
                          </Link>

                          <Link to="services" class="ready-btn right-btn">
                            დაგვიკავშირდი
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Slider Area --> */}
    </>
  );
}

export default Slider;
