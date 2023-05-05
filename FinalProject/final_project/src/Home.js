import { Link } from "react-router-dom";
import { useBetween } from "use-between";
import { useShareableState } from "./Global";
import { useNavigate } from "react-router-dom";
export function Home() {
  const navigate = useNavigate();
  const { Login, User } = useBetween(useShareableState);
  let SignInText;

  if (Login) {

    SignInText = `${User.F_Name}  ${User.L_Name}`;
  } else {
    SignInText = "Sign in";
  }

  function TransferSignIn() {
    if (Login === true) {
      navigate("/Profile");
    } else {
      navigate("/SignIn");
    }
  }
  return (
    <div>

      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Pet Adoption</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">

                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>

              </ul>
              <form className="d-flex" role="search">

                <button className="btn btn-lg btn-primary" type="submit" onClick={TransferSignIn}>{SignInText}</button>

              </form>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Welcome to our Pet Adoption Website</h1>
                  <p>View our recently adopted pets below!</p>
                  <button className="btn btn-lg btn-primary" type="submit" onClick={() => { navigate("/SignUp") }}>Sign Up!</button>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="container marketing">


          <div className="row">
            <div className="col-lg-4">
              <img src="/images/parrot.png" width="70%"></img>
              <h2 className="fw-normal">Jimmy</h2>
              <p>Repeats what you say!</p>
            </div>
            <div className="col-lg-4">
              <img src="/images/puppies.jpg" width="70%"></img>
              <h2 className="fw-normal">Bobby, Robby, Tobby</h2>
              <p>3 Brothers!</p>
            </div>
            <div className="col-lg-4">
              <img src="/images/nemo.jpg" width="70%"></img>
              <h2 className="fw-normal">Nemo</h2>
              <p>We have fish too!</p>
            </div>
          </div>



          <hr className="featurette-divider"></hr>



        </div>



        <footer className="container">
          <p className="float-end"><a href="#">Back to top</a></p>
          <p>Course: COM S 319 Construction of User Interfaces</p>
          <p>Student 1: Kolby Kucera</p>
          <p>Email: kolbykuc@iastate.edu</p>
          <p>Student 2: Simon Aguilar</p>
          <p>Email: saguilar@iastate.edu</p>
          <p>Professor: Dr. Abraham N. Aldaco Gastelum</p>
          <p>Email: aaldaco@iastate.edu</p>
        </footer>
      </main>


      <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>


    </div>
  );
}
