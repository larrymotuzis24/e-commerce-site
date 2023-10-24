import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
 } from "firebase/auth";

 import { 
    getDoc,
    doc,
    setDoc, 
    getFirestore
 } from 'firebase/firestore';




const firebaseConfig = {
  apiKey: "AIzaSyCk2dP48HTflxLLWMigigUgk_7cOEyPGGY",
  authDomain: "crwn-ecommerce-5ad87.firebaseapp.com",
  projectId: "crwn-ecommerce-5ad87",
  storageBucket: "crwn-ecommerce-5ad87.appspot.com",
  messagingSenderId: "400058752335",
  appId: "1:400058752335:web:f54e7362f1ef3cf0dcf93a",
  measurementId: "G-X18JJDNJRS"
};


const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async(userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
 
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot.exists())

  if(!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      setDoc(userDocRef, {
        displayName, 
        email, 
        createdAt
      });
    }
    catch(error){
      console.log('there wa an error', error)
    }
  }
  return userDocRef
};
