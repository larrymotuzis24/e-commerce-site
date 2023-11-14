import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg';
import { Fragment } from "react";
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from  './navigation.styles.jsx';
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropwdown";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectIsCartOpen } from "../../../store/cart/cart.selector";

const Navigation = () => {

    const currentUser = useSelector(selectCurrentUser);
   const  isCartOpen  = useSelector(selectIsCartOpen)


   
   
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/' >
         <CrwnLogo />
        </LogoContainer>
        <NavLinks> 
        <NavLink to='/shop' className="nav-link"> SHOP </NavLink>
        {currentUser ? 
          (
            <NavLink as='span' className="nav-link" onClick={signOutUser}> Sing Out</NavLink>
            )
             :(
              <NavLink to='/sign-in' className="nav-link"> Sign In </NavLink>
             )
            }
            <CartIcon />
         </NavLinks> 
         { isCartOpen && <CartDropdown /> }
       
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
