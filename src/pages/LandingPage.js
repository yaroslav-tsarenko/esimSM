import Content from "../components/Content";
import Background3 from "../components/Background3";
import Background from "../components/Background";
import FrameComponent1 from "../components/FrameComponent1";
import Background1 from "../components/Background1";
import Footer from "../components/Footer";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landingpage">
      <main className="main">
        <Content />
        <Background3 />
        <footer className="destinations">
          <Background />
          <FrameComponent1 />
        </footer>
      </main>
      <div className="background-parent">
        <Background1 />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
