import React, { useState } from "react";

function ContactPage() {
  const [inoutValue, setInputValue] = useState("");
  const [inputEmail, setInputEmail] = useState("");


  const saveInput = (e) => {
      e.
    console.log(inputEmail)
  }

  return (
    <>
      {/* //   <!-- Start contact Area --> */}
      <div class="container area-padding">
        <div class="row">
          {/* <!-- Start contact icon column --> */}
          <div class="col-md-12 col-sm-12 col-xs-12">
            {/* <!-- Start Map --> */}
            <div class="map-main">
              <div id="googleMap" style={{ width: "100%", height: "450px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5124.112784480428!2d42.83751834675094!3d41.64431602258112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4042cf7da7ebbea9%3A0x81d6c1c4718001fd!2z4YOh4YOQ4YOb4YOo4YOU4YOc4YOU4YOR4YOa4YOdIOGDkeGDmuGDneGDmeGDmOGDoSDhg6Xhg5Dhg6Dhg67hg5Dhg5zhg5A!5e0!3m2!1sen!2sge!4v1622293195921!5m2!1sen!2sge"
                  width="100%"
                  height="100%"
                  allowfullscreen=""
                  loading="lazy"
                  style={{ border: "0px" }}
                ></iframe>
              </div>
            </div>
            {/* <!-- End Map --> */}
          </div>
        </div>
      </div>
      {/* //   <!-- Start contact Area --> */}
      <div class="contact-page ">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-12">
              <div class="contact-head">
                <h3>დაგვიკავშირდით ან მოგვწერეთ</h3>
                <p>უმოკლეს დროში დაგიკავშირდებით და გაგესაუბრებით</p>
                <div class="contact-icon">
                  <div class="contact-inner">
                    <h5>მისამართი :</h5>
                    <a href="#">
                      <i class="fa fa-map"></i>
                      <span> მისამართი </span>
                    </a>
                    <a href="#">
                      <i class="fa fa-phone"></i>
                      <span>+555 555 555</span>
                    </a>
                    <a href="#">
                      <i class="fa fa-envelope"></i>
                      <span>info@empacompany.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End contact icon --> */}
            <div class="col-md-6 col-sm-6 col-xs-12">
              <div class="contact-form">
                <div class="row">
                  <form
                    id="contactForm"
                    onSubmit={(e) => saveInput(e)}
                    class="contact-form"
                  >
                    <div class="col-md-6 col-sm-6 col-xs-12">
                      <input
                        type="text"
                        id="name"
                        class="form-control"
                        placeholder="სახელი"
                        required
                        data-error="შეიყვანეთ სახელი"
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                      <input
                        type="email"
                        class="email form-control"
                        id="email"
                        placeholder="ელ. ფოსტა"
                        required
                        data-error="შეიყვანეთ მეილი"
                        onChange={(e) => setInputEmail(e.target.value)}
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <input
                        type="text"
                        id="tel_number"
                        class="form-control"
                        placeholder="მობ. ნომერი"
                        required
                        data-error="შეიყვანეთ მობ. ნომერი"
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <textarea
                        id="message"
                        rows="7"
                        placeholder="ტექსტი"
                        class="form-control"
                        required
                        data-error="ტექსტი"
                      ></textarea>
                      <div class="help-block with-errors"></div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                      <button type="submit" id="submit" class="contact-btn">
                        Submit
                      </button>
                      <div id="msgSubmit" class="h3 text-center hidden"></div>
                      <div class="clearfix"></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* <!-- End contact Form --> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
