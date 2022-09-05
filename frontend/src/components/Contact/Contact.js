import React, { useState } from "react";
import axios from "axios";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./Contact.css";
import { sendMessage } from "../../JS/actions/contactActions";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";

const Contact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    message: "",
    email: "",
    subject: "",
    sent: false,
    btn: "Send Message",
    emailError: false,
  });
  const resetForm = () => {
    setState({
      name: "",
      message: "",
      email: "",
      subject: "",
      btn: "Message Sent",
    });
    setTimeout(() => {
      setState({ ...state, sent: false });
    }, 3000);
  };
 
  const handleChangeEmail = (e) => {
    if (
      !e.target.value.match(
        /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g
      )
    ) {
      setState({
        ...state,
        email: e.target.value,
      });

      setState({ ...state, emailError: true });

      if (state.email === "") {
        // check if the input is empty
        setState({ ...state, emailError: false });
      }
    } else {
      setState({ ...state, email: e.target.value, emailError: false });
    }
  };

  const formSubmit =  (e) => {
    e.preventDefault();
    setState({ ...state, btn: "...sending" });

    const data = new FormData(e.currentTarget);
    console.log({
      name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
      
    })
    dispatch(
      sendMessage(
        {
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
          
        }
      )
    )
  };

  return (
    <div className="container">
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            {" "}
            font-weight: 500; Contact us with the following details. and fillup
            the form with the details.{" "}
          </p>
          <div className="info">
            <div className="social-information">
              {" "}
              <i className="fa fa-map-marker" />
              <p>NPM,NY,USA</p>
            </div>
            <div className="social-information">
              {" "}
              <i className="fa fa-envelope-o" />
              <p>contact@bbbootstrap.com</p>
            </div>
            <div className="social-information">
              {" "}
              <i className="fa fa-mobile-phone" />
              <p>+1 989 989 9898 </p>
            </div>
          </div>
        </div>
        <div className="contact-info-form">
          {" "}
          <span className="circle one" /> <span className="circle two" />
          <form onSubmit={formSubmit} >
            <h3 className="title">Contact us</h3>
            <div className="social-input-containers">
              {" "}
              <input
              
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                onChange={(e) => setState({ ...state, name: e.target.value })}
              />{" "}
            </div>
            <div classNa me="social-input-containers">
              {" "}
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                onChange={(e) => handleChangeEmail(e)}
                error={state.emailError}
              />
            </div>
            <div className="social-input-containers">
              {" "}
              <input
                type="text"
                name="subject"
                className="input"
                placeholder="subject"
                onChange={(e) =>
                  setState({ ...state, subject: e.target.value })
                }
              />
            </div>
            <div className="social-input-containers textarea">
              {" "}
              <textarea
                name="message"
                className="input"
                placeholder="Message"
                defaultValue={""}
                onChange={(e) =>
                  setState({ ...state, message: e.target.value })
                }
              />{" "}
            </div>{" "}
            <input type="submit" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
