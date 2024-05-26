import { useMemo } from "react";
import "./Nav.css";

const Nav = ({ className = "", itemLinkColor }) => {
  const itemLinkStyle = useMemo(() => {
    return {
      color: itemLinkColor,
    };
  }, [itemLinkColor]);

  return (
    <header className={`nav1 ${className}`}>
      <div className="logo1">
        <img
          className="link-logosvg1"
          loading="lazy"
          alt=""
          src="/link--logosvg.svg"
        />
      </div>
      <nav className="auth1">
        <nav className="auth-items">
          <a className="item-link4">Login</a>
          <a className="item-link5" style={itemLinkStyle}>
            Signup
          </a>
          <a className="english1">English</a>
        </nav>
      </nav>
      <div className="navbar">
        <div className="border2" />
      </div>
      <div className="navbar1">
        <a className="usd1">USD</a>
      </div>
      <div className="navbar2">
        <div className="border3" />
      </div>
      <div className="navbar3">
        <a className="item-link6">Help ⚠</a>
      </div>
      <div className="icon1">
        <img className="svg-icon1" loading="lazy" alt="" src="/svg.svg" />
      </div>
      <div className="navbar4">
        <a className="search-destination1"> Search destination</a>
      </div>
    </header>
  );
};


export default Nav;
