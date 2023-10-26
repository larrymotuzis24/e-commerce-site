import SignInForm from "../../sign-in-form/sign-in-form.component";
import "./authentication-component.styles.scss";

import SignUpForm from "../../directory/sign-up-form/sign-up-form.component";


const Authentication = () => {

  return (
    <div className="authentication-container">
    
        <SignInForm />
      
        <SignUpForm />
    </div>
  );
};

export default Authentication;
