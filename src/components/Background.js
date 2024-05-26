import Link from "./Link";
import PropTypes from "prop-types";
import "./Background.css";

const Background = ({ className = "" }) => {
  return (
    <div className={`background2 ${className}`}>
      <div className="destination-links">
        <Link
          europepng="/-europepng@2x.png"
          heading5Europe="Europe"
          from420="from $4.20"
          background="/background.svg"
        />
        <Link
          europepng="/grpng@2x.png"
          heading5Europe="Greece"
          from420="from $3.80"
          background="/background-1.svg"
          propMinWidth="59.1px"
        />
      </div>
      <div className="destination-links1">
        <Link
          europepng="/trpng@2x.png"
          heading5Europe="Turkey"
          from420="from $3.70"
          background="/background.svg"
          propMinWidth="58px"
        />
        <Link
          europepng="/hrpng@2x.png"
          heading5Europe="Croatia"
          from420="from $3.80"
          background="/background-1.svg"
          propMinWidth="61px"
        />
      </div>
      <div className="destination-links2">
        <Link
          europepng="/alpng@2x.png"
          heading5Europe="Albania"
          from420="from $3.80"
          background="/background.svg"
          propMinWidth="64px"
        />
        <Link
          europepng="/bgpng@2x.png"
          heading5Europe="Bulgaria"
          from420="from $3.80"
          background="/background-1.svg"
          propMinWidth="71px"
        />
      </div>
      <div className="usa">
        <div className="link1">
          <div className="usa-items">
            <div className="usa-image">
              <div className="usa-icon">
                <img className="uspng-icon" alt="" src="/uspng@2x.png" />
              </div>
              <div className="usa-title">
                <b className="heading-55">United States</b>
                <div className="from-360">from $3.60</div>
              </div>
            </div>
          </div>
          <img className="background-icon1" alt="" src="/background.svg" />
        </div>
        <Link
          europepng="/itpng@2x.png"
          heading5Europe="Italy"
          from420="from $3.70"
          background="/background-1.svg"
          propMinWidth="37px"
        />
      </div>
      <div className="plans">
        <h3 className="our-plans-to-container">
          <p className="our-plans-to">Our plans to most</p>
          <p className="common-destinations">common destinations</p>
        </h3>
        <div className="plans-description">
          <p className="choose-the-duration-container">
            <span className="choose-the-duration">
              Choose the duration, the GB amount
            </span>
            <span className="you-need-and">
              you need and get your eSIM now!
            </span>
          </p>
          <button className="link2">
            <div className="find-our-destinations">Find our destinations</div>
          </button>
        </div>
      </div>
    </div>
  );
};


export default Background;
