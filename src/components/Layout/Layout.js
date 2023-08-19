import { Fragment } from 'react';
import Footer from './Footer/Footer';

import MainNavigation from '../Layout/Header/MainNavigation';

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
      <Footer/>
    </Fragment>
  );
};

export default Layout;
