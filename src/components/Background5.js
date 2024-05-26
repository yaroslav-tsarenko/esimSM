import "./Background5.css";

const Background5 = ({ className = "" }) => {
  return (
    <div className={`background16 ${className}`}>
      <div className="form-content">
        <div className="form-fields">
          <div className="reseller-heading">
            <h1 className="heading-23">Zostań sprzedawcą!</h1>
          </div>
          <p className="wypenij-poniszy-formularz-container">
            <span className="wypenij-poniszy-formularz">
              Wypełnij poniższy formularz, aby poprosić o rejestrację w naszym
              programie
            </span>
            <span className="dla-sprzedawcw-nasz">
              dla sprzedawców. Nasz zespół rozpatrzy Twoją prośbę i skontaktuje
              się z Tobą
            </span>
            <span className="tak-szybko-jak">tak szybko, jak to możliwe.</span>
          </p>
        </div>
      </div>
      <div className="contact-info">
        <div className="name-email">
          <div className="name-email-inputs">
            <div className="input8">
              <div className="container">
                <div className="imi-i-nazwisko">
                  Imię i nazwisko lub nazwa firmy
                </div>
              </div>
            </div>
            <div className="input9">
              <div className="container1">
                <div className="email">Email</div>
              </div>
            </div>
          </div>
        </div>
        <div className="website-info">
          <div className="website-field">
            <div className="input10">
              <div className="container2">
                <div className="twoja-strona-internetowa">
                  Twoja strona internetowa
                </div>
              </div>
            </div>
          </div>
          <div className="options">
            <div className="container3">
              <div className="prognoza-sprzeday-esim">
                Prognoza sprzedaży eSIM
              </div>
            </div>
            <div className="forecast-image">
              <img className="image-icon2" alt="" src="/image1.svg" />
            </div>
          </div>
        </div>
        <div className="business-details">
          <div className="combobox-menu">
            <div className="textbox">
              <div className="kraj">Kraj</div>
            </div>
            <div className="country-business-icons">
              <img className="image-icon3" alt="" src="/image1.svg" />
            </div>
          </div>
          <div className="options1">
            <div className="container4">
              <div className="rodzaj-dziaalnoci">Rodzaj działalności</div>
            </div>
            <div className="image-wrapper">
              <img className="image-icon4" alt="" src="/image1.svg" />
            </div>
          </div>
        </div>
        <div className="message">
          <div className="textarea" />
        </div>
      </div>
      <div className="button3">
        <div className="popro-o-rejestracj1">Poproś o rejestrację</div>
      </div>
    </div>
  );
};


export default Background5;
