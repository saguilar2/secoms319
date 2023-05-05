import {Link } from "react-router-dom";

export function Home() {
    return (
        <body>
    
        <header>
          <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Pet Adoption</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                  
                  <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                  </li>
                  
                </ul>
                <form class="d-flex" role="search">
                    <Link to="/SignIn"><button class="btn btn-lg btn-primary" type="submit">Sign in</button></Link>   
                </form>
              </div>
            </div>
          </nav>
        </header>
        
        <main>
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
                <div class="container">
                <div class="carousel-caption text-start">
                    <h1>Welcome to our Pet Adoption Website</h1>
                    <p>View our recently adopted pets below!</p>
                    <button class="btn btn-lg btn-primary" type="submit">Sign Up!</button>
                </div>
                </div>
            </div>
        </div>
        </div>
        
        
         
          <div class="container marketing">
        
            
            <div class="row">
              <div class="col-lg-4">
                <img src="/images/parrot.png" width="70%"></img>
                <h2 class="fw-normal">Jimmy</h2>
                <p>Repeats what you say!</p>
              </div>
              <div class="col-lg-4">
                <img src="/images/puppies.jpg" width="70%"></img>
                <h2 class="fw-normal">Bobby, Robby, Tobby</h2>
                <p>3 Brothers!</p>
              </div>
              <div class="col-lg-4">
                <img src="/images/nemo.jpg" width="70%"></img>
                <h2 class="fw-normal">Nemo</h2>
                <p>We have fish too!</p>
              </div>
            </div>
        
        
            
            <hr class="featurette-divider"></hr>
        
           
        
          </div>
        
        
         
          <footer class="container">
            <p class="float-end"><a href="#">Back to top</a></p>
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
        
              
          </body>
    );
}
