import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  useEffect(() => {
    window.scrollTo(0, 150);
  }, []);
  return (
    <>
      <div class="page-head area-padding" style={{ marginTop: "25%" }}>
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="row">
                <div class="error-page">
                  {/* <!-- map area --> */}
                  <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="error-main-text text-center">
                      <h2 class="error-easy-text">შეცდომა</h2>
                      <h1 class="high-text">
                        4<span class="color">0</span>4
                      </h1>
                      <h3 class="error-bot">დაბრუნდი მთავარ გვერძე</h3>

                      <Link className="error-btn" to="/">
                        მთავარი გვერძე
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
    </>
  );
}

export default ErrorPage;
