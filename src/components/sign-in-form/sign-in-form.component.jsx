import FormInput from "../formInput/form-input.component";
import { useState } from "react";
import { signInWithGooglePopup, signUserInWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {SignInContainer, ButtonsContainer} from './sign-in-form.styles.jsx';

const defaultFields = {
    email:'',
    password:''
};

const SignInForm = () => {
   const [loginInput, setLoginInput ] = useState(defaultFields);

    const { email, password } = loginInput;

   


   const handleChange = (e) => {
       const { name, value } = e.target;
       setLoginInput({...loginInput, [name]:value})
   };

   const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const {user} = await signUserInWithEmailAndPassword(email, password);
       

        }
        catch(error){
           if(error.code === 'auth/invalid-login-credentials'){
            alert('Wrong Username or Password, please try again!');
            return;
           }
           else {
            alert('something went wrong, please try again');
            return;
           }
        }

   };

   const googleLogIn = async() => {
    const { user } = await signInWithGooglePopup();
   
   };




    return (
        <SignInContainer>
            <h2> I already have an account </h2>
            <span> Sign in with your email and password </span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    required 
                    label='Email'
                    name='email'
                    type='text'
                    value={email}
                    onChange={handleChange}
                />
                <FormInput 
                    required
                    label='Password'
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                />
                <ButtonsContainer>
                    <Button buttonType='inverted' type='submit'> Sign In </Button>
                    <Button buttonType={BUTTON_TYPE_CLASSES.google} type='button' onClick={googleLogIn}> Google Sign In </Button>

                </ButtonsContainer>
            </form>

        </SignInContainer>
    )
};

export default SignInForm;