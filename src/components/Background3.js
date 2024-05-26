import "./Background3.css";

const Background3 = ({ className = "" }) => {
  return (
    <section className={`background1 ${className}`}>
      <div className="verticalborder">
        <div className="features-headers">
          <b className="heading-5">Can I use eSIM?</b>
        </div>
        <div className="features-descriptions">
          <div className="description-item">
            <div className="not-all-devices">
              Not all devices are eSIM ready. Click here to
            </div>
          </div>
          <div className="compatibility">
            <div className="compatibility-link">
              <div className="check-if-your">{`check if your device is compatible: `}</div>
            </div>
            <u className="compatible">compatible</u>
          </div>
          <div className="devices">
            <u className="devices1">devices</u>
          </div>
        </div>
      </div>
      <div className="paragraphverticalborder">
        <div className="heading-5-keep-whatsapp-wrapper">
          <b className="heading-51">Keep WhatsApp</b>
        </div>
        <p className="keep-your-whatsapp-container">
          <span className="keep-your-whatsapp">
            Keep your WhatsApp number on your phone.
          </span>
          <span className="you-can-use">
            You can use your eSIM for data roaming.
          </span>
        </p>
      </div>
      <div className="activation">
        <div className="paragraphverticalborder1">
          <div className="activation-title">
            <b className="heading-52">Immediate Activation</b>
          </div>
          <p className="instantly-receive-your-container">
            <span className="instantly-receive-your">
              Instantly receive your QR code for hassle-free
            </span>
            <span className="activation-and-connect">
              activation and connect as soon as you land.
            </span>
          </p>
        </div>
      </div>
      <div className="sim">
        <div className="sim-content">
          <div className="sim-title">
            <b className="heading-53">No SIM Card</b>
          </div>
          <p className="no-need-to-container">
            <span className="no-need-to">
              No need to change your SIM card. You can use
            </span>
            <span className="your-esim-with">
              your eSIM with your current phone.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};



export default Background3;
