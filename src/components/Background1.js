import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import "./Background1.css";

const Background1 = ({ className = "" }) => {
  return (
    <div className={`background10 ${className}`}>
      <div className="f-a-q-container">
        <div className="f-a-q-title">
          <div className="f-a-q-heading">
            <b className="heading-2">FAQ</b>
          </div>
          <p className="read-the-answers">
            Read the answers to the most common questions. If you still have
            doubts, write us!
          </p>
        </div>
      </div>
      <div className="f-a-q-questions">
        <div className="questions-container">
          <FrameComponent
            whatIsAnESIM="What is an eSIM?"
            howDoIActivateMyESIM="How do I activate my eSIM?"
          />
          <FrameComponent
            whatIsAnESIM="What is the difference between a physical SIM and an eSIM?"
            howDoIActivateMyESIM="How do I know if my phone supports eSIM?"
            propMargin="0"
            propMinHeight="unset"
            propMinHeight1="unset"
          />
        </div>
        <div className="background11">
          <div className="contact-container">
            <p className="cannot-find-the">
              Cannot find the answer you were looking for? Write us!
            </p>
          </div>
          <div className="link3">
            <div className="contact-us">Contact us</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Background1;
