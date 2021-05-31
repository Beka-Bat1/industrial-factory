import React from "react";

function SingleProduct(props) {
  return (
    <>
      <div class="col-md-4 col-sm-6 col-xs-12">
        <div class="single-blog">
          <div class="blog-image">
            <a class="image-scale">
              <img src={props.productImage} alt="" width="400" height="300" />
            </a>
          </div>
          <div class="blog-content">
            <div class="blog-title">
              <a>
                <h4>{props.productHeader}</h4>
              </a>
            </div>
            <div class="blog-text">
              <p>{props.productDetails}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
