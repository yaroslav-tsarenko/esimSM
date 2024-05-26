import Header from "../components/Header";
import FrameComponent2 from "../components/FrameComponent2";
import Background6 from "../components/Background6";
import Background5 from "../components/Background5";
import Footer2 from "../components/Footer2";
import "./Resseler.css";

const Resseler = () => {
  return (
    <div className="resseler">
      <Header />
      <FrameComponent2 />
      <footer className="background-group">
        <Background6 />
        <div className="become-reseller-form">
          <Background5 />
          <Footer2 />
        </div>
      </footer>
    </div>
  );
};

export default Resseler;
