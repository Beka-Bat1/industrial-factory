import React, { useEffect } from "react";

function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 150);
  }, []);
  return (
    <>
      <div class="single-services-page area-padding">
        <div class="container">
          <div class="row">
            {/* <!-- Start service page --> */}
            <div class="col-md-12 col-sm-8 col-xs-12">
              <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <div class="single-page">
                    <div class="page-img">
                      <img src="img/service/1.jpg" alt="" />
                    </div>
                  </div>
                </div>
                {/* <!-- strat single page --> */}
                {/* <!-- single-well end--> */}
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <div class="single-well">
                    <a href="#">
                      <h3>სერვისები</h3>
                    </a>
                    <p>
                      When replacing a multi-lined selection of text, the
                      generated dummy text maintains the amount of lines. When
                      replacing a selection of text within a single line, the
                      amount of words is roughly being maintained.When the
                      replaced text selection consists fully of lower-cased or
                      capital letters or begins with a capital letter, that
                      previous casing is maintained. Furthermore, the presence
                      or absence of a trailing punctuation mark of a replaced
                      text selection is being maintained.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- end Row --> */}
              <div class="row mar-row">
                <div class="col-md-6 col-sm-12 col-xs-12">
                  <div class="single-page middle-image">
                    <div class="page-img">
                      <img src="img/service/2.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-12 col-xs-12">
                  <div class="single-well">
                    <a href="#">
                      <h4>ამწე-მანიპულატორი და თვითმცლელი სატვირთო მანქანა</h4>
                    </a>
                    <p>
                      ჩვენი გამოცდილი ოპერატორები თქვენთვის სასურველ ადგილას
                      მიიტანენ სამშენებლო მასალას
                    </p>
                    <ul class="marker-list">
                      <li>Words is roughly being maintained</li>
                      <li>Letters or begins with a capital letter</li>
                      <li>Previous casing is maintained</li>
                      <li>Maintains the amount of lines</li>
                    </ul>
                  </div>
                </div>
                {/* <!-- End single page --> */}
              </div>
              {/* <!-- end Row --> */}
              <div class="row mar-row">
                <div class="col-md-6 col-sm-12 col-xs-12">
                  <div class="single-well">
                    <a href="#">
                      <h4>JCB ექსკავატორის სერვისი</h4>
                    </a>
                    <p>JCB ექსკავატორებს წინ ვერაფერი დაუდგებათ!</p>
                    <ul class="marker-list">
                      <li>ბუნება შენსხელშია</li>
                      <li>
                        ჩვენი ოპერატორებისთვის ხელისშემშლელ ფაქტორს ვერაფერი
                        წარმოადგენს
                      </li>
                      <li>
                        {" "}
                        ენდე ჩვენ ოპერატორებს და დაასრულე პროექტი სასიამოვნოდ
                      </li>
                      <li>Maintains the amount of lines</li>
                    </ul>
                  </div>
                </div>
                {/* <!-- End single page --> */}
                <div class="col-md-6 col-sm-12 col-xs-12">
                  <div class="single-page">
                    <div class="page-img">
                      <img src="img/service/4.jpg" alt="" />
                    </div>
                  </div>
                </div>
                {/* <!-- End single page --> */}
              </div>
              
              {/* <!-- end Row --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End page Area --> */}
    </>
  );
}

export default ServicesPage;
