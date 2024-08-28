import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import signup from "../src/assests/SignUp.png";
import "./signup.css";
import baseUrl from "./util";

const SignUpForm = () => {
  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    roleType: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};
    if (!data.firstName) formErrors.firstName = "First Name is required!";
    if (!data.lastName) formErrors.lastName = "Last Name is required";
    if (!data.email) {
      formErrors.email = "Email is required!";
    } else if (
      !/^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email)
    ) {
      formErrors.email = "Invalid email!";
    }
    if (!data.mobileNumber) {
      formErrors.mobileNumber = "Mobile is required!";
    } else if (!/^(?:\+91|0)?\d{10}$/.test(data.mobileNumber)) {
      formErrors.mobileNumber = "Invalid mobile number!";
    }
    if (!data.password) {
      formErrors.password = "Password is required!";
    } else if (
      !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/.test(
        data.password
      )
    ) {
      formErrors.password = "Invalid password format ex: Xyz@123";
    }
    if (!data.confirmPassword) {
      formErrors.confirmPassword = "Confirm Password is required!";
    } else if (data.confirmPassword !== data.password) {
      formErrors.confirmPassword = "Passwords do not match!";
    }
    if (!data.roleType) formErrors.roleType = "Role is required!";
    return formErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form Data:", data);
      var name = `${data.firstName}${" "}${data.lastName}`;
      axios({
        method: "post",
        url: baseUrl + `users/register`,
        headers: {},
        data: {
          name: name,
          email: data.email,
          mobileNumber: data.mobileNumber,
          password: data.password,
          roleType: data.roleType,
        },
      }).then(() => navigate("/"));
      console.log(data);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="bg">
      <div className="row" style={{ marginRight: "12px" }}>
        <div className="col-lg-6 col-md-6 center-div">
          <div
            className="ml-5 p-5"
            style={{
              borderRadius: "1rem",
              boxShadow: "0px 0px 10px #00000050",
            }}
          >
            <h5
              className="text-center mb-4"
              style={{
                fontSize: "2rem",
                opacity: "0.8",
                textTransform: "Uppercase",
                letterSpacing: "1px",
              }}
            >
              Sign Up
            </h5>
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-sm-6">
                  <input
                    type="text"
                    name="firstName"
                    className={`form-control ${
                      errors.firstName ? "is-invalid" : ""
                    }`}
                    style={{ borderBottom: "2px solid #00000060" }}
                    placeholder="First Name"
                    value={data.firstName}
                    onChange={handleChange}
                  />
                  <div className="invalid">&nbsp;{errors.firstName}</div>
                </div>
                <div className="col-sm-6">
                  <input
                    type="text"
                    name="lastName"
                    className={`form-control ${
                      errors.lastName ? "is-invalid" : ""
                    }`}
                    style={{ borderBottom: "2px solid #00000060" }}
                    placeholder="Last Name"
                    value={data.lastName}
                    onChange={handleChange}
                  />
                  <div className="invalid">&nbsp;{errors.lastName}</div>
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  style={{ borderBottom: "2px solid #00000060" }}
                  placeholder="Email"
                  value={data.email}
                  onChange={handleChange}
                />
                <div className="invalid">&nbsp;{errors.email}</div>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="mobileNumber"
                  className={`form-control ${
                    errors.mobileNumber ? "is-invalid" : ""
                  }`}
                  style={{ borderBottom: "2px solid #00000060" }}
                  placeholder="Mobile"
                  value={data.mobileNumber}
                  onChange={handleChange}
                />
                <div className="invalid">&nbsp;{errors.mobileNumber}</div>
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  style={{ borderBottom: "2px solid #00000060" }}
                  placeholder="Password"
                  value={data.password}
                  onChange={handleChange}
                  onBlur={validate}
                />
                <div className="invalid">&nbsp;{errors.password}</div>
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="confirmPassword"
                  className={`form-control ${
                    errors.confirmPassword ? "is-invalid" : ""
                  }`}
                  style={{ borderBottom: "2px solid #00000060" }}
                  placeholder="Confirm Password"
                  value={data.confirmPassword}
                  onChange={handleChange}
                  onBlur={validate}
                />
                <div className="invalid">&nbsp;{errors.confirmPassword}</div>
              </div>
              <div className="mb-3">
                <select
                  name="roleType"
                  className={`form-control ${
                    errors.roleType ? "is-invalid" : ""
                  }`}
                  style={{ borderBottom: "2px solid #00000060" }}
                  value={data.roleType}
                  onChange={handleChange}
                >
                  <option value="">Select Your Role</option>
                  <option value="FREELANCER">FREELANCER</option>
                  <option value="RECRUITER">RECRUITER</option>
                </select>
                <div className="invalid">&nbsp;{errors.roleType}</div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ textAlign: "center" }}
                >
                  Sign Up
                </button>
              </div>
              <p className="text-center mt-3">
                Already have an account? <br />
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    fontSize: "22px",
                    color: "#0d6efd",
                  }}
                >
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 center-div">
          <img
            src={signup}
            alt="Sign Up"
            draggable="false"
            style={{
              width: "100%",
              marginBottom: "60px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
