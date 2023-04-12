import "./App.css";
import logo from "./cart2.png";
import React, { useState } from "react";
import { Products } from "./Products";
import { Categories } from "./Categories";
import { States } from "./States";

export function Home() {
  console.log("Step 1: After reading file :");
  const [PageContral, setPageContral] = useState(0);
  const [CartListsItems, setCartListsItems] = useState([]);
  const [CartListsQuantety, setCartListsQuantety] = useState([]);
  const [CartListsinfo, setCartListInfo] = useState([0, 0]);
  const [ProductsCategory, setProductsCategory] = useState(Products);
  const [query, setQuery] = useState("");
  // index 0 = Name, 1 = Email, 2 = card number, 3 = address, 4 = city, 5 = state, 6 = Zip Code
  const [CheckoutForm, setCheckoutForm] = useState(["", "", "", "", "", "", 0]);

  const render_Cart = (CartListsinfo) => {
    return (
      <div>
        <p>Number of Items in cart: {CartListsinfo[0]}</p>

        <p>Total in cart: ${CartListsinfo[1].toFixed(2)}</p>
      </div>
    );
  };

  const render_choises = (ProductsCategory) => {
    return (
      <div className="m-6 p-3 mt-10 ml-0 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-10">
        {/* Loop Products */}
        {ProductsCategory.map((product, index) => (
          <div key={product.id} className="group relative shadow-lg">
            <div >
              <div class="row main align-items-center">
                <div className=" min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-60 lg:aspect-none"> 
                  <img
                    alt="Product Image"
                    src={product.image}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="flex justify-between p-3">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span style={{ fontSize: "16px", fontWeight: "600" }}>
                          {product.title}
                        </span>
                      </a>
                      <p>Tag - {product.category}</p>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Rating: {product.rating.rate}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-green-600">
                    ${product.price}
                  </p>
                </div>

                <div class="col">
                  <button
                    type="button"
                    className="inline-block bg-amber-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2"
                    onClick={() => {
                      AddToCartClick(product);
                    }}
                  >
                    {" "}
                    +{" "}
                  </button>
                  {GetQunety(product) + " "}
                  <button
                    type="button"
                    className="inline-block bg-amber-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2"
                    onClick={() => {
                      RemoveToCartClick(product);
                    }}
                  >
                    {" "}
                    -{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const render_products = (ProductsCategory) => {
    return (
      <div className="category-section fixed">
        {console.log("Step 3 : in render_products ")}
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-600 category-title">
          Products ({ProductsCategory.length})
        </h2>
        <div
          style={{
            maxHeight: `${window.innerHeight - 100}px`,
            overflowY: "scroll",
          }}
        >
          <div>{render_choises(ProductsCategory)}</div>
        </div>
      </div>
    );
  };

  const render_confirmation = () => {
    return (
      <div
        style={{
          maxHeight: `${window.innerHeight - 100}px`,
          overflowY: "scroll",
        }}
      >
        <div className="group relative shadow-lg">
          <div class="row border-top border-bottom">
            <div class="row main align-items-center">
              <h1>Order Summary</h1>
              <div class="col">
                <div>
                  {/* Loop Products */}
                  {CartListsItems.map((product, index) => (
                    <div key={product.id} className="group relative shadow-lg">
                      <div
                        class="row border-top border-bottom"
                        key={product.id}
                      >
                        <div class="row main align-items-center">
                          <div class="col-2">
                            <img class="img-fluid" src={product.image} />
                          </div>
                          <div class="col">
                            <div class="row text-muted">{product.title}</div>
                            <div class="row text-muted">
                              Category: {product.category}
                            </div>
                            <div class="row text-muted">
                              Price: ${product.price}
                            </div>
                            <div class="row text-muted">
                              Quantity: {CartListsQuantety[index]}
                            </div>
                            <div class="row text-muted">
                              Total: ${product.price * CartListsQuantety[index]}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div class="row">Name: {CheckoutForm[0]}</div>
                <div class="row">Email: {CheckoutForm[1]}</div>
                <div class="row">Card: {CheckoutForm[2]}</div>
                <div class="row">City: {CheckoutForm[3]}</div>
                <div class="row">State: {CheckoutForm[4]}</div>
                <div class="row">Zip: {CheckoutForm[5]}</div>
              </div>
            </div>

            <button
              key="ToHome"
              onClick={() => {
                window.location.reload();
              }}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  };

  const render_checkout = (ProductsCategory) => {
    console.log(CheckoutForm);

    return (
      <div className="category-section fixed">
        {console.log("Step 3 : in render_products ")}
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-600 category-title">
          Products In Cart ({ProductsCategory.length})
        </h2>
        <button
          key="ToHome"
          onClick={() => {
            ToHomeView();
          }}
        >
          Back to Home
        </button>
        <div
          style={{
            maxHeight: `${window.innerHeight - 100}px`,
            overflowY: "scroll",
          }}
        >
          <div>{render_choises(ProductsCategory)}</div>
          <div>
            <div class="container">
              <div class="row">
                <div class="col-2"></div>

                <div class="col-8">
                  <h1>Checkout</h1>

                  <div id="liveAlertPlaceholder"></div>
                  <form class="row g-3" id="checkout-form">
                    <div class="col-md-6">
                      <label for="inputName" class="form-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputName"
                        value={CheckoutForm[0]}
                        onInput={(event) => {
                          CheckoutForm[0] = event.target.value;
                          setCheckoutForm([...CheckoutForm]);
                        }}
                      />
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Must be like, "John Doe"
                      </div>
                    </div>

                    <div class="col-md-6">
                      <label for="inputEmail4" class="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail4"
                        value={CheckoutForm[1]}
                        onInput={(event) => {
                          CheckoutForm[1] = event.target.value;
                          setCheckoutForm([...CheckoutForm]);
                        }}
                      />
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Must be like, "abc@xyz.efg"
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="inputCard" class="form-label">
                        Card
                      </label>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                          <i class="bi-credit-card-fill"></i>
                        </span>
                        <input
                          type="text"
                          id="inputCard"
                          class="form-control"
                          placeholder="XXXX-XXXX-XXXX-XXXX"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          value={CheckoutForm[2]}
                          onInput={(event) => {
                            CheckoutForm[2] = event.target.value;
                            setCheckoutForm([...CheckoutForm]);
                          }}
                        />
                        <div class="valid-feedback">Looks good!</div>
                        <div class="invalid-feedback">
                          Must be like, "7777-7777-7777-7777"
                        </div>
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="inputAddress" class="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputAddress"
                        placeholder="1234 Main St"
                        value={CheckoutForm[1]}
                        onInput={(event) => {
                          CheckoutForm[3] = event.target.value;
                          setCheckoutForm([...CheckoutForm]);
                        }}
                      />
                    </div>

                    <div class="col-md-6">
                      <label for="inputCity" class="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputCity"
                        value={CheckoutForm[3]}
                        onInput={(event) => {
                          CheckoutForm[4] = event.target.value;
                          setCheckoutForm([...CheckoutForm]);
                        }}
                      />
                    </div>
                    <div class="col-md-4">
                      <label for="inputState" class="form-label">
                        State
                      </label>
                      <select
                        id="inputState"
                        class="form-select"
                        value={CheckoutForm[4]}
                        onInput={(event) => {
                          CheckoutForm[5] = event.target.value;
                          setCheckoutForm([...CheckoutForm]);
                        }}
                      >
                        <option selected>Choose...</option>

                        {States.map((state, index) => (
                          <option key={index} value={state}>
                            {state.Abbreviation}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div class="col-md-2">
                      <label for="inputZip" class="form-label">
                        Zip
                      </label>
                      <input
                        type="Number"
                        class="form-control"
                        id="inputZip"
                        value={CheckoutForm[6]}
                        onChange={(event) => {
                          CheckoutForm[5] = event.target.value;
                          setCheckoutForm([...CheckoutForm]);
                        }}
                      />
                    </div>
                    <div class="col-12">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                        />
                        <label class="form-check-label" for="gridCheck">
                          Check me out
                        </label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button
                        type="button"
                        class="btn btn-success"
                        onClick={() => {
                          ToConfimationView();
                        }}
                      >
                        Order
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="col-2"></div>
        </div>
      </div>
    );
  };

  function GetQunety(product) {
    let found = false;

    for (let index = 0; index < CartListsItems.length; index++) {
      if (CartListsItems[index].id === product.id) {
        found = true;
        return CartListsQuantety[index];
      }
    }

    if (!found) {
      return 0;
    }
  }

  function RemoveToCartClick(product) {
    console.log("Step 8 : Remove from cart");
    if (CartListsinfo[0] !== 0) {
      for (let index = 0; index < CartListsItems.length; index++) {
        if (CartListsItems[index].id === product.id) {
          if (CartListsQuantety[index] !== 0) {
            CartListsQuantety[index]--;
            CartListsinfo[0]--;
            CartListsinfo[1] -= product.price;
            if (CartListsinfo[0] === 0) {
              CartListsinfo[1] = 0;
            }

            if (CartListsQuantety[index] === 0) {
              CartListsItems.splice(index, 1);
              CartListsQuantety.splice(index, 1);
            }
          }
          setCartListsItems([...CartListsItems]);
          setCartListsQuantety([...CartListsQuantety]);
          setCartListInfo([...CartListsinfo]);
          break;
        }
      }
    }
  }

  function AddToCartClick(product) {
    console.log("Step 7 : add to cart");
    let found = false;

    for (let index = 0; index < CartListsItems.length; index++) {
      if (CartListsItems[index].id === product.id) {
        CartListsQuantety[index]++;
        found = true;

        break;
      }
    }

    if (!found) {
      setCartListsItems([...CartListsItems, product]);
      setCartListsQuantety([...CartListsQuantety, 1]);
    } else {
      setCartListsItems([...CartListsItems]);
      setCartListsQuantety([...CartListsQuantety]);
    }

    CartListsinfo[0]++;
    CartListsinfo[1] += product.price;
    setCartListInfo([...CartListsinfo]);
  }

  function handleClick(tag) {
    console.log("Step 4 : in handleClick", tag);
    let filtered = Products.filter((cat) => cat.category === tag);
    if (tag === "All") {
      setProductsCategory(Products);
      console.log("YES");
    } else {
      setProductsCategory(filtered);
    }

    console.log("Step 5 : ", Products.length, ProductsCategory.length);
  }

  function ToCartView() {
    setPageContral(1);
  }
  function ToHomeView() {
    setPageContral(0);
  }
  function ToConfimationView() {
    setPageContral(2);
  }

  const handleChange = (e) => {
    console.log(
      "Step 6 : in handleChange, Target Value :",
      e.target.value,
      "  Query Value :",
      query
    );
    setQuery(e.target.value);
    if (e.target.value === "" || e.target.value === " ") {
      setProductsCategory(Products);
    } else {
      const results = ProductsCategory.filter((eachProduct) => {
        return eachProduct.title
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      });

      setProductsCategory(results);
    }
  };

  function SettingForm(PageContral) {
    if (PageContral === 0) {
      return render_products(ProductsCategory);
    } else if (PageContral === 1) {
      return render_checkout(CartListsItems);
    } else if (PageContral === 2) {
      return render_confirmation();
    }
  }

  return (
    <div className="flex fixed flex-row">
      {console.log(
        "Step 2 : Return App :",
        Products.length,
        ProductsCategory.length
      )}
      <div
        className="h-screen  bg-slate-800 p-3 xl:basis-1/5"
        style={{
          maxHeight: `${window.innerHeight}px`,
          minWidth: "65%",
          overflowY: "scroll",
        }}
      >
        <button
          key="ToCart"
          onClick={() => {
            ToCartView();
          }}
        >
          <img className="w-full" src={logo} alt="cart" />
        </button>
        <div className="px-6 py-4">
          <h1 className="text-3xl mb-2 font-bold text-white"> Shopping App </h1>
          <p className="text-gray-700 text-black">
            by - <b style={{ color: "orange" }}>Kolby Kucera, Simon Aguilar</b>
          </p>
          <div className="py-10">
            {Categories ? <p className="text-white">Tags : </p> : ""}
            {Categories.map((tag) => (
              <button
                key={tag}
                className="inline-block bg-amber-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2"
                onClick={() => {
                  handleClick(tag);
                }}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="py-5">
            <input type="search" value={query} onChange={handleChange} />
          </div>
          <div className="py-1 text-white"> {render_Cart(CartListsinfo)}</div>
        </div>
      </div>
      <div className="ml-5  p-10 xl:basis-4/5">
        {console.log(
          "Before render :",
          Products.length,
          ProductsCategory.length
        )}
        {SettingForm(PageContral)}
      </div>
    </div>
  );
}
