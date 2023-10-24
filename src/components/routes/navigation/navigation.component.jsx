import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg';
import { Fragment } from "react";
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/' >
         <CrwnLogo />
        </Link>
        <div className="nav-links-container"> 
        <Link to='/shop' className="nav-link"> SHOP </Link>
        <Link to='/sign-in' className="nav-link"> Sign In </Link>
         </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
