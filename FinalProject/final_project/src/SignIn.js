import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useShareableState } from "./Global";
import { useBetween } from "use-between";

export function SignIn() {
  const { setLogin, setUser } = useBetween(useShareableState);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();

  function SingIn(e) {
    e.preventDefault();
    console.log("get user with email:", Email);
    setLogin(true);
    fetch("http://localhost:4000/UsersEmail/" + Email)
      .then((response) => response.json())
      .then((data) => {
        console.log("get user with email:", Email);
        console.log(data);
        const User = data;

        if (User.Password === Password) {
          setLogin(true);
          setUser(User);
          navigate("/Pets");
        } else {
          setLogin(false);
          alert("Not a valid password or Email");
        }
      });
  }

  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center">Sign In</h1>

        <div className="row justify-content-center">
          <form className="col-lg-6 col-md-8 col-sm-10 col-12 mt-5 mx-auto">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                value={Email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your personal info with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={Password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>

            <button
              className="btn btn-lg btn-primary"
              type="submit"
              onClick={SingIn}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
