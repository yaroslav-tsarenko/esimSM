import "./Footer2.css";

const Footer2 = ({ className = "" }) => {
  return (
    <div className={`footer3 ${className}`}>
      <div className="footer-content2">
        <div className="footer-columns">
          <div className="help-column">
            <div className="help-links3">
              <b className="heading-612">Pomoc</b>
              <div className="help-items">
                <p className="item-link-container12">
                  <span>
                    <span className="przewodnik-dotyczcy-konfigura">
                      Przewodnik dotyczący konfiguracji eSIM
                    </span>
                    <span className="obsugiwane-telefony">
                      Obsługiwane telefony
                    </span>
                    <span className="czsto-zadawane-pytania">
                      Często zadawane pytania
                    </span>
                  </span>
                </p>
                <div className="pomoc">
                  <span className="pomoc-txt-container">
                    <span>{`️ `}</span>
                    <span className="pomoc1">Pomoc ⚠</span>
                  </span>
                </div>
                <div className="item-link-container13">
                  <p className="skontaktuj-si-z">Skontaktuj się z nami.</p>
                  <p className="o-nas">O nas</p>
                </div>
              </div>
            </div>
            <div className="legal-column">
              <b className="heading-613">Prawny</b>
              <p className="item-link-container14">
                <span className="warunki-uytkowania">Warunki użytkowania</span>
                <span className="polityka-prywatnoci">
                  Polityka prywatności
                </span>
                <span className="polityka-plikw-cookie">
                  Polityka plików cookie
                </span>
                <span className="polityka-zwrotw">Polityka zwrotów</span>
                <span className="preferencje-dotyczce-plikw">
                  Preferencje dotyczące plików cookie
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="destinations-column">
          <b className="heading-614">Popularne destynacje</b>
          <div className="destination-links5">
            <div className="europe-destinations">
              <div className="item-link35">Europa</div>
              <div className="albania-link">
                <div className="item-link36">Albania</div>
              </div>
              <div className="item-link37">Grecja</div>
              <div className="item-link38">Bułgaria</div>
            </div>
            <div className="turkey-u-s-a-destinations">
              <div className="item-link39">Turcja</div>
              <div className="item-link40">Stany Zjednoczone</div>
              <div className="croatia-link">
                <div className="item-link41">Chorwacja</div>
              </div>
              <div className="italy-link">
                <div className="item-link42">Włochy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="earn-column">
        <b className="heading-615">Zarabiaj dzięki eSIM</b>
        <div className="item-link-container15">
          <p className="program-partnerski">Program partnerski</p>
          <p className="program-sprzedawcy">Program sprzedawcy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
