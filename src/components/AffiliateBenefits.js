import "./AffiliateBenefits.css";

const AffiliateBenefits = ({ className = "" }) => {
  return (
    <section className={`affiliate-benefits ${className}`}>
      <div className="background13">
        <div className="benefit-images">
          <div className="benefit-image-pair">
            <img
              className="affiliate2webp-icon"
              loading="lazy"
              alt=""
              src="/affiliate2webp@2x.png"
            />
            <img
              className="affiliate3webp-icon"
              loading="lazy"
              alt=""
              src="/affiliate3webp@2x.png"
            />
          </div>
        </div>
        <div className="call-to-action">
          <div className="call-to-action-container">
            <div className="paragraphbackgroundborder">
              <div className="call-to-action-headings">
                <h2 className="heading-3">How it works</h2>
              </div>
              <p className="signup-on-our-container">
                <span className="signup-on-our">1. Signup on our website</span>
                <span className="open-the-affiliate">
                  2. Open the affiliate page from the top menu
                </span>
                <span className="share-your-unique">
                  3. Share your unique affiliate link with your friends and
                  family
                </span>
                <span className="earn-commission-for">
                  4. Earn commission for every eSIM sold through your link
                </span>
              </p>
            </div>
            <div className="paragraphbackgroundborder1">
              <div className="heading-3-conditions-wrapper">
                <h2 className="heading-31">Conditions</h2>
              </div>
              <p className="you-will-receive-container">
                <span className="you-will-receive">
                  You will receive a commission up to 20% for each eSIM sold.
                </span>
                <span className="keep-in-mind">
                  Keep in mind the eSIM must be activated for you to start
                  earning.
                </span>
                <span className="commissions-will-be">
                  Commissions will be paid to you via PayPal or Wire Transfer
                  once a month.
                </span>
              </p>
            </div>
          </div>
          <div className="registration">
            <div className="link4">
              <div className="register-now">Register now</div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer2">
        <div className="footer-content1">
          <div className="heading-6-common-destination-group">
            <b className="heading-68">Common destinations</b>
            <div className="destination-links4">
              <div className="destination-list">
                <div className="item-link-europe-container">
                  <div className="item-link24">Europe</div>
                  <div className="destination-pair-two">
                    <div className="item-link25">Albania</div>
                  </div>
                </div>
                <div className="item-link-turkey-container">
                  <div className="item-link26">Turkey</div>
                  <div className="item-link-united-states-container">
                    <div className="item-link27">United States</div>
                  </div>
                </div>
              </div>
              <div className="destination-pair-four-parent">
                <div className="destination-pair-four">
                  <div className="item-link28">Greece</div>
                  <div className="item-link29">Bulgaria</div>
                </div>
                <div className="destination-pair-six">
                  <div className="item-link30">Croatia</div>
                  <div className="item-link31">Italy</div>
                </div>
              </div>
            </div>
          </div>
          <div className="heading-6-help-container">
            <b className="heading-69">Help</b>
            <div className="help-links2">
              <div className="item-link-container8">
                <p className="esim-setup-guide2">eSIM setup guide</p>
                <p className="supported-phones2">Supported Phones</p>
                <p className="faqs2">FAQs</p>
              </div>
              <div className="help4">
                <span className="help-txt-container2">
                  <span>{`️ `}</span>
                  <span className="help5">Help ⚠</span>
                </span>
              </div>
              <div className="item-link-container9">
                <p className="contact-us3">Contact us</p>
                <p className="about-us2">About us</p>
              </div>
            </div>
          </div>
          <div className="heading-6-legal-container">
            <b className="heading-610">Legal</b>
            <p className="item-link-container10">
              <span className="terms-conditions2">{`Terms & Conditions`}</span>
              <span className="privacy-policy2">Privacy Policy</span>
              <span className="cookie-policy2">Cookie Policy</span>
              <span className="refund-policy2">Refund Policy</span>
              <span className="cookies-preferences2">Cookies preferences</span>
            </p>
          </div>
        </div>
        <div className="affiliate-promotion">
          <b className="heading-611">Earn with eSIMs</b>
          <div className="item-link-container11">
            <p className="affiliate-program2">Affiliate program</p>
            <p className="reseller-program2">Reseller program</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default AffiliateBenefits;
