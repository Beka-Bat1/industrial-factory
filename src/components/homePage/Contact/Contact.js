import React from "react";

function Contact() {
  return (
    <>
      {/* <!-- Start Overview --> */}
      <div
        className="contact-quote-area parallax-bg fix"
        data-stellar-background-ratio="0.6"
      >
        <div className="container-full">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="company-faq">
                <div className="sub-headline">
                  <h4>
                    ხშირად დასმული <span className="color">კითხვები</span>
                  </h4>
                </div>
                <div className="faq-full">
                  <div className="faq-details">
                    <div className="panel-group" id="accordion">
                      {/* <!-- Panel Default --> */}
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="check-title">
                            <a
                              data-toggle="collapse"
                              className="active"
                              data-parent="#accordion"
                              href="#check1"
                            >
                              <span className="acc-icons"></span>კითხვა 1
                            </a>
                          </h4>
                        </div>
                        <div id="check1" className="panel-collapse collapse in">
                          <div className="panel-body">
                            <p>პასუხი 1</p>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Panel Default --> */}
                      {/* <!-- Panel Default --> */}
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="check-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#check2"
                            >
                              <span className="acc-icons"></span> კითხვა 2
                            </a>
                          </h4>
                        </div>
                        <div id="check2" className="panel-collapse collapse">
                          <div className="panel-body">
                            <p>პასუხი 2</p>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Panel Default --> */}
                      {/* <!-- Panel Default --> */}
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="check-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#check3"
                            >
                              <span className="acc-icons"></span>კითხვა 3
                            </a>
                          </h4>
                        </div>
                        <div id="check3" className="panel-collapse collapse ">
                          <div className="panel-body">
                            <p>პასუხი 3</p>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Panel Default --> */}
                      {/* <!-- Panel Default --> */}
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="check-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#check4"
                            >
                              <span className="acc-icons"></span>კითხვა 4
                            </a>
                          </h4>
                        </div>
                        <div id="check4" className="panel-collapse collapse">
                          <div className="panel-body">
                            <p>პასუხი 4</p>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Panel Default --> */}
                      {/* <!-- Panel Default --> */}
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="check-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#check5"
                            >
                              <span className="acc-icons"></span>კითვა 5
                            </a>
                          </h4>
                        </div>
                        <div id="check5" className="panel-collapse collapse">
                          <div className="panel-body">
                            <p>პასუხი 5</p>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Panel Default -->	 */}
                    </div>
                  </div>
                  {/* <!-- End FAQ --> */}
                </div>
              </div>
            </div>
            {/* <!-- End Column --> */}
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="quote-details" id="contact">
                <div className="sub-headline">
                  <h4>
                    დაგვისვით <span className="color">შეკითხვა</span>
                  </h4>
                </div>
                <div className="quote-main">
                  <div className="row">
                    <form
                      id="contactForm"
                      method="POST"
                      action="http://rockstheme.com/rocks/tionscal-previews/contact.php"
                      className="contact-form"
                    >
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          required
                          data-error="Please enter your name"
                        />
                        <div className="help-block with-errors"></div>
                        <input
                          type="email"
                          className="email form-control"
                          id="email"
                          placeholder="Email"
                          required
                          data-error="Please enter your email"
                        />
                        <div className="help-block with-errors"></div>
                        <input
                          type="text"
                          id="msg_subject"
                          className="form-control last-part"
                          placeholder="Subject"
                          required
                          data-error="Please enter your message subject"
                        />
                        <div className="help-block with-errors last-part"></div>
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <textarea
                          id="message"
                          rows="7"
                          placeholder="Massage"
                          className="form-control"
                          required
                          data-error="Write your message"
                        ></textarea>
                        <div className="help-block with-errors"></div>
                        <button type="submit" id="submit" className="quote-btn">
                          გაგზავნა
                        </button>
                        <div
                          id="msgSubmit"
                          className="h3 text-center hidden"
                        ></div>
                        <div className="clearfix"></div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Column --> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
