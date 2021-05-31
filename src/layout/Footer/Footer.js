import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/empaLogo.svg";

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
                      <img src={logo} alt="" />
                      <div className="sub-headline">
                        {" "}
                        <h3 class="color">ემპა კომპანი</h3>
                      </div>
                    </div>

                    <p>
                      შ.პ.ს “ემპა კომპანი", ევროპული სტანდარტების სამშენებლო
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
                            <i class="fa fa-google"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="footer-head">
                      <h4>საკონტაქტო</h4>
                      <div class="footer-services-link">
                        <ul class="footer-list">
                          <li>
                            <a>
                              <i className="fa fa-map-marker"></i> სოფელი არალი,
                              ადიგენი 0302
                            </a>
                          </li>
                          <li className="hidden-sm">
                            <a>
                              <i className="fa fa-clock-o"></i> ორშაბათი -
                              შაბათი : 08:00 - 20:00
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="fa fa-envelope"></i>{" "}
                              info@empacompany.ge
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="fa fa-phone"></i>+995 555 59 09 09
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* icons */}
                  </div>
                </div>
              </div>
              {/* <!-- end single footer --> */}
              <div class="col-md-8 col-sm-7 col-xs-12">
                <div class="footer-content">
                  <div className="map-responsive">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5124.112784480428!2d42.83751834675094!3d41.64431602258112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4042cf7da7ebbea9%3A0x81d6c1c4718001fd!2z4YOh4YOQ4YOb4YOo4YOU4YOc4YOU4YOR4YOa4YOdIOGDkeGDmuGDneGDmeGDmOGDoSDhg6Xhg5Dhg6Dhg67hg5Dhg5zhg5A!5e0!3m2!1sen!2sge!4v1622293195921!5m2!1sen!2sge"
                      width="750px"
                      height="450"
                      style={{ border: "0" }}
                      allowfullscreen=""
                      loading="lazy"
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
                    <a target="_blank" href="#">
                      © 2021
                    </a>{" "}
                    შ.პ.ს. ემპა კომპანი. ყველა უფლება დაცულია.
                  </p>
                </div>
              </div>

              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="copyright">
                  <p class="text-right">
                    <Link to="credits">Credits</Link>
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
