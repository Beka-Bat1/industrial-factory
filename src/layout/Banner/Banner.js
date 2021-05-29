import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    // <!-- Start Banner Area -->
    <>
      <div class="banner-area">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="banner-content text-center">
                <h4>
                  გნებავთ ისარგებლოთ ჩვენი კომპანიის პროფესიონალური სერვისებით?
                </h4>
                <div class="banner-contact-btn">
                  <Link class="banner-btn" to="contact">
                    დაგვიკავშირდით
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // <!-- End Banner Area -->
  );
}

export default Banner;
