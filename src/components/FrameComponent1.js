import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`how-it-works ${className}`}>
      <div className="background3">
        <div className="background4">
          <div className="background5">
            <b className="how-it-works1">1</b>
          </div>
          <div className="how-it-works-content-items-wrapper">
            <div className="how-it-works-content-items">
              <b className="heading-56">Choose your plan</b>
              <div className="choose-the-duration-container1">
                <p className="choose-the-duration1">
                  Choose the duration and amount of GB
                </p>
                <p className="you-need">you need</p>
              </div>
            </div>
          </div>
          <img
            className="how-it-works-step1webp-icon"
            alt=""
            src="/howitworksstep1webp@2x.png"
          />
        </div>
        <div className="configuration">
          <div className="background6">
            <div className="background7">
              <b className="b">2</b>
            </div>
            <div className="configuration-container">
              <div className="configuration-title">
                <b className="heading-57">Configure your phone</b>
                <div className="the-setup-takes">
                  The setup takes less than 1 minute
                </div>
              </div>
            </div>
            <img
              className="how-it-works-step2webp-icon"
              alt=""
              src="/howitworksstep2webp@2x.png"
            />
          </div>
        </div>
        <div className="background8">
          <div className="background9">
            <b className="b1">3</b>
          </div>
          <div className="background-inner">
            <div className="heading-5-go-online-parent">
              <b className="heading-58">Go online</b>
              <p className="enable-roaming-on-container">
                <span className="enable-roaming-on">
                  Enable roaming on your new data plan
                </span>
                <span className="and-enjoy-your">
                  and enjoy your fast connection!
                </span>
              </p>
            </div>
          </div>
          <img
            className="how-it-works-step2webp-icon1"
            alt=""
            src="/howitworksstep2webp-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};



export default FrameComponent1;
