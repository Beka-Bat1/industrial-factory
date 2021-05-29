import React, { useState, useEffect } from "react";

const ContactPage = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    window.scrollTo(0, 150);
  }, []);

  const saveInput = (e) => {
    e.preventDefault();
    const serviceID = "default_service";
    const templateID = "template_f5ms1hv";

    window.emailjs
      .sendForm(serviceID, templateID, e.target, process.env.REACT_APP_USERID)
      .then(
        () => {
          alert("Sent!");
        },
        (err) => {
          alert(JSON.stringify(err));
        }
      );
  };

  return (
    <>
      {/*   <!-- Start contact Area --> */}
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
                  <form onSubmit={(e) => saveInput(e)} class="contact-form">
                    <div class="col-md-6 col-sm-6 col-xs-12">
                      <input type="hidden" name="contact_number" />

                      <input
                        type="text"
                        id="name"
                        name="user_name"
                        class="form-control"
                        placeholder="სახელი"
                        required
                        data-error="შეიყვანეთ სახელი"
                        value={inputName}
                        onChange={(e) => setInputName(e.target.value)}
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                      <input
                        type="email"
                        class="email form-control"
                        id="email"
                        name="user_mail"
                        placeholder="ელ. ფოსტა"
                        required
                        data-error="შეიყვანეთ მეილი"
                        value={inputEmail}
                        onChange={(e) => setInputEmail(e.target.value)}
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <input
                        type="text"
                        id="tel_number"
                        name="user_phone_number"
                        class="form-control"
                        placeholder="მობ. ნომერი"
                        required
                        data-error="შეიყვანეთ მობ. ნომერი"
                        value={inputPhone}
                        onChange={(e) => setInputPhone(e.target.value)}
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <textarea
                        id="message"
                        name="user_message"
                        rows="7"
                        placeholder="ტექსტი"
                        class="form-control"
                        required
                        data-error="ტექსტი"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                      ></textarea>
                      <div class="help-block with-errors"></div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                      <button type="submit" class="contact-btn">
                        გაგზავნა
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
};

export default ContactPage;
