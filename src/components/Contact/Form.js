import React, { useState, useEffect, useReducer } from "react";
import "./Form.css";
import { SendOutlined } from "@ant-design/icons";
import feedbackApi from "../../api/feedbackApi";
import { message } from "antd";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const phoneReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isvalid: false };
};

const anotherItemReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 0 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 0 };
  }
  return { value: "", isvalid: false };
};

const Formfeedback = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [nameState, dispatchName] = useReducer(anotherItemReducer, {
    value: "",
    isValid: null,
  });
  const [noteState, dispatchNote] = useReducer(anotherItemReducer, {
    value: "",
    isValid: null,
  });
  const [phoneState, dispatchPhone] = useReducer(phoneReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: nameIsValid } = nameState;
  const { isValid: phoneIsValid } = phoneState;
  const { isValid: noteIsValid } = noteState;

  useEffect(() => {
    const userFeedback = setTimeout(() => {
      console.log("cheking form validaty");
      setFormIsValid(
        emailIsValid && nameIsValid && phoneIsValid && noteIsValid
      );
    }, 500);
    return () => {
      console.log("cleaned");
      clearTimeout(userFeedback);
    };
  }, [emailIsValid, nameIsValid, phoneIsValid, noteIsValid]);

  const nameChangedHandler = (event) => {
    dispatchName({ type: "USER_INPUT", val: event.target.value });
  };
  const emailChangedHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };
  const phoneChangedHandler = (event) => {
    dispatchPhone({ type: "USER_INPUT", val: event.target.value });
  };
  const noteChangedHandler = (event) => {
    dispatchNote({ type: "USER_INPUT", val: event.target.value });
  };

  const validateNameHandler = () => {
    dispatchName({ type: "INPUT_BLUR" });
  };
  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };
  const validatePhoneHandler = () => {
    dispatchPhone({ type: "INPUT_BLUR" });
  };
  const validateNoteHandler = () => {
    dispatchNote({ type: "INPUT_BLUR" });
  };

  const addFeedbackHandler = (event) => {
    event.preventDefault();
    const res = {
      email: emailState.value,
      name: nameState.value,
      note: noteState.value,
      phone_number: phoneState.value,
    };
    (async () => {
      const feed = await feedbackApi.add(res);
      message.success("Send feedback success")
      return feed
    })();
  };

  return (
    <>
      <div className="title_of_form">
        <h1>we'd love to hear from you!</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error</p>
      </div>
      <div className="form_of_contact">
        <form onSubmit={addFeedbackHandler}>
          <div className={nameIsValid === false ? "invalid" : ""}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              autoComplete="off"
              value={nameState.value}
              onChange={nameChangedHandler}
              onBlur={validateNameHandler}
            ></input>
          </div>
          <div className={emailIsValid === false ? "invalid" : ""}>
            <label htmlFor="name">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              autoComplete="off"
              value={emailState.value}
              onChange={emailChangedHandler}
              onBlur={validateEmailHandler}
            ></input>
          </div>
          <div className={phoneIsValid === false ? "invalid" : ""}>
            <label htmlFor="name">Phone</label>
            <input
              type="text"
              id="phone"
              placeholder="Your number"
              autoComplete="off"
              value={phoneState.value}
              onChange={phoneChangedHandler}
              onBlur={validatePhoneHandler}
            ></input>
          </div>
          <div className={noteIsValid === false ? "invalid" : ""}>
            <label htmlFor="name">Note</label>
            <textarea
              type="text"
              id="note"
              placeholder="Your feedback"
              value={noteState.value}
              onChange={noteChangedHandler}
              onBlur={validateNoteHandler}
            ></textarea>
          </div>
          <button type="submit">
            <div className="icon_contact">
              <SendOutlined />
            </div>
          </button>
        </form>
      </div>
    </>
  );
};

export default Formfeedback;
