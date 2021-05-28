import React from "react";
import "./Footer.css";
import logo2 from "../../assets/img/logo/logo2.png";

function Footer() {
  return (
    <>
      {/* <!-- Start Footer bottom Area --> */}
      <footer>
        <div class="footer-area">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-sm-5 col-xs-12">
                <div class="footer-content">
                  <div class="footer-head">
                    <div class="footer-logo">
                      <a href="#">
                        <img src={logo2} alt="" />
                      </a>
                    </div>
                    <p>
                      “ემპა კომპანი", ევროპული სტანდარტების სამშენებლო
                      მასალებისა მწარმოებელია, ვუზრუნველყოფთ სხვადასხვა ტიპის
                      მძიმე ტექნიკით მომსახურებას.
                    </p>
                    <div class="footer-icons">
                      <ul>
                        <li>
                          <a href="#">
                            <i class="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-google"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-pinterest"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single footer --> */}
              <div class="col-md-8 col-sm-7 col-xs-12">
                <div class="footer-content">
                  {/* <div class="footer-head"> */}
                  <div className="map-responsive">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.7231573788954!2d42.83569341529803!3d41.64011507924167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4042cf7da7ebbea9%3A0x81d6c1c4718001fd!2z4YOh4YOQ4YOb4YOo4YOU4YOc4YOU4YOR4YOa4YOdIOGDkeGDmuGDneGDmeGDmOGDoSDhg6Xhg5Dhg6Dhg67hg5Dhg5zhg5A!5e0!3m2!1sen!2sge!4v1622224602539!5m2!1sen!2sge"
                      width="600"
                      height="450"
                      frameBorder="0"
                      style={{ border: "0px" }}
                      allowFullScreen="true"
                      aria-hidden="false"
                      tabIndex="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* <!-- End footer area --> */}
        <div class="footer-area-bottom">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="copyright">
                  <p>
                    <a target="_blank" href="https://www.templateshub.net">
                      All rights Reserved.
                    </a>
                  </p>
                  <p>
                    <a target="_blank" href="https://www.templateshub.net">
                      EMPA Company .inc
                    </a>
                  </p>
                </div>
              </div>

              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="copyright">
                  <p class="text-right">
                    <a target="_blank" href="https://www.templateshub.net">
                      Credits
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
