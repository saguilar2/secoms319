import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useShareableState } from "./Global";
import { useBetween } from "use-between";

export function SignIn() {
  const { setLogin, setUser } = useBetween(useShareableState);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  function SingIn() {
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
          alert("True password");
        } else {
          setLogin(false);
          alert("false password");
        }
      });
  }

  return (
    <body>
      <div class="container mt-5">
        <h1 class="text-center">Sign In</h1>

        <div class="row justify-content-center">
          <form class="col-lg-6 col-md-8 col-sm-10 col-12 mt-5 mx-auto">
            <div class="mb-3">
              <label for="email" class="form-label">
                Username
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                value={Email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <div id="emailHelp" class="form-text">
                We'll never share your personal info with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="password"
                value={Password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>

            <button
              class="btn btn-lg btn-primary"
              type="submit"
              onClick={SingIn}
            >
              Sign In
            </button>

            <Link to="/">
              <button class="btn btn-lg btn-primary" type="submit">
                Home
              </button>
            </Link>
          </form>
        </div>
      </div>
    </body>
  );
}
