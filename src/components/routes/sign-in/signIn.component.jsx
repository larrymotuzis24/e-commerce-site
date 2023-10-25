import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { 
    auth,
    signInWithGooglePopup,
    createUserDocFromAuth,
    signInWithGoogleRedirect
 } from "../../../utils/firebase/firebase.utils";
import SignUpForm from "../../directory/sign-up-form/sign-up-form.component";


const SignIn = () => {

    useEffect(() => {
        const getRedirectResults = async () => {
          try {
            const response = await getRedirectResult(auth);
            console.log(response);
            if(response){
                const userDocRef = await createUserDocFromAuth(response.user)
            }
          } catch (error) {
            console.error("Error in getRedirectResult: ", error);
          }
        };
      
        getRedirectResults();
      }, []);
      

const logGoogleUser = async() => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
};

const logGoogleRedirect = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log(user);
};
    return (
        <div>
            <h2> Sign In Page </h2>
            <button onClick={logGoogleUser}> Sign In with Google Popup </button>
            <SignUpForm />
        </div>
    )
};

export default SignIn;