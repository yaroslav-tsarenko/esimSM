import "./Background2.css";

const Background2 = ({ className = "" }) => {
  return (
    <div className={`background ${className}`}>
      <div className="hero-container">
        <div className="hero-content">
          <div className="travel-without-worrying-about-parent">
            <h1 className="travel-without-worrying-container">
              <p className="travel-without-worrying">
                Travel without worrying about
              </p>
              <p className="roaming">roaming</p>
            </h1>
            <p className="choose-your-destination-container">
              <span className="choose-your-destination">
                Choose your destination, activate your eSIM in 3 minutes and use
                our data
              </span>
              <span className="plans-to-avoid">
                plans to avoid unexpected charges.
              </span>
            </p>
          </div>
          <div className="hero-search">
            <div className="hero-search-container">
              <div className="hero-search-input">
                <div className="input3">
                  <input
                    className="search-destination2"
                    placeholder="Search destination"
                    type="text"
                  />
                </div>
              </div>
              <button className="button1">
                <div className="search">Search</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        className="travellerwebp-icon"
        loading="lazy"
        alt=""
        src="/travellerwebp@2x.png"
      />
    </div>
  );
};



export default Background2;
