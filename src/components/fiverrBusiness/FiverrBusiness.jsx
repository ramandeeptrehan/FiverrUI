import React from "react";
import "./FiverrBusiness.scss";

const FiverrBusiness = () => {
  return (
    <div className="fiverrBusiness">
      <div className="component">
        <div className="left">
          <h1>fiverr business</h1>
          <h1>A business solution designed for teams</h1>
          <p>
            Upgrade to a curated experience to access vetted talent and
            exclusive tools
          </p>

          <div className="title">
            <img src="./public/images/check.png" alt=""></img>
            Talent matching
          </div>

          <div className="title">
            <img src="./public/images/check.png" alt=""></img>
            Dedicated account management
          </div>

          <div className="title">
            <img src="./public/images/check.png" alt=""></img>
            Team collaboration tools
          </div>

          <div className="title">
            <img src="./public/images/check.png" alt=""></img>
            Business payment solutions
          </div>

          <button>Explore Fiverr Business</button>
        </div>

        <div className="right">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};

export default FiverrBusiness;
