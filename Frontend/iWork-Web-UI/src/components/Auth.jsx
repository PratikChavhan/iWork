import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import axios from "axios";
import baseUrl from "../util";
import logonobg from "../assests/logo-bg1.png";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.email && !formData.password) {
      setErrorMessage("Both email and password are required!");
      return;
    }

    if (!formData.email) {
      setErrorMessage("Email is required!");
      return;
    }
    if (!formData.password) {
      setErrorMessage("Password is required!");
      return;
    }

    axios({
      method: "post",
      url: baseUrl + `users/login`,
      headers: {},
      data: { email: formData.email, password: formData.password },
    })
      .then((response) => {
        const data = response.data;
        return data;
      })
      .then((respData) => {
        console.log(respData);

        if (respData.userModel.email === formData.email) {
          var roles = respData.userModel.roles[0];
          dispatch(
            authActions.login({
              userId: respData.userModel.id,
              fullName: respData.userModel.name,
              email: respData.userModel.email,
              image: respData.userModel.image,
              role: roles,
            })
          );
          dispatch(authActions.setCurrentRole({ role: roles }));
        }
      })
      .catch((error) => {
        console.log(error);
        if (
          error.response &&
          error.response.status === 404 &&
          formData.email &&
          formData.password
        ) {
          setErrorMessage("Please enter valid credentials!");
        }
      });
  };

  return (
    <div className="bg">
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "150px 20px",
          marginRight: "12px",
        }}
      >
        <div
          className="col-lg-6 col-md-6"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={logonobg}
            draggable="false"
            style={{
              width: "80%",
            }}
            alt="iWork"
          ></img>
        </div>
        <div
          className="col-lg-4 col-md-6 p-3"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            className="card"
            style={{
              backgroundColor: "#ffffff20",
              borderRadius: "20px",
              padding: "40px 20px",
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
              textAlign: "center",
              margin: "20px 5px",
              width: "100%",
            }}
          >
            <div className="card-body">
              <svg
                class="svg-icon"
                style={{
                  width: "40px",
                  height: "40px",
                  verticalAlign: "middle",
                  fill: "currentColor",
                  overflow: "hidden",
                }}
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M512 170.666667a341.333333 341.333333 0 1 1 0 682.666666 341.333333 341.333333 0 0 1 0-682.666666z m42.666667 362.666666h-85.333334a128 128 0 0 0-128 128h341.333334l-0.213334-7.509333A128 128 0 0 0 554.666667 533.333333z m-42.666667-213.333333a85.333333 85.333333 0 1 0 0 170.666667 85.333333 85.333333 0 0 0 0-170.666667z"
                  fill="#424dbd"
                />
              </svg>
              <h5 className="card-title mb-4">Sign in</h5>
              <form onSubmit={handleSubmit} noValidate autocomplete="on">
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    autoFocus
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100 mt-3 mb-2"
                >
                  Sign In
                </button>
                <div className="d-flex justify-content-end">
                  <Link
                    to="/signup"
                    style={{
                      textDecoration: "none",
                      color: "#0d6efd",
                    }}
                  >
                    Don't have an account? Sign Up
                  </Link>
                </div>
              </form>
              {errorMessage && (
                <div className="mt-3">
                  <p className="text-danger">{errorMessage}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
