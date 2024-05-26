import { useMemo } from "react";
import "./Link.css";

const Link = ({
  className = "",
  europepng,
  heading5Europe,
  from420,
  background,
  propMinWidth,
}) => {
  const heading5Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`link ${className}`}>
      <div className="destination-images">
        <img className="europepng-icon" loading="lazy" alt="" src={europepng} />
      </div>
      <div className="destination-titles-container">
        <div className="destination-titles">
          <b className="heading-54" style={heading5Style}>
            {heading5Europe}
          </b>
          <div className="from-420">{from420}</div>
        </div>
      </div>
      <img className="background-icon" loading="lazy" alt="" src={background} />
    </div>
  );
};


export default Link;
