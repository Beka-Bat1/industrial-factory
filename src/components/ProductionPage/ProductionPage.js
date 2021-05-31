import React, { useEffect } from "react";
import SingleProduct from "./SingleProduct/SingleProduct";

import s1 from "../../assets/img/g1.jpg";
import s2 from "../../assets/img/g2.jpg";
import s3 from "../../assets/img/g3.jpg";
import s4 from "../../assets/img/g4.jpg";
import s5 from "../../assets/img/g5.jpg";
import s6 from "../../assets/img/g6.jpg";

function ProductionPage(props) {
  /* get params from Router */
  const productType = props.match.params.productName;

  useEffect(() => {
    window.scrollTo(0,150)
  }, [])

  const products = {
    block1: [
      {
        productImage: s1,
        productHeader: "0,9",
        productDetails: "15x15x15",
      },
      { productImage: s1, productHeader: "0,9", productDetails: "15x15x15" },
      {
        productImage: s1,
        productHeader: "0,9",
        productDetails: "15x15x15",
      },
    ],
    block2: [
      {
        productImage: s2,
        productHeader: "0,9",
        productDetails: "15x15x15",
      },
      { productImage: s2, productHeader: "0,9", productDetails: "15x15x15" },
      {
        productImage: s2,
        productHeader: "0,9",
        productDetails: "15x15x15",
      },
    ],
    inertMaterial: [
      {
        productImage: s3,
        productHeader: "0,9",
        productDetails: "15x15x15",
      },
      { productImage: s3, productHeader: "0,9", productDetails: "15x15x15" },
      {
        productImage: s3,
        productHeader: "0,9",
        productDetails: "15x15x15",
      },
    ],
  };

  return (
    <>
      <div class="blog-area area-padding">
        <div class="container">
          <div class="row">
            <div class="blog-grid home-blog">
              {products[productType].map((product) => (
                <SingleProduct
                  productImage={product.productImage}
                  productHeader={product.productHeader}
                  productDetails={product.productDetails}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductionPage;
