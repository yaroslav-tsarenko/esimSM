import Nav from "../components/Nav";
import SignupFormFields from "../components/SignupFormFields";
import Footer1 from "../components/Footer1";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signup">
      <Nav itemLinkColor="#000" />
      <div className="signup-form">
        <SignupFormFields />
      </div>
      <Footer1 />
    </div>
  );
};

export default SignUp;
