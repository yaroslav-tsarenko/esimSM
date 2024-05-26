import Nav from "../components/Nav";
import Background4 from "../components/Background4";
import Content1 from "../components/Content1";
import AffiliateBenefits from "../components/AffiliateBenefits";
import "./Affilate.css";

const Affilate = () => {
  return (
    <div className="affilate">
      <section className="nav-parent">
        <Nav itemLinkColor="rgba(0, 0, 0, 0.65)" />
        <Background4 />
      </section>
      <Content1 />
      <AffiliateBenefits />
    </div>
  );
};

export default Affilate;
