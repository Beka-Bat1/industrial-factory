import React, { useEffect } from "react";

import s1 from "../../assets/img/g1.jpg";
import s2 from "../../assets/img/g2.jpg";
import s3 from "../../assets/img/g3.jpg";
import s4 from "../../assets/img/g4.jpg";
import s5 from "../../assets/img/g5.jpg";
import s6 from "../../assets/img/g6.jpg";
import GalleryItem from "./GalleryItem/GalleryItem";

function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 150);
  }, []);
  const galleryItems = [
    {
      name: "სათუთი ბლოკები",
      image: s1,
      id: Math.floor(Math.random() * 1000),
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "სათუთი ბლოკები",
      image: s2,
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "სათუთი ბლოკები",
      image: s3,
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "სათუთი ბლოკები",
      image: s4,
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "სათუთი ბლოკები",
      image: s5,
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "სათუთი ბლოკები",
      image: s6,
    },
  ];

  return (
    <>
      {/* <!-- Start project Area --> */}
      <div class="project-area area-padding">
        <div class="container">
          <div class="row">
            <div class="project-content">
              {galleryItems.map((item) => {
                const { image, name } = { ...item };
                return (
                  <GalleryItem
                    galleryImage={image}
                    galleryItemName={item.name}
                    key={item.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
        {/* <!-- End main content --> */}
      </div>
      {/* <!-- End project Area --> */}
    </>
  );
}

export default GalleryPage;
