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
              <div class="col-md-8 col-sm-3 col-xs-12">
                <div class="footer-content">
                  {/* <div class="footer-head"> */}
                    <div className="map-responsive">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.866028003787!2d44.79605417504843!3d41.70898085045588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd87a77885d%3A0x50c1fc9db0ce7b4!2s9%20Saint%20Petersburg%20Street%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1607112029026!5m2!1sen!2sge"
                        width="1200"
                        height="500"
                        frameBorder="0"
                        style={{ border: "0px" }}
                        allowFullScreen=""
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
