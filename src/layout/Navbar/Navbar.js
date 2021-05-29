import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo/empaLogo.png";

const Navbar = () => {
  return (
    <>
      <div id="preloader"></div>
      <header className="header-two">
        <div className="topbar-area topbar-area-5 fix hidden-xs">
          <div className="container">
            <div className="row">
              <div className=" col-md-10 col-sm-9">
                <div className="topbar-left">
                  <ul>
                    <li>
                      <a>
                        <i className="fa fa-map-marker"></i> სოფელი არალი,
                        ადიგენი 0302
                      </a>
                    </li>
                    <li className="hidden-sm">
                      <a href="#">
                        <i className="fa fa-clock-o"></i> ორშაბათი - შაბათი :
                        08:00 - 20:00
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-envelope"></i> info@empacompany.ge
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-phone"></i>+995 555 59 09 09
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-sm-3">
                <div className="quote-button">
                  <a
                    href="contact.html"
                    className="quote-btn"
                    title="Quick view"
                    data-toggle="modal"
                    data-target="#quoteModal"
                  >
                    მოგვწერეთ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- header-area start --> */}
        <div id="sticker" className="header-area header-area-2 hidden-xs stick">
          <div className="container">
            <div className="row">
              {/* <!-- logo start --> */}
              <div className="col-md-3 col-sm-3">
                <div className="logo text-center">
                  {/* <!-- Brand --> */}
                  <Link className="navbar-brand page-scroll sticky-logo" to="/">
                    <div class="sub-headline">
                      {/* logo */}
                      <h4 class="color">EMPA</h4>
                      {/* <span>
                        <h6>Company</h6>
                      </span> */}
                    </div>
                  </Link>
                </div>
              </div>
              {/* <!-- logo end --> */}
              <div className="col-md-9 col-sm-9">
                {/* <!-- mainmenu start --> */}
                <nav className="navbar navbar-default">
                  <div className="collapse navbar-collapse" id="navbar-example">
                    <div className="main-menu">
                      <ul className="nav navbar-nav navbar-right">
                        <li>
                          <Link className="pagess" to="/">
                            მთავარი
                          </Link>
                        </li>
                        <li>
                          <Link to="/production/block1">პროდუცქცია</Link>

                          <ul className="sub-menu">
                            <li>
                              <Link to="/production/block1">ბლოკი</Link>
                            </li>

                            <li>
                              <Link to="/production/block2">პემზის ბლოკი</Link>
                            </li>
                            <li>
                              <Link to="/production/inertMaterial">
                                ინერტული მასალები
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <Link className="pagess" to="/services">
                            სერვისები
                          </Link>
                        </li>
                        <li>
                          <Link className="pagess" to="/gallery">
                            გალერეა
                          </Link>
                        </li>
                        <li>
                          <Link className="pagess" to="/about">
                            ჩვენს შესახებ
                          </Link>
                        </li>
                        <li>
                          <Link className="pagess" to="/contact">
                            კონტაქტი
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
                {/* <!-- mainmenu end --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- header-area end -->
                <!-- mobile-menu-area start --> */}
        <div className="mobile-menu-area hidden-lg hidden-md hidden-sm">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mobile-menu">
                  <div className="logo">
                    <a href="index-2.html">
                      <img src="img/logo/logo.png" alt="" />
                    </a>
                  </div>
                  <nav id="dropdown">
                    <ul>
                      <li>
                        <Link className="pagess" to="/">
                          მთავარი
                        </Link>
                      </li>
                      <li>
                        <Link to="/production/">პროდუცქცია</Link>

                        <ul className="sub-menu">
                          <li>
                            <Link to="/production/block1">ბლოკი</Link>
                          </li>

                          <li>
                            <Link to="/production/block2" path="/block-1">
                              პემზის ბლოკი
                            </Link>
                          </li>
                          <li>
                            <Link to="/production/inertMaterial">
                              ინერტული მასალები
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link className="pagess" to="/services">
                          სერვისები
                        </Link>
                      </li>
                      <li>
                        <Link className="pagess" to="/gallery">
                          გალერეა
                        </Link>
                      </li>
                      <li>
                        <Link className="pagess" to="/about">
                          ჩვენს შესახებ
                        </Link>
                      </li>
                      <li>
                        <Link className="pagess" to="/contact">
                          კონტაქტი
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- mobile-menu-area end -->		 */}
      </header>
      {/* <!-- header end --> */}
    </>
  );
};

export default Navbar;
