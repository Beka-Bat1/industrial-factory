import React from "react";

import p6 from "../../../assets/img/service/1.jpg";
import p5 from "../../../assets/img/service/2.jpg";
import p4 from "../../../assets/img/service/3.jpg";
import p3 from "../../../assets/img/service/4.jpg";
import p2 from "../../../assets/img/service/5.jpg";
import p1 from "../../../assets/img/service/6.jpg";
import SingleGalleryItem from "./SingleGalleryItem/SingleGalleryItem";

function GallerySection() {
  const gallerySectionItems = [
    {
      sectionImage: p1,
      sectionImageName: "ბლოკები",
      id: 32,
    },
    {
      sectionImage: p2,
      sectionImageName: "ბლოკები",
      id: Math.floor(Math.random() * 100),
    },
    {
      sectionImage: p3,
      sectionImageName: "ბლოკები",
      id: Math.floor(Math.random() * 100),
    },
    {
      sectionImage: p4,
      sectionImageName: "ბლოკები",
      id: Math.floor(Math.random() * 100),
    },
    {
      sectionImage: p5,
      sectionImageName: "ბლოკები",
      id: Math.floor(Math.random() * 100),
    },
    {
      sectionImage: p6,
      sectionImageName: "ბლოკები",
      id: Math.floor(Math.random() * 100),
    },
  ];

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
              {gallerySectionItems.map((item) => {
                return (
                  <SingleGalleryItem
                    sectionImage={item.sectionImage}
                    sectionImageName={item.sectionImageName}
                    key={item.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GallerySection;
