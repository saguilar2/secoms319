import {Link } from "react-router-dom";

export function SignIn() {

    return ( 
        
        <body>
    <div class="container mt-5">
      <h1 class="text-center">Sign In</h1>

      <div class="row justify-content-center">
        <form class="col-lg-6 col-md-8 col-sm-10 col-12 mt-5 mx-auto">
          <div class="mb-3">
            <label for="email" class="form-label">Username</label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your personal info with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" />
          </div>
          <Link to="/Pets"><button class="btn btn-lg btn-primary" type="submit">Sign In</button></Link>
          <Link to="/"><button class="btn btn-lg btn-primary" type="submit">Home</button></Link>
        </form>
      </div>
    </div>

    
  </body>
            
         
     );
}