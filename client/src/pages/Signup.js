import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container-fluid" id="login-signup-page">
      <div className="row justify-content-center">
        <div id="login-signup-form">
          <h2>
            <svg
              width="1.2em"
              height="1.2em"
              viewBox="0 0 16 16"
              className="bi bi-person-plus-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: 0.5 + "em" }}
            >
              <path
                fillRule="evenodd"
                d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-3a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
              />
            </svg>
             Create Account
          </h2>
          <form className="card card-body" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <input
                placeholder="First Name"
                name="firstName"
                type="firstName"
                id="firstName"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                placeholder="Last Name"
                name="lastName"
                type="lastName"
                id="lastName"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                placeholder="Email"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                placeholder="Password"
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-dark">
                Sign me up!
              </button>
            </div>
          </form>
          <div className="card card-body" id="small-card">
            Already have an account?
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
