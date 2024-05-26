import "./Footer1.css";

const Footer1 = ({ className = "" }) => {
  return (
    <footer className={`footer1 ${className}`}>
      <div className="heading-6-help-group">
        <b className="heading-64">Help</b>
        <div className="help-links1">
          <div className="item-link-container4">
            <p className="esim-setup-guide1">eSIM setup guide</p>
            <p className="supported-phones1">Supported Phones</p>
            <p className="faqs1">FAQs</p>
          </div>
          <div className="help2">
            <span className="help-txt-container1">
              <span>{`️ `}</span>
              <span className="help3">Help ⚠</span>
            </span>
          </div>
          <div className="item-link-container5">
            <p className="contact-us2">Contact us</p>
            <p className="about-us1">About us</p>
          </div>
        </div>
      </div>
      <div className="heading-6-legal-group">
        <b className="heading-65">Legal</b>
        <p className="item-link-container6">
          <span className="terms-conditions1">{`Terms & Conditions`}</span>
          <span className="privacy-policy1">Privacy Policy</span>
          <span className="cookie-policy1">Cookie Policy</span>
          <span className="refund-policy1">Refund Policy</span>
          <span className="cookies-preferences1">Cookies preferences</span>
        </p>
      </div>
      <div className="heading-6-earn-with-esims-group">
        <b className="heading-66">Earn with eSIMs</b>
        <div className="item-link-container7">
          <p className="affiliate-program1">Affiliate program</p>
          <p className="reseller-program1">Reseller program</p>
        </div>
      </div>
      <div className="heading-6-common-destination-parent">
        <b className="heading-67">Common destinations</b>
        <div className="destination-links3">
          <div className="frame-parent">
            <div className="item-link-europe-group">
              <div className="item-link15">Europe</div>
              <div className="albania-u-s">
                <div className="item-link16">Albania</div>
              </div>
            </div>
            <div className="item-link-turkey-group">
              <div className="item-link17">Turkey</div>
              <div className="item-link-united-states-wrapper">
                <div className="item-link18">United States</div>
              </div>
            </div>
          </div>
          <div className="greece-bulgaria-parent">
            <div className="greece-bulgaria">
              <div className="item-link19">Greece</div>
              <div className="item-link20">Bulgaria</div>
            </div>
            <div className="croatia-italy">
              <div className="item-link21">Croatia</div>
              <div className="item-link22">Italy</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
