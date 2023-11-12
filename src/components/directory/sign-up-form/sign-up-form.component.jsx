import {SignUpContainer} from './sing-up-form.styles.jsx';
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../../utils/firebase/firebase.utils";
import FormInput from "../../formInput/form-input.component";
import Button from '../../button/button.component';



const defaultFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formfields, setFormFields] = useState(defaultFields);
  const { displayName, email, password, confirmPassword } = formfields;




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formfields, [name]: value });
  };

  const clearForm = () => {
    setFormFields({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
        await createUserDocFromAuth(user, { displayName });

      clearForm();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Email already in use");
        return;
      } else {
        console.log(err);
      }
    }
  };

  return (
    <SignUpContainer>
      <h2> Don't have an account? </h2>
      <span> Sign Up with email and password </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          required
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />
        <FormInput
          label="Email"
          required
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label='Password'
          required
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <FormInput
          label="Confirm Password"
          required
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button type="submit"> Submit </Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
