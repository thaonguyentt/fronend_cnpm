import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import AuthContext from "../../../store/auth-context";
import logoHozing from "../../../shared/image/logoHozing/logo-white-hozing.png";
import { router } from "../../../App";

const MainNavigation = () => {
  const [displaceNav, setDisplaceNav] = useState(false);
  const [displaceContentPage, setDisplaceContentPage] = useState(false);
  const [displaceContentRoom, setDisplaceContentRom] = useState(false);

  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;
  // const isLoggedIn = true;

  const logoutHandler = () => {
    authCtx.logout();
  };

  const navHandler = () => {
    setDisplaceNav(!displaceNav);
  };
  const hideNavHandler = () => {
    setDisplaceNav(false);
  };

  const contentHandlerPage = () => {
    setDisplaceContentPage(!displaceContentPage);
  };

  const contentHandlerRoom = () => {
    setDisplaceContentRom(!displaceContentRoom);
  };

  return (
    <div className={classes.container}>
      <header className={classes.topbar}>
        <div className={classes.logo}>
          <NavLink to="/">
            <img src={logoHozing} alt="Logo-white-hozing"></img>
          </NavLink>
        </div>
        <div className={classes.hamburgerBtn}>
          <button onClick={navHandler}>
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <ul
          className={`${classes.topnav} ${displaceNav && classes.responsive}`}
        >
          <li onClick={hideNavHandler} className={classes.cross}>
            <i class="fas fa-times"></i>
          </li>
          {/* <li className={classes.dropdown}>
            <div className={classes.dropbtn}>
              <NavLink to="/detail">
                Page
                <span className={classes.angle} onClick={contentHandlerPage}>
                  <i class="fas fa-angle-down"></i>
                </span>
              </NavLink>
            </div>
            <div>
              <div
                className={`${classes.dropdown_content} ${
                  displaceContentPage && classes.click_dropdown
                }`}
              >
                <NavLink to="/detail">Page Detail</NavLink>
                <NavLink to="/detail">Page 2</NavLink>
                <NavLink to="/detail">Page 3</NavLink>
              </div>
            </div>
          </li> */}

          <li className={classes.dropdown}>
            <div className={classes.dropbtn}>
              <NavLink to={router.listRoom}>
                Room
                <span className={classes.angle} onClick={contentHandlerRoom}>
                  <i class="fas fa-angle-down"></i>
                </span>
              </NavLink>
            </div>
            <div>
              <div
                className={`${classes.dropdown_content} ${
                  displaceContentRoom && classes.click_dropdown
                }`}
              >
                <NavLink to={router.listRoom}>Deluxe</NavLink>
                <NavLink to={router.listRoom}>Luxury</NavLink>
                <NavLink to={router.listRoom}>VIP</NavLink>
              </div>
            </div>
          </li>
          <li>
            <NavLink to="/contact-us">Contact us</NavLink>
          </li>

          {isLoggedIn && (
            <li>
              <NavLink to="/profile">profile</NavLink>
            </li>
          )}

          {!!isLoggedIn ? (
            <li className={classes.dropbtn}>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          ) : (
            <li>
              <NavLink to="/auth">Sign in</NavLink>
            </li>
          )}

          <li>
            <NavLink to={router.card} className={classes.icon_money}>
              {" "}
              <span>
                <i className="fas fa-money-bill-alt"></i>{" "}
              </span>
              Book now
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default MainNavigation;
