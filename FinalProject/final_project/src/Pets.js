import { Link } from "react-router-dom";
import React, { useState } from "react";

export function Pets() {

    const [currentView, setView] = useState(0);
    const [pets, setPets] = useState([]);


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

    const showAllPets = pets.map((pets) => (
        <div
            key={pets._id}>
            <img src={pets.image} width={30} /> <br />
            Name: {pets.Name} <br />
            Description: {pets.Description} <br />
            Birthday :{pets.Birthday}
            Species:{pets.Species} <br />
            Breed: {pets.Breed} <br />
            Gender :{pets.Gender}
        </div>
    ));



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
    }

    const [addNewPet, setAddNewPet] = useState({
        _id: 3,
        Name: "",
        Description: "",
        Image: "",
        Birthday: "",
        Species: "",
        Breed: "",
        Gender: ""
    });








    const petsView = () => {
        return (
            <div> {showAllPets} </div>
        );
    };

    const cartView = () => {
        return (
            <div>
                cart to-do
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
                                    <button type="submit" className="btn btn-primary btn-block">Place Order</button>
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
                                <button onClick={() => handleViewChange(1)}>Cart</button>
                                <button onClick={() => handleViewChange(0)}>Pets</button>
                                <button onClick={() => handleViewChange(2)}>Checkout</button>
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