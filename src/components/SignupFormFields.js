import "./SignupFormFields.css";

const SignupFormFields = ({ className = "" }) => {
  return (
    <form className={`signup-form-fields ${className}`}>
      <div className="signup-form-actions">
        <a className="item-link23">Home</a>
        <div className="signup-form-action">/</div>
        <a className="signup1">Signup</a>
      </div>
      <div className="signup-form-title">
        <a className="heading-11">Signup</a>
      </div>
      <div className="please-fill-out1">
        Please fill out the following fields to signup:
      </div>
      <div className="signup-form-labels">
        <a className="label-fullname">Fullname</a>
        <div className="signup-inputs">
          <input className="input4" type="text" />
        </div>
      </div>
      <div className="signup-form-labels1">
        <div className="label-email1">Email</div>
        <div className="input-container">
          <input className="input5" type="text" />
        </div>
      </div>
      <div className="signup-form-labels2">
        <div className="label-password1">Password</div>
        <div className="input-frame">
          <input className="input6" type="text" />
        </div>
      </div>
      <div className="signup-form-labels3">
        <div className="label-repeat">Repeat Password</div>
        <div className="frame-div">
          <input className="input7" type="text" />
        </div>
      </div>
      <button className="button2">
        <div className="signup2">Signup</div>
      </button>
    </form>
  );
};



export default SignupFormFields;
