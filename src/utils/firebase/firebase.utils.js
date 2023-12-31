import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
 } from "firebase/auth";

 import { 
    getDoc,
    doc,
    setDoc, 
    getFirestore, 
    collection,
    writeBatch, 
    query, 
    getDocs
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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt:"select_account"
});

export const addCollectionAndDocumnet = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  })

  await batch.commit();
  console.log('done')
};

export const getCategoriesAndDocuments = async() => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);
  return querySnapShot.docs.map(docSnapShot => docSnapShot.data());
  


};

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocFromAuth = async(userAuth, additionalInformation = {}) => {
  if(!userAuth){
    return
  };

  const userDocRef = doc(db, 'users', userAuth.uid);
 
  const userSnapShot = await getDoc(userDocRef);


  if(!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      setDoc(userDocRef, {
        displayName, 
        email, 
        createdAt,
        ...additionalInformation
      });
    }
    catch(error){
      console.log('there wa an error', error)
    }
  }
  return userDocRef
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) {
      return 
    }
   return await createUserWithEmailAndPassword(auth, email, password)
};

export const signUserInWithEmailAndPassword = async(email, password) => {
  if(!email || !password) {
    return
  }
  return await signInWithEmailAndPassword(auth, email, password);
 
};

export const signOutUser = async () => await signOut(auth);

export const onAuthChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};



export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth, 
      (userAuth) => {
        unsubscribe();
        resolve(userAuth)
      },
      reject
    )
  })
};
