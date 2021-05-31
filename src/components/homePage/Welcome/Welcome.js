import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <>
      {/* <!-- Welcome service area start --> */}
      <div class="welcome-area welcome-area-2 area-padding">
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
                    <p>
                      Aspernatur sit adipisci quaerat unde at neque Redug Lagre
                      dolor sit amet.
                    </p>
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
                        მიწახრეში, <br />
                        ხრეში, ღორღი
                      </Link>
                    </h4>
                    <p>
                      Aspernatur sit adipisci quaerat unde at neque Redug Lagre
                      dolor sit amet.
                    </p>
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
                      <a href="#">
                        თვითმცლელი სატვირთო <br />
                        მანქანის მომსახურება
                      </a>
                    </h4>
                    <p>
                      Aspernatur sit adipisci quaerat unde at neque Redug Lagre
                      dolor sit amet.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- single-well end--> */}
              <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="well-services ">
                  <div class="well-icon">
                    <a href="#">
                      <i
                        className="flaticon-digger"
                        style={{ fontWeight: "bolder !important" }}
                      ></i>
                    </a>
                  </div>
                  <div class="well-content">
                    <h4>
                      <a href="#">
                        JCB ტრაქტორის
                        <br /> მომსახურება
                      </a>
                    </h4>
                    <p>
                      Aspernatur sit adipisci quaerat unde at neque Redug Lagre
                      dolor sit amet.
                    </p>
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
