import React from "react";

const GalleryItem = (props) => {
  return (
    <div class="col-md-6 col-sm-6 col-xs-12 ">
      <div class="single-awesome-project">
        <div class="awesome-img">
          <a href="#">
            <img src={props.galleryImage} alt="" />
          </a>
          <div class="add-actions">
            <a class="venobox" data-gall="myGallery" href={props.galleryImage}>
              <i class="port-icon icon icon-picture"></i>
            </a>
          </div>
        </div>
        <div class="project-dec">
          <h4>
            <a href="#">{props.galleryItemName}</a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
