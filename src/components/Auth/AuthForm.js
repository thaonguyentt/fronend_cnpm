// import { message } from 'antd';
import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import { notification } from "antd";
import AuthContext from "../../store/auth-context";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const history = useHistory();
  const passwordInputRef = useRef();
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const phoneInputRef = useRef();
  const addressInputRef = useRef();
  const emailInputRef = useRef();
  const usernameInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredPassword = passwordInputRef.current?.value;
    const first_name = firstNameInputRef.current?.value;
    const last_name = lastNameInputRef.current?.value;
    const phone_number = phoneInputRef.current?.value;
    const address = addressInputRef.current?.value;
    const email = emailInputRef.current?.value;
    const username = usernameInputRef.current?.value;

    // optional: Add validation
    console.log(enteredPassword,
      first_name,
      last_name,
      phone_number,
      address,
      email,
      username,
    )
    setIsLoading(true);
    let url;
    if (isLogin) {
      url = "http://localhost:9090/authenticate";
      return fetch(url, {
        method: "POST",
        body: JSON.stringify({
          password: enteredPassword,
          username,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          setIsLoading(false);
          notification.success({
            message: "success",
            description: "Login success",
            placement: "bottomLeft",
            duration: 5000,
          });
          return res.json();
        })
        .then((data) => {
          const result = data;
          authCtx.login(result, 10000);
          // authCtx.login({}, 10000);
          history.replace("/");
        })
        .catch((error) => {
          let errorMessage = "Authentication failed!";

          notification.error({
            message: "error",
            description: error.message || errorMessage,
            placement: "bottomLeft",
            duration: 5,
          });
          setIsLoading(false);
        });
    } else {
      url = "http://localhost:9090/user";
      return fetch(url, {
        method: "POST",
        body: JSON.stringify({
          password: enteredPassword,
          username,
          first_name,
          last_name,
          phone_number,
          address,
          email
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (!!res?.ok) {
            notification.success({
              message: "success",
              description: "Login success",
              placement: "bottomLeft",
              duration: 5,
            });
            setIsLoading(false);
            setIsLogin(true)
            console.log(res, "res")

            return res.json();
          } else {
            let errorMessage = "Authentication failed!";

            notification.error({
              message: "error",
              description: res.message || errorMessage,
              placement: "bottomLeft",
              duration: 5,
            });
            setIsLoading(false);
          }

        })
    }

  };
  if (isLogin) {
    return (
      <section className={classes.auth}>
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your username</label>
            <input id="email" required ref={usernameInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
             
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>

          <div className={classes.actions}>
            {!isLoading ? <button>Login</button> : <p>Sending request...</p>}
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              Create new account
            </button>
          </div>
        </form>
      </section>
    );
  }
  return (
    <section className={classes.auth}>
      <h1>Sign Up</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="userName">Your username</label>
          <input id="userName" required ref={usernameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="firstname">Your first name</label>
          <input type="text" id="firstname" required ref={firstNameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="lastname">Your last name</label>
          <input type="text" id="lastname" required ref={lastNameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="phone">Your phone</label>
          <input type="number" id="phone" required ref={phoneInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="add">Your address</label>
          <input type="text" id="add" required ref={addressInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>

        <div className={classes.actions}>
          {!isLoading ? (
            <button>Create Account</button>
          ) : (
            <p>Sending request...</p>
          )}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            Login with existing account
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
