import Home from "./components/routes/home/home.component";
import { useEffect } from "react";
import { Routes, Route} from 'react-router-dom';
import Navigation from "./components/routes/navigation/navigation.component";
import Authentication from "./components/routes/authentication/authentication.component";
import Shop from "./components/routes/shop/shop.component";
import CheckOut from "./components/routes/checkout/checkout.component";
import { onAuthChangedListener, createUserDocFromAuth } from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";




const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthChangedListener((user) => {
      const handleAuthChange = async () => {
        if (user) {
          await createUserDocFromAuth(user);
          dispatch(setCurrentUser(user));
          
         
        } else {
          dispatch(setCurrentUser(null));
        }
      };
  
      handleAuthChange();
    });
  
    return unsubscribe;
  }, [dispatch]);
  

  return (
    <Routes>
      <Route path="/" element={ <Navigation /> }>
      <Route index element={ <Home /> } />
      <Route path="sign-in" element={ <Authentication />} />
      <Route path="shop/*" element={<Shop /> }/>
      <Route path="checkout" element={ <CheckOut /> }/>
         </Route>
    </Routes>
  );
}

export default App;
