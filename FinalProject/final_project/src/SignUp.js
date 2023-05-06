import { useBetween } from "use-between";
import { useShareableState } from "./Global";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function SignUp() {
  const navigate = useNavigate();
  const { setLogin, setUser } = useBetween(useShareableState);
  const [TempUser, setTempUser] = useState({
    F_Name: "",
    L_Name: "",
    Email: "",
    Password: "",
    Phone_Number: "",
    Adrress: "",
    Birthday: "",
    Pets: [],
  });

  console.log(TempUser);

  function FindAge(birthday) {
    birthday = new Date(birthday);
    return Number((new Date().getTime() - birthday.getTime()) / 31536000000).toFixed(0);
  }

  function validateUser(e) {
    let age = FindAge(TempUser.Birthday);

    if (age >= 18) {
      e.preventDefault();
      console.log(e.target.value);
      fetch("http://localhost:4000/Users/insert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(TempUser),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Post a new user completed");
          console.log(data);
          if (data) {

            const value = Object.values(data);
            setLogin(true);
            setUser(value);
            navigate("/Pets");
          }
        });
    } else {
      alert("Must be atless 18 years old");
    }

  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>SignUp</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="F_Name">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    name="F_Name"
                    value={TempUser.F_Name}
                    onChange={(event) => {
                      setTempUser({ ...TempUser, F_Name: event.target.value });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="L_Name">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    name="L_Name"
                    value={TempUser.L_Name}
                    onChange={(event) => {
                      setTempUser({ ...TempUser, L_Name: event.target.value });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="Email"
                    value={TempUser.Email}
                    onChange={(event) => {
                      setTempUser({ ...TempUser, Email: event.target.value });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={TempUser.Password}
                    onChange={(event) => {
                      setTempUser({
                        ...TempUser,
                        Password: event.target.value,
                      });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Phone_Number">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    name="Phone_Number"
                    value={TempUser.Phone_Number}
                    onChange={(event) => {
                      setTempUser({
                        ...TempUser,
                        Phone_Number: event.target.value,
                      });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Adrress">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    name="Adrress"
                    value={TempUser.Adrress}
                    onChange={(event) => {
                      setTempUser({ ...TempUser, Adrress: event.target.value });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Birthday">Birthday</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Birthday"
                    name="Birthday"
                    value={TempUser.Birthday}
                    onChange={(event) => {
                      setTempUser({
                        ...TempUser,
                        Birthday: event.target.value,
                      });
                    }}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block" onClick={validateUser}>
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
