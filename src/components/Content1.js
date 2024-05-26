import "./Content1.css";

const Content1 = ({ className = "" }) => {
  return (
    <section className={`content1 ${className}`}>
      <div className="affiliate1webp-parent">
        <img
          className="affiliate1webp-icon"
          loading="lazy"
          alt=""
          src="/affiliate1webp@2x.png"
        />
        <div className="program-details">
          <div className="program-heading-parent">
            <div className="program-heading">
              <h1 className="heading-21">Our affiliate program</h1>
              <p className="are-you-passionate-container">
                <span className="are-you-passionate">
                  Are you passionate about travel and technology? Do you have a
                  network that
                </span>
                <span className="would-benefit-from">
                  would benefit from our eSIM services? If so, our affiliate
                  program is perfect for
                </span>
                <span className="you">you!</span>
              </p>
            </div>
            <div className="program-benefits">
              <p className="by-joining-our-container">
                <span className="by-joining-our">
                  By joining our affiliate program, you can earn up to 20%
                  commission for every
                </span>
                <span className="esim-sold-through">
                  eSIM sold through your unique affiliate link. It's a simple,
                  secure, and profitable
                </span>
                <span className="way-to-monetize">
                  way to monetize your website, blog, or social media platform.
                </span>
              </p>
            </div>
            <p className="dont-miss-out-container">
              <span className="dont-miss-out">
                Don't miss out on this opportunity to become a part of our
                growing
              </span>
              <span className="community-join-our">
                community. Join our affiliate program today and start earning!
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Content1;
