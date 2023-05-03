import { Link } from "react-router-dom";
import React, { useState } from "react";

export function Pets() {

    const [currentView, setView] = useState(0);

    const petsView = () => {
        return (
            <div>
                List of Pets To-do
            </div>
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
                                        <input type="text" className="form-control" id="name" placeholder="Enter name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Age</label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter age" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="address">Description</label>
                                        <input type="text" className="form-control" id="address" placeholder="Enter description" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cardNumber">Image</label>
                                        <input type="text" className="form-control" id="cardNumber" placeholder="Enter image" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="expiryDate">Species</label>
                                        <input type="text" className="form-control" id="expiryDate" placeholder="Enter species" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cvv">Other notes</label>
                                        <input type="text" className="form-control" id="cvv" placeholder="Enter other notes" />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">Add Pet</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };


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
                                <button onClick={() => setView(0)}>Pets</button>
                                <button onClick={() => setView(1)}>Cart</button>
                                <button onClick={() => setView(2)}>Checkout</button>
                                <button onClick={() => setView(3)}>Add</button>
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