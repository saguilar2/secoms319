import { Link } from "react-router-dom";
import React, { useState } from "react";

export function Pets() {

    const [currentView, setView] = useState(0);
    const [pets, setPets] = useState([]);
    const [chosenPet, setChosenPet] = useState([])


    //Showing all pets
    function getAllPets() {
        fetch("http://localhost:4000/Pets")
            .then((response) => response.json())
            .then((data) => {
                console.log("Show Pets :");
                console.log(data);
                setPets(data);
            });

    }


    //Adding a pet
    function handleAddPetChange(evt) {
        const value = evt.target.value;
        if (evt.target.name === "_id") {
            setAddNewPet({ ...addNewPet, _id: value });
        } else if (evt.target.name === "Name") {
            setAddNewPet({ ...addNewPet, Name: value });
        } else if (evt.target.name === "Description") {
            setAddNewPet({ ...addNewPet, Description: value });
        } else if (evt.target.name === "Image") {
            setAddNewPet({ ...addNewPet, Image: value });
        } else if (evt.target.name === "Birthday") {
            setAddNewPet({ ...addNewPet, Birthday: value });
        } else if (evt.target.name === "Species") {
            setAddNewPet({ ...addNewPet, Species: value });
        } else if (evt.target.name === "Breed") {
            setAddNewPet({ ...addNewPet, Breed: value });
        } else if (evt.target.name === "Gender") {
            setAddNewPet({ ...addNewPet, Gender: value });
        }
    }

    function handleOnSubmitNewPet(e) {
        e.preventDefault();
        console.log(e.target.value);
        fetch("http://localhost:4000/Pets/Insert", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(addNewPet),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Post a new product completed");
                console.log(data);
                if (data) {
                    //const keys = Object.keys(data);
                    const value = Object.values(data);
                    alert(value);
                }
            });
        handleViewChange(0)
    }

    const [addNewPet, setAddNewPet] = useState({
        _id: 4,
        Name: "",
        Description: "",
        Image: "",
        Birthday: "",
        Species: "",
        Breed: "",
        Gender: ""
    });


    //When user clicks adopt
    function handleAdopt(pets) {
        setChosenPet(pets)
        handleViewChange(1)
    }


    //After confirmed checkout delete pet from database
    function deleteOneProduct(deleteid) {
        console.log("Product to delete :", deleteid);
        fetch("http://localhost:4000/Pets/delete", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ _id: deleteid }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Delete a product completed : ", deleteid);
            console.log(data);
            if (data) {
              //const keys = Object.keys(data);
              const value = Object.values(data);
              alert(value);
            }
          });
    }


    function handleCheckout(){
        deleteOneProduct(chosenPet._id)
        handleViewChange(0)
    }







    //Views
    const petsView = () => {
        return (
            <div class="container">
                <div class="row">
                    {pets.map((pets) => (
                        <div class="col-md-4">
                            <div class="card">
                                <img src={pets.Image} class="card-img-top" alt="Pet" />
                                <div class="card-body">
                                    <h5 class="card-title">Name: {pets.Name}</h5>
                                    <p class="card-text">Description: {pets.Description}</p>
                                    <p class="card-text">Birthday: {pets.Birthday}</p>
                                    <p class="card-text">Species: {pets.Species}</p>
                                    <p class="card-text">Breed: {pets.Breed}</p>
                                    <p class="card-text">Gender: {pets.Gender}</p>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <button class="btn btn-outline-primary adopt-btn" type="button" onClick={() => handleAdopt(pets)}>Adopt</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        );
    };

    const cartView = () => {
        return (
            <div class="container d-flex justify-content-center align-items-center">
                <div class="card">
                    <img src={chosenPet.Image} class="card-img-top img-fluid" alt="Pet" />
                    <div class="card-body">
                        <h5 class="card-title display-3">{chosenPet.Name}</h5>
                        <p class="card-text">Description: {chosenPet.Description}</p>
                        <p class="card-text">Birthday: {chosenPet.Birthday}</p>
                        <p class="card-text">Species: {chosenPet.Species}</p>
                        <p class="card-text">Breed: {chosenPet.Breed}</p>
                        <p class="card-text">Gender: {chosenPet.Gender}</p>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <button class="btn btn-outline-primary adopt-btn" type="button" onClick={() => handleViewChange(2)}>Proceed to Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    };

    const checkoutView = () => {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Checkout</h4>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name" placeholder="Enter name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="address">Address</label>
                                        <input type="text" className="form-control" id="address" placeholder="Enter address" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cardNumber">Credit Card Number</label>
                                        <input type="text" className="form-control" id="cardNumber" placeholder="Enter credit card number" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="expiryDate">Expiry Date</label>
                                        <input type="text" className="form-control" id="expiryDate" placeholder="Enter expiry date" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cvv">CVV</label>
                                        <input type="text" className="form-control" id="cvv" placeholder="Enter CVV" />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block" onClick={() => handleCheckout()}>Confirm Adoption</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const addPetView = () => {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Add pet</h4>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" placeholder="Name" name="Name" value={addNewPet.Name} onChange={handleAddPetChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Description</label>
                                        <input type="text" className="form-control" placeholder="Description" name="Description" value={addNewPet.Description} onChange={handleAddPetChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="address">Image</label>
                                        <input type="text" className="form-control" placeholder="Image" name="Image" value={addNewPet.Image} onChange={handleAddPetChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cardNumber">Birthday</label>
                                        <input type="text" className="form-control" placeholder="Birthday" name="Birthday" value={addNewPet.Birthday} onChange={handleAddPetChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="expiryDate">Species</label>
                                        <input type="text" className="form-control" placeholder="Species" name="Species" value={addNewPet.Species} onChange={handleAddPetChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cvv">Breed</label>
                                        <input type="text" className="form-control" placeholder="Breed" name="Breed" value={addNewPet.Breed} onChange={handleAddPetChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cvv">Gender</label>
                                        <input type="text" className="form-control" placeholder="Gender" name="Gender" value={addNewPet.Gender} onChange={handleAddPetChange} />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block" onClick={handleOnSubmitNewPet}>Add Pet</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };





    //Handling view changes
    function handleViewChange(view) {
        if (view === 0) {
            getAllPets()
            setView(0)
        } else if (view === 1) {
            setView(1)
        } else if (view === 2) {
            setView(2)
        }
        else if (view === 3) {
            setView(3)
        }
    }

    function SettingView(currentView) {
        if (currentView === 0) {
            return petsView()
        } else if (currentView === 1) {
            return cartView()
        } else if (currentView === 2) {
            return checkoutView()
        }
        else if (currentView === 3) {
            return addPetView()
        }
    }

    //main screen
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
                                <button onClick={() => handleViewChange(0)}>Pets</button>
                                <button onClick={() => handleViewChange(3)}>Add</button>
                                <Link to="/"><button class="btn btn-lg btn-primary" type="submit">Sign Out</button></Link>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>

            {SettingView(currentView)}






        </body>



    );
}