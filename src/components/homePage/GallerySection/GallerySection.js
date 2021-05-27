import React from "react";
import "./GallerySection.css";

import p6 from "../../../assets/img/project/p6.jpg";
import p5 from "../../../assets/img/project/p5.jpg";
import p4 from "../../../assets/img/project/p4.jpg";
import p3 from "../../../assets/img/project/p3.jpg";
import p2 from "../../../assets/img/project/p2.jpg";
import p1 from "../../../assets/img/project/p1.jpg";

function GallerySection() {
  return (
    <>
      <div class="project-area area-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="section-headline text-center">
                <h3>გალერეა</h3>
               
              </div>
            </div>
          </div>
          <div class="row">
            <div class="project-content project-content-4">
              {/* <!-- single-awesome-project start --> */}
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="single-awesome-project">
                  <div class="awesome-img">
                    <a href="#">
                      <img src={p1} alt="" />
                    </a>
                    <div class="add-actions">
                      <a class="venobox" data-gall="myGallery" href={p1}>
                        <i class="port-icon icon icon-picture"></i>
                      </a>
                    </div>
                  </div>
                  <div class="project-dec">
                    <h4>
                      <a href="#">Industry Construction</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-xs-12">
                {/* <!-- single-awesome-project start --> */}
                <div class="single-awesome-project">
                  <div class="awesome-img">
                    <a href="#">
                      <img src={p2} alt="" />
                    </a>
                    <div class="add-actions">
                      <a class="venobox" data-gall="myGallery" href={p2}>
                        <i class="port-icon icon icon-picture"></i>
                      </a>
                    </div>
                  </div>
                  <div class="project-dec">
                    <h4>
                      <a href="#">Automotive manufacturing</a>
                    </h4>
                  </div>
                </div>
                {/* <!-- single-awesome-project end --> */}
              </div>
              <div class="col-md-4 col-sm-6 col-xs-12">
                {/* <!-- single-awesome-project start --> */}
                <div class="single-awesome-project">
                  <div class="awesome-img">
                    <a href="#">
                      <img src={p3} alt="" />
                    </a>
                    <div class="add-actions ">
                      <a class="venobox" data-gall="myGallery" href={p3}>
                        <i class="port-icon icon icon-picture"></i>
                      </a>
                    </div>
                  </div>
                  <div class="project-dec">
                    <h4>
                      <a href="#">Solar Energy System</a>
                    </h4>
                  </div>
                </div>
                {/* <!-- single-awesome-project end --> */}
              </div>
              <div class="col-md-4 col-sm-6 col-xs-12">
                {/* <!-- single-awesome-project start --> */}
                <div class="single-awesome-project">
                  <div class="awesome-img">
                    <a href="#">
                      <img src={p4} alt="" />
                    </a>
                    <div class="add-actions">
                      <a class="venobox" data-gall="myGallery" href={p4}>
                        <i class="port-icon icon icon-picture"></i>
                      </a>
                    </div>
                  </div>
                  <div class="project-dec">
                    <h4>
                      <a href="#">Agricultural Projects</a>
                    </h4>
                  </div>
                </div>
                {/* <!-- single-awesome-project end --> */}
              </div>
              <div class="col-md-4 col-sm-6 col-xs-12">
                {/* <!-- single-awesome-project start --> */}
                <div class="single-awesome-project">
                  <div class="awesome-img">
                    <a href="#">
                      <img src={p5} alt="" />
                    </a>
                    <div class="add-actions">
                      <a class="venobox" data-gall="myGallery" href={p5}>
                        <i class="port-icon icon icon-picture"></i>
                      </a>
                    </div>
                  </div>
                  <div class="project-dec">
                    <h4>
                      <a href="#">Oil fields Projects</a>
                    </h4>
                  </div>
                </div>
                {/* <!-- single-awesome-project end --> */}
              </div>
              <div class="col-md-4 col-sm-6 col-xs-12">
                {/* <!-- single-awesome-project start --> */}
                <div class="single-awesome-project">
                  <div class="awesome-img">
                    <a href="#">
                      <img src={p6} alt="" />
                    </a>
                    <div class="add-actions">
                      <a class="venobox" data-gall="myGallery" href={p6}>
                        <i class="port-icon icon icon-picture"></i>
                      </a>
                    </div>
                  </div>
                  <div class="project-dec">
                    <h4>
                      <a href="#">Chamical Projects</a>
                    </h4>
                  </div>
                </div>
                {/* <!-- single-awesome-project end --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GallerySection;
