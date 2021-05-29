import React, { useEffect } from "react";
import SingleProduct from "./SingleProduct/SingleProduct";

import s1 from "../../assets/img/service/block_2.jpg";
import s2 from "../../assets/img/service/block_1.jpg";
import s3 from "../../assets/img/service/services_7.jpg";
import s4 from "../../assets/img/service/services_8.jpg";
import s5 from "../../assets/img/service/services_6.jpg";
import s6 from "../../assets/img/service/services_3.jpg";


function ProductionPage(props) {
  const productType = props.match.params.productName;
  console.log(productType);



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
