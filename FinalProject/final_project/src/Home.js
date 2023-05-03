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
                    <h1>Pet Adoption</h1>
                    <p>Welcome to our pet adoption website</p>
                    <button class="btn btn-lg btn-primary" type="submit">Sign in</button>
                </div>
                </div>
            </div>
        </div>
        </div>
        
        
         
          <div class="container marketing">
        
            
            <div class="row">
              <div class="col-lg-4">
                <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                <h2 class="fw-normal">Animal 1</h2>
                <p>Animal Details</p>
                <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
              </div>
              <div class="col-lg-4">
                <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                <h2 class="fw-normal">Animal 2</h2>
                <p>Animal Details</p>
                <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
              </div>
              <div class="col-lg-4">
                <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                <h2 class="fw-normal">Animal 3</h2>
                <p>Animal Details</p>
                <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
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
            <p>Email:</p>
          </footer>
        </main>
        
        
            <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
        
              
          </body>
    );
}
