import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useBetween } from "use-between";
import { useShareableState } from "./Global";

export function Pets() {
    const { setLogin, setUser } = useBetween(useShareableState);
    const [currentView, setView] = useState(0);
    const [hasnotbeencalled, sethasnotbeencalled] = useState(true);
    const [pets, setPets] = useState([]);
    const [chosenPet, setChosenPet] = useState([])
    console.log(currentView);

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
        if (evt.target.name === "Name") {
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

                    const value = Object.values(data);
                    alert(value);
                }
            });

        handleViewChange(0)
    }

    const [addNewPet, setAddNewPet] = useState({

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
    function deleteOnePet(deleteid) {
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

    function handleCheckout() {
        deleteOnePet(chosenPet._id)

        handleViewChange(0)
    }



    //PUT method
    function handleEdit(pets) {
        setChosenPet(pets)
        handleViewChange(4)
    }

    const [petToEdit, setPetToEdit] = useState({
        _id: 0,
        Description: "",
    });

    function handleEditPetChange(evt) {
        const value = evt.target.value;
        if (evt.target.name === "Description") {
            setPetToEdit({ ...petToEdit, Description: value });
        }
    }

    function editPet(e) {
        e.preventDefault();
        console.log(e.target.value);
        var edit = {};
        edit._id = chosenPet._id
        if (petToEdit.Description !== "") {
            edit.Description = petToEdit.Description;
        }
        fetch("http://localhost:4000/Pets/edit/" + edit._id, {
            method: "Put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(edit),
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







    //Views
    const petsView = () => {
        if (pets.length === 0 && hasnotbeencalled) {
            getAllPets()
            sethasnotbeencalled(false);
        }

        return (
            <div className="container">
                <div className="row">
                    {pets.map((pet) => (
                        <div key={pet.id} className="col-md-4">
                            <div className="card">
                                <img src={pet.Image} className="card-img-top" alt="Pet" />
                                <div className="card-body">
                                    <h5 className="card-title">Name: {pet.Name}</h5>
                                    <p className="card-text">Description: {pet.Description}</p>
                                    <p className="card-text">Birthday: {pet.Birthday}</p>
                                    <p className="card-text">Species: {pet.Species}</p>
                                    <p className="card-text">Breed: {pet.Breed}</p>
                                    <p className="card-text">Gender: {pet.Gender}</p>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <button className="btn btn-outline-primary adopt-btn" type="button" onClick={() => handleAdopt(pet)}>Adopt</button>
                                            <button className="btn btn-outline-primary adopt-btn" type="button" onClick={() => handleEdit(pet)}>Edit</button>
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
            <div className="container d-flex justify-content-center align-items-center">
                <div className="card">
                    <img src={chosenPet.Image} className="card-img-top img-fluid" alt="Pet" />
                    <div className="card-body">
                        <h5 className="card-title display-3">{chosenPet.Name}</h5>
                        <p className="card-text">Description: {chosenPet.Description}</p>
                        <p className="card-text">Birthday: {chosenPet.Birthday}</p>
                        <p className="card-text">Species: {chosenPet.Species}</p>
                        <p className="card-text">Breed: {chosenPet.Breed}</p>
                        <p className="card-text">Gender: {chosenPet.Gender}</p>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-primary adopt-btn" type="button" onClick={() => handleViewChange(2)}>Proceed to Checkout</button>
                                <button className="btn btn-outline-primary adopt-btn" type="button" onClick={() => handleViewChange(0)}>Back</button>
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
                                    <button type="submit" className="btn btn-primary btn-block" onClick={() => handleViewChange(0)}>Cancel Order</button>
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
                                    <button type="submit" className="btn btn-primary btn-block" onClick={() => handleViewChange(0)}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const editPetView = () => {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit Pet Description</h4>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="name">Name: {chosenPet.Name}</label>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Description</label>
                                        <input type="text" className="form-control" placeholder="Edit Description" name="Description" value={petToEdit.Description} onChange={handleEditPetChange} />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block" onClick={editPet}>Confirm</button>
                                    <button type="submit" className="btn btn-primary btn-block" onClick={() => handleViewChange(0)}>Cancel</button>
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
        if (view !== 0) {
            sethasnotbeencalled(true);
        }
        if (view === 0) {// displays pets

            setView(0)
        } else if (view === 1) {
            setView(1)
        } else if (view === 2) {
            setView(2)
        }
        else if (view === 3) {
            setView(3)
        }
        else if (view === 4) {
            setView(4)
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
        else if (currentView === 4) {
            return editPetView()
        }
    }

    //main screen
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



                            </ul>
                            <form className="d-flex" role="search">
                                <Link to="/"><button>Home</button></Link>
                                <button onClick={() => handleViewChange(3)}>Add</button>
                                <Link to="/"><button className="btn btn-lg btn-primary" type="submit" onClick={() => {
                                    setLogin(false)
                                    setUser();
                                }}>Sign Out</button></Link>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>

            {SettingView(currentView)}






        </div>



    );
}