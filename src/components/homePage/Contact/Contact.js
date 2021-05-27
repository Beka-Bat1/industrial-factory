import React from "react";

function Contact() {
  return (
    <>
      {/* <!-- Start Overview --> */}
      <div
        class="contact-quote-area parallax-bg fix"
        data-stellar-background-ratio="0.6"
      >
        <div class="container-full">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-12">
              <div class="company-faq">
                <div class="sub-headline">
                  <h4>
                    Important <span class="color">FAQ</span>
                  </h4>
                </div>
                <div class="faq-full">
                  <div class="faq-details">
                    <div class="panel-group" id="accordion">
                      {/* <!-- Panel Default --> */}
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="check-title">
                            <a
                              data-toggle="collapse"
                              class="active"
                              data-parent="#accordion"
                              href="#check1"
                            >
                              <span class="acc-icons"></span>Redug Lefes dolor
                              sit amet.
                            </a>
                          </h4>
                        </div>
                        <div id="check1" class="panel-collapse collapse in">
                          <div class="panel-body">
                            <p>
                              When replacing a multi-lined selection of text,
                              the generated dummy text maintains the amount of
                              lines. When replacing a selection of text within a
                              single line, the amount of words is roughly being
                              maintained.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Panel Default --> */}
                      {/* <!-- Panel Default --> */}
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="check-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#check2"
                            >
                              <span class="acc-icons"></span> Laboriosam maiores
                              alias accusamus
                            </a>
                          </h4>
                        </div>
                        <div id="check2" class="panel-collapse collapse">
                          <div class="panel-body">
                            <p>
                              When replacing a multi-lined selection of text,
                              the generated dummy text maintains the amount of
                              lines. When replacing a selection of text within a
                              single line, the amount of words is roughly being
                              maintained.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Panel Default --> */}
                      {/* <!-- Panel Default --> */}
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="check-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#check3"
                            >
                              <span class="acc-icons"></span>Mollitia dolore
                              magnam quidem repellat
                            </a>
                          </h4>
                        </div>
                        <div id="check3" class="panel-collapse collapse ">
                          <div class="panel-body">
                            <p>
                              When replacing a multi-lined selection of text,
                              the generated dummy text maintains the amount of
                              lines. When replacing a selection of text within a
                              single line, the amount of words is roughly being
                              maintained.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Panel Default --> */}
                      {/* <!-- Panel Default --> */}
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="check-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#check4"
                            >
                              <span class="acc-icons"></span>Quas mollitia
                              dolore magnam
                            </a>
                          </h4>
                        </div>
                        <div id="check4" class="panel-collapse collapse">
                          <div class="panel-body">
                            <p>
                              When replacing a multi-lined selection of text,
                              the generated dummy text maintains the amount of
                              lines. When replacing a selection of text within a
                              single line, the amount of words is roughly being
                              maintained.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Panel Default --> */}
                      {/* <!-- Panel Default --> */}
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="check-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#check5"
                            >
                              <span class="acc-icons"></span>The amount of words
                            </a>
                          </h4>
                        </div>
                        <div id="check5" class="panel-collapse collapse">
                          <div class="panel-body">
                            <p>
                              When replacing a multi-lined selection of text,
                              the generated dummy text maintains the amount of
                              lines. When replacing a selection of text within a
                              single line, the amount of words is roughly being
                              maintained.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Panel Default -->											 */}
                    </div>
                  </div>
                  {/* <!-- End FAQ --> */}
                </div>
              </div>
            </div>
            {/* <!-- End Column --> */}
            <div class="col-md-6 col-sm-6 col-xs-12">
              <div class="quote-details">
                <div class="sub-headline">
                  <h4>
                    Request a <span class="color">Quote</span>
                  </h4>
                </div>
                <div class="quote-main">
                  <div class="row">
                    <form
                      id="contactForm"
                      method="POST"
                      action="http://rockstheme.com/rocks/tionscal-previews/contact.php"
                      class="contact-form"
                    >
                      <div class="col-md-12 col-sm-12 col-xs-12">
                        <input
                          type="text"
                          id="name"
                          class="form-control"
                          placeholder="Name"
                          required
                          data-error="Please enter your name"
                        />
                        <div class="help-block with-errors"></div>
                        <input
                          type="email"
                          class="email form-control"
                          id="email"
                          placeholder="Email"
                          required
                          data-error="Please enter your email"
                        />
                        <div class="help-block with-errors"></div>
                        <input
                          type="text"
                          id="msg_subject"
                          class="form-control last-part"
                          placeholder="Subject"
                          required
                          data-error="Please enter your message subject"
                        />
                        <div class="help-block with-errors last-part"></div>
                      </div>
                      <div class="col-md-12 col-sm-12 col-xs-12">
                        <textarea
                          id="message"
                          rows="7"
                          placeholder="Massage"
                          class="form-control"
                          required
                          data-error="Write your message"
                        ></textarea>
                        <div class="help-block with-errors"></div>
                        <button type="submit" id="submit" class="quote-btn">
                          Submit
                        </button>
                        <div id="msgSubmit" class="h3 text-center hidden"></div>
                        <div class="clearfix"></div>
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
