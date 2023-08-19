import { createContext, useContext, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";
import Card from "./pages/Card";

import "swiper/swiper.min.css";
import ListProduct from "./pages/ListProduct";
import ListRoom from "./pages/ListRoom";
import Detail from "./pages/Detail/Detail";
import ContactUs from "./pages/ContactUs";
import UserManager from "./pages/UserManager";
import Checkout from "./pages/Checkout";
import ServiceManager from "./pages/ServiceManager";
import BookingManager from "./pages/BookingManager";

function App() {
  return (
    <ProvideAuth>
      <Switch>
        <Route exact path={adminRouter.adminLogin}>
          {/* add login admin page in here  */}
          <AuthPage />
        </Route>
        <PrivateRoute path={`/admin${adminRouter.user}`}>
          <UserManager />
        </PrivateRoute>
        <PrivateRoute path={`/admin${adminRouter.service}`}>
          <ServiceManager />
        </PrivateRoute>
        <PrivateRoute path={`/admin${adminRouter.book}`}>
          <BookingManager />
        </PrivateRoute>
        <Route path={adminRouter.adminLogin}>
          <AuthPage />
        </Route>
        <Route path="/">
          <PublicRouter />
        </Route>
        {/* <Route path="/profile">
      <UserProfile />
      {authCtx.isLoggedIn && <UserProfile />}
      {!authCtx.isLoggedIn && <Redirect to="/auth" />}
    </Route> */}

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </ProvideAuth>
  );
}

export default App;

function PrivateRoute({ children, ...rest }) {
  let auth = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        true ? (
          //TO DO: integrate isLogin here
          // auth.isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function PublicRouter() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        {/* page de tail */}
        <Route path={`${router.detailRoom}/:id`} exact>
          <Detail />
        </Route>

        <Route path={router.listRoom} exact>
          <ListRoom />
        </Route>

        <Route path="/contact-us" exact>
          <ContactUs />
        </Route>

        <Route path="/list-product" exact>
          <ListProduct />
        </Route>

        <Route path={router.checkout} exact>
          <Checkout />
        </Route>

        <Route path={router.card} exact>
          <Card />
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path={router.login}>
            <AuthPage />
          </Route>
        )}
        <Route path="/profile" exact>
          <UserProfile />
          {/* {authCtx.isLoggedIn && <UserProfile />}
{!authCtx.isLoggedIn && <Redirect to="/auth" />} */}
        </Route>
      </Switch>
    </Layout>
  );
}

export const router = {
  card: "/cards",
  login: "/auth",
  checkout: "/checkout",
  listRoom: "/list-room",
  detailRoom: "/room"
};
export const adminRouter = {
  adminLogin: "/admin-login",
  user: "/manager-feedback",
  service: "/manager-service",
  book: "/manager-book",
};
const authContext = createContext();
function ProvideAuth({ children }) {
  const auth = useContext(AuthContext);
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
