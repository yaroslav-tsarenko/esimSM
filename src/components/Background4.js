import "./Background4.css";

const Background4 = ({ className = "" }) => {
  return (
    <div className={`background12 ${className}`}>
      <img
        className="fromwebp-icon"
        loading="lazy"
        alt=""
        src="/fromwebp@2x.png"
      />
      <div className="hero-content1">
        <div className="heading-1-become-an-affiliat-parent">
          <h1 className="heading-12">Become an affiliate</h1>
          <div className="hero-description">
            <p className="earn-money-by-container">
              <span className="earn-money-by">
                Earn money by sharing your affiliate link with your
              </span>
              <span className="friends-and-family">friends and family</span>
            </p>
          </div>
        </div>
      </div>
      <img className="towebp-icon" loading="lazy" alt="" src="/towebp@2x.png" />
    </div>
  );
};



export default Background4;
