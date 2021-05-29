import React from "react";

function SingleGalleryItem(props) {
  return (
    <>
      <div class="col-md-4 col-sm-6 col-xs-12">
        {/* <!-- single-awesome-project start --> */}
        <div class="single-awesome-project">
          <div class="awesome-img">
            <a href="#">
              <img src={props.sectionImage} alt="" />
            </a>
            <div class="add-actions">
              <a
                class="venobox"
                data-gall="myGallery"
                href={props.sectionImage}
              >
                <i class="port-icon icon icon-picture"></i>
              </a>
            </div>
          </div>
          <div class="project-dec">
            <h4>
              <a>{props.sectionImageName}</a>
            </h4>
          </div>
        </div>
        {/* <!-- single-awesome-project end --> */}
      </div>
    </>
  );
}

export default SingleGalleryItem;
