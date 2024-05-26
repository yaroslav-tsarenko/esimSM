import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`benefits-content-wrapper ${className}`}>
      <div className="benefits-content">
        <div className="benefits-cards">
          <div className="benefit-card">
            <p className="redni-koszt-przegldania-container">
              <span className="redni-koszt-przegldania">
                Średni koszt przeglądania w roamingu bez dedykowanej taryfy może
                być
              </span>
              <span className="bardzo-wysoki-i">
                bardzo wysoki i obciążać kredyty Twoich klientów. Dzięki eSIM,
                dzięki planom
              </span>
              <span className="szytym-na-miar">
                szytym na miarę, Twoi klienci nie spotkają się w podróży z
                żadnymi przykrymi
              </span>
              <span className="niespodziankami">niespodziankami!</span>
            </p>
            <blockquote className="co-si-stanie-container">
              <p className="co-si-stanie">
                "Co się stanie, jeśli mojemu klientowi zabraknie
              </p>
              <p className="danych">danych?"</p>
            </blockquote>
            <p className="z-panelu-resellera-container">
              <span className="z-panelu-resellera">
                Z panelu Resellera możesz całkowicie niezależnie zarządzać
                wszystkimi
              </span>
              <span className="sprzedawanymi-esim-ami-doado">
                sprzedawanymi eSIM-ami, doładowywać Gigabajty swoich klientów
                lub
              </span>
              <span className="przedua-ywotno-wirtualne">
                przedłużać żywotność wirtualnej karty SIM... to tylko kilka
                kliknięć!
              </span>
            </p>
          </div>
        </div>
        <img
          className="refillwebp-icon"
          loading="lazy"
          alt=""
          src="/refillwebp@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent2;
