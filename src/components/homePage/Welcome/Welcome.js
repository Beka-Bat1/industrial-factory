import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <>
      {/* <!-- Welcome service area start --> */}
      <div class="welcome-area-2 area-padding">
        <div class="container">
          <div class="row">
            <div class="well-inner">
              <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="well-services">
                  <div class="well-icon">
                    <Link to="/production/block1">
                      <i class="flaticon-block"></i>
                    </Link>
                  </div>
                  <div class="well-content">
                    <h4>
                      <Link to="/production/block1">
                        ევროპული სტანდარტის <br />
                        ბლოკი
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
              {/* <!-- single-well end--> */}
              <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="well-services">
                  <div class="well-icon">
                    <Link to="/production/block1">
                      <i class="flaticon-desert"></i>
                    </Link>
                  </div>
                  <div class="well-content">
                    <h4>
                      <Link to="/production/inertMaterial">
                        ქვიშახრეში  <br />
                        ხრეში ღორღი
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
              {/* <!-- single-well end--> */}
              <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="well-services">
                  <div class="well-icon">
                    <Link to="/services">
                      <i class="flaticon-truck-1"></i>
                    </Link>
                  </div>
                  <div class="well-content">
                    <h4>
                      <Link to="/services">
                        თვითმცლელი სატვირთო <br />
                        მანქანის მომსახურება
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
              {/* <!-- single-well end--> */}
              <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="well-services ">
                  <div class="well-icon">
                    <Link to="/services">
                      <i className="flaticon-digger"></i>
                    </Link>
                  </div>
                  <div class="well-content">
                    <h4>
                      <Link to="/services">
                        JCB ტრაქტორის
                        <br /> მომსახურება
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
              {/* <!-- single-well end--> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Welcome service area End --> */}
    </>
  );
}

export default Welcome;
