import Nav from "./Nav";
import Background2 from "./Background2";
import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <section className={`content ${className}`}>
      <Nav />
      <Background2 />
    </section>
  );
};



export default Content;
