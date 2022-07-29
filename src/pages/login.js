import React, { useState, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import styles from "../style/login.module.css";
import UserContext from "../components/userContext";
import { isUser } from "../components/permissions";

import AuthService from "../service/authService";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { setUserDisplay } = useContext(UserContext);

  const navigate = useNavigate();

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    return AuthService.login(username, password)
      .then(() => {
        setUserDisplay();
      })
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setMessage(resMessage);
      });
  };

  let location = window.location.href;

  if (location == "http://localhost:3000/login") {
    location = "/";
  }

  return isUser() ? (
    <Navigate to={location} replace />
  ) : (
    <div className={styles.loginContainer}>
      <h1 className={styles.title}>Login</h1>
      <div className="card card-container">
        <Form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              className="form-control"
              password="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <button
              className="btn btn-primary btn-block"
              data-button-function="Login"
            >
              <span>Login</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} />
        </Form>
      </div>
    </div>
  );
};

export default Login;
