import SignInForm from "../../sign-in-form/sign-in-form.component";
import {AuthenticationContainer} from "./authentication-component.styles.jsx";

import SignUpForm from "../../directory/sign-up-form/sign-up-form.component";


const Authentication = () => {

  return (
    <AuthenticationContainer>
    
        <SignInForm />
      
        <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
