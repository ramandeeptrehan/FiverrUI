import React from "react";
import "./ProductFeatures.scss";

const ProductFeatures = () => {
  return (
    <div className="productFeatures">
      <div className="container">
        <div className="left">
          <h1>A whole world of freelance talent at your fingertips</h1>
          <div className="title">
            <img src="./public/images/check.png" alt=""></img>
            Stick to your budget
          </div>
          <p>
            Find the right service for every price point. No hourly rates, just
            project-based pricing.
          </p>

          <div className="title">
            <img src="./public/images/check.png" alt=""></img>
            Get quality work done quickly
          </div>
          <p>
            Hand your project over to a talented freelancer in minutes, get
            long-lasting results.
          </p>

          <div className="title">
            <img src="./public/images/check.png" alt=""></img>
            Pay when you're happy
          </div>
          <p>
            Upfront quotes mean no surprises. Payments only get released when
            you approve.
          </p>

          <div className="title">
            <img src="./public/images/check.png" alt=""></img>
            Count on 24/7 support
          </div>
          <p>
            Our round-the-clock support team is available to help anytime,
            anywhere.
          </p>
        </div>

        <div className="right">
          <video src="./public/video/video.mp4" controls></video>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
