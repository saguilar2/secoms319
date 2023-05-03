import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function SignIn() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Login, setLogin] = useState(false);

  function SingIn() {
    fetch("http://localhost:4000/Users/" + Email)
      .then((response) => response.json())
      .then((data) => {
        console.log("get user with email:", Email);
        console.log(data);
        const User = data;
        if (User.Password === Password) {
          setLogin(true);
        } else {
          setLogin(false);
          alert("value");
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
                onChange={() => {
                  setEmail(this.value);
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
                onChange={() => {
                  setPassword(this.value);
                }}
              />
            </div>
            <Link to="/Pets">
              <button
                class="btn btn-lg btn-primary"
                type="submit"
                onClick={SingIn}
              >
                Sign In
              </button>
            </Link>
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
