import React from "react";


function Navbar() {
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
                      <a href="#">
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
        <div id="sticker" className="header-area header-area-2 hidden-xs">
          <div className="container">
            <div className="row">
              {/* <!-- logo start --> */}
              <div className="col-md-3 col-sm-3">
                <div className="logo">
                  {/* <!-- Brand --> */}
                  <a
                    className="navbar-brand page-scroll sticky-logo"
                    href="index-2.html"
                  >
                    <img src="img/logo/logo2.png" alt="" />
                  </a>
                </div>
              </div>
              {/* <!-- logo end --> */}
              <div className="col-md-9 col-sm-9">
                <div className="header-right-link">
                  {/* <!-- search option start --> */}
                  <form action="#">
                    <div className="search-option">
                      <input type="text" placeholder="Search..." />
                      <button className="button" type="submit">
                        <i className="fa fa-search"></i>
                      </button>
                    </div>
                    <a className="main-search" href="#">
                      <i className="fa fa-search"></i>
                    </a>
                  </form>
                  {/* <!-- search option end --> */}
                </div>
                {/* <!-- mainmenu start --> */}
                <nav className="navbar navbar-default">
                  <div className="collapse navbar-collapse" id="navbar-example">
                    <div className="main-menu">
                      <ul className="nav navbar-nav navbar-right">
                        <li>
                          <a className="pagess" href="index-2.html">
                            მთავარი
                          </a>
                        </li>
                        <li>
                          <a className="pagess" href="#">
                            ჩვენს შესახებ
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="about.html">ჩვენს შესახებ</a>
                            </li>
                            <li>
                              <a href="team.html">გუნდი</a>
                            </li>
                            <li>
                              <a href="review.html">შეფასება</a>
                            </li>
                            <li>
                              <a href="faq.html">კითხვარი</a>
                            </li>
                            <li>
                              <a href="error.html">შეცდომა</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="pagess" href="#">
                            სერვისები
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="services.html">სერვისები</a>
                            </li>
                            <li>
                              <a href="single-service.html">ჩვენ გთავაზობთ</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="pagess" href="#">
                            პროექტები
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="project-2.html">Project 2 Column</a>
                            </li>
                            <li>
                              <a href="project-3.html">Project 3 Column</a>
                            </li>
                            <li>
                              <a href="project-4.html">Project 4 Column</a>
                            </li>
                            <li>
                              <a href="single-project.html">Single Project</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="pagess" href="#">
                            ბლოგი
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="blog.html">Blog grid</a>
                            </li>
                            <li>
                              <a href="blog-sidebar.html">Blog Sidebar</a>
                            </li>
                            <li>
                              <a href="blog-details.html">Blog Details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">კონტაქტები</a>
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
                        <a className="pagess" href="index-2.html">
                          მთავარი
                        </a>
                      </li>
                      <li>
                        <a className="pagess" href="#">
                          ჩვენს შესახებ
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="about.html">ჩვენს შესახებ</a>
                          </li>
                          <li>
                            <a href="team.html">გუნდი</a>
                          </li>
                          <li>
                            <a href="review.html">შეფასება</a>
                          </li>
                          <li>
                            <a href="faq.html">ხშირად დასმული კითხვები</a>
                          </li>
                          <li>
                            <a href="error.html">შეცდომა</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="pagess" href="#">
                          სერვისები
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="services.html">ყველა სერვისი</a>
                          </li>
                          <li>
                            <a href="single-service.html">ჩვენ გტავაზობთ</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="pagess" href="#">
                          პროექტები
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="project-2.html">Project 2 Column</a>
                          </li>
                          <li>
                            <a href="project-3.html">Project 3 Column</a>
                          </li>
                          <li>
                            <a href="project-4.html">Project 4 Column</a>
                          </li>
                          <li>
                            <a href="single-project.html">Single Project</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="pagess" href="#">
                          ბლოგი
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="blog.html">Blog grid</a>
                          </li>
                          <li>
                            <a href="blog-sidebar.html">Blog Sidebar</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">კონტაქტები</a>
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
}

export default Navbar;
