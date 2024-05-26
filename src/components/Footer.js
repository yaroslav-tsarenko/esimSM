import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <div className={`footer ${className}`}>
      <div className="footer-container">
        <div className="footer-content">
          <b className="heading-6">Common destinations</b>
          <div className="destinations-list">
            <div className="item-link-europe-parent">
              <div className="item-link7">Europe</div>
              <div className="destination-item">
                <div className="item-link8">Albania</div>
              </div>
              <div className="item-link9">Greece</div>
              <div className="item-link10">Bulgaria</div>
            </div>
            <div className="item-link-turkey-parent">
              <div className="item-link11">Turkey</div>
              <div className="destination-item1">
                <div className="item-link12">United States</div>
              </div>
              <div className="item-link13">Croatia</div>
              <div className="item-link14">Italy</div>
            </div>
          </div>
        </div>
        <div className="heading-6-help-parent">
          <b className="heading-61">Help</b>
          <div className="help-links">
            <div className="item-link-container">
              <p className="esim-setup-guide">eSIM setup guide</p>
              <p className="supported-phones">Supported Phones</p>
              <p className="faqs">FAQs</p>
            </div>
            <div className="help">
              <span className="help-txt-container">
                <span>{`️ `}</span>
                <span className="help1">Help ⚠</span>
              </span>
            </div>
            <div className="item-link-container1">
              <p className="contact-us1">Contact us</p>
              <p className="about-us">About us</p>
            </div>
          </div>
        </div>
        <div className="heading-6-legal-parent">
          <b className="heading-62">Legal</b>
          <p className="item-link-container2">
            <span className="terms-conditions">{`Terms & Conditions`}</span>
            <span className="privacy-policy">Privacy Policy</span>
            <span className="cookie-policy">Cookie Policy</span>
            <span className="refund-policy">Refund Policy</span>
            <span className="cookies-preferences">Cookies preferences</span>
          </p>
        </div>
      </div>
      <div className="heading-6-earn-with-esims-parent">
        <b className="heading-63">Earn with eSIMs</b>
        <div className="item-link-container3">
          <p className="affiliate-program">Affiliate program</p>
          <p className="reseller-program">Reseller program</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
