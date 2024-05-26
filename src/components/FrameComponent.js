import { useMemo } from "react";
import "./FrameComponent.css";

const FrameComponent = ({
  className = "",
  whatIsAnESIM,
  howDoIActivateMyESIM,
  propMargin,
  propMinHeight,
  propMinHeight1,
}) => {
  const whatIsAnStyle = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  const imageIconStyle = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  const imageIcon1Style = useMemo(() => {
    return {
      minHeight: propMinHeight1,
    };
  }, [propMinHeight1]);

  return (
    <div className={`question-items ${className}`}>
      <div className="backgroundborder">
        <div className="heading-2-button">
          <div className="what-is-an" style={whatIsAnStyle}>
            {whatIsAnESIM}
          </div>
          <img
            className="image-icon"
            alt=""
            src="/image.svg"
            style={imageIconStyle}
          />
        </div>
      </div>
      <div className="backgroundborder1">
        <div className="heading-2-button1">
          <div className="how-do-i">{howDoIActivateMyESIM}</div>
          <img
            className="image-icon1"
            alt=""
            src="/image.svg"
            style={imageIcon1Style}
          />
        </div>
      </div>
    </div>
  );
};



export default FrameComponent;
