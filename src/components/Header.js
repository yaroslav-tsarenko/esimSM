import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <section className={`header ${className}`}>
      <header className="nav2">
        <div className="logo2">
          <img
            className="link-logosvg2"
            loading="lazy"
            alt=""
            src="/link--logosvg.svg"
          />
        </div>
        <nav className="user-actions">
          <nav className="login-signup">
            <a className="item-link32">Zaloguj się</a>
            <a className="item-link33">Zapisać się</a>
            <a className="polski">Polski</a>
          </nav>
        </nav>
        <div className="nav-links">
          <div className="border4" />
        </div>
        <div className="nav-links1">
          <a className="usd2">USD</a>
        </div>
        <div className="nav-links2">
          <div className="border5" />
        </div>
        <div className="nav-links3">
          <a className="item-link34">Pomoc ⚠</a>
        </div>
        <div className="language-icon">
          <img className="svg-icon2" loading="lazy" alt="" src="/svg.svg" />
        </div>
        <div className="nav-links4">
          <a className="szukaj-celu-podry"> Szukaj celu podróży</a>
        </div>
      </header>
      <div className="background14">
        <div className="hero-content2">
          <div className="zosta-sprzedawc-esim-parent">
            <div className="zosta-sprzedawc-esim-container">
              <p className="zosta">Zostań</p>
              <p className="sprzedawc">sprzedawcą</p>
              <p className="esim">eSIM</p>
            </div>
            <div className="reseller-benefits">
              <p className="zaoferuj-swoim-klientom-container">
                <span className="zaoferuj-swoim-klientom">
                  Zaoferuj swoim klientom nową usługę w ponad 100
                </span>
                <span className="krajach-objtych-usug">
                  krajach objętych usługą. Zostań sprzedawcą i
                </span>
                <span className="zacznij-zarabia-pienidze">
                  zacznij zarabiać pieniądze już dziś.
                </span>
              </p>
              <button className="link5">
                <div className="popro-o-rejestracj">Poproś o rejestrację</div>
              </button>
            </div>
          </div>
        </div>
        <img
          className="reseller-1webp-icon"
          loading="lazy"
          alt=""
          src="/reseller1webp@2x.png"
        />
      </div>
    </section>
  );
};

export default Header;
