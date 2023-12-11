import React, { useState, useEffect } from "react";
import Logo from "../Assets/swiggy.svg";
import Arrow from "../Assets/arrow.svg";
import Cart from "../Assets/cart.png";
import Search from "../Assets/search.svg";
import Discount from "../Assets/discount.svg";
import Help from "../Assets/help.svg";
import User from "../Assets/user.png";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
// import {
//   getAuth,
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
// } from "firebase/auth";

// // Your Firebase configuration
// const firebaseConfig = {
//   // Your config here
// };

// // Initialize Firebase
// const auth = getAuth();

// export { auth, signInWithPhoneNumber, RecaptchaVerifier };

export function Navbar() {
  const [isDraweropen, setisDraweropen] = useState(false);
  const [user_signin, setUser_signin] = useState(false);
  const [user_details, setUser_details] = useState(null);
  const [login, setLogin] = useState(true);
  const [signIn, setsignIn] = useState(false);
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [len, setLen] = useState(0); 

  const location = JSON.parse(localStorage.getItem("Location"));
  let cart = JSON.parse(localStorage.getItem("Cart")) || [];
  const navigate = useNavigate();
  

  useEffect(() => {
    setLen(cart.length);
  }, [cart]);

  












  return (
    <>
      <Drawer
        anchor="right"
        open={isDraweropen}
        onClose={() => {
          setisDraweropen(false);
        }}
      >
        <Box role="presentation" p={4} width="500px">
          <CloseIcon
            className="close_icon"
            onClick={() => {
              setisDraweropen(false);
            }}
            style={{ cursor: "pointer" }}
          />
          {login ? (
            <div className="login_form">
              <div className="left_div">
                <h2>Login</h2>
                <p className="link_register">
                  or{" "}
                  <a
                    onClick={() => setLogin(false)}
                    style={{ cursor: "pointer" }}
                  >
                    create an account
                  </a>
                </p>
              </div>
              <hr className="hr_line_drawer" />
              <div className="right_div">
                <img
                  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                  alt=""
                  className="food_wrap"
                />
              </div>
              <form>
                <div id="sign-in-button"></div>
                <input
                  type="number"
                  name="Number"
                  placeholder="Phone Number"
                  className="Number_input"
                  autoFocus={true}
                  spellCheck="false"
                  
                />
                <br />
                <input
                  type="submit"
                  value="CONTINUE"
                  className="login_btn"
                   
                />
              </form>
              <div className="foot_text">
                <p>
                  By clicking on Login, I accept the terms & Conditions &
                  Privacy Policy
                </p>
              </div>
            </div>
          ) : (
            <div className="login_form">
              <div className="left_div">
                <h2>Sign up</h2>
                <p className="link_register">
                  or{" "}
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => setLogin(true)}
                  >
                    login to your account
                  </a>
                </p>
              </div>
              <hr className="hr_line_drawer" />
              <div className="right_div">
                <img
                  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                  alt=""
                  className="food_wrap"
                />
              </div>
              <form>
                <div id="sign-in-button"></div>
                <input
                  type="number"
                  name="Number"
                  placeholder="Phone Number"
                  className="Number_input_1"
                  autoFocus={true}
                  spellCheck="false"
                   
                />
                <br />
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  className="Number_input_1"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <br />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="Number_input_1"
                   
                />
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="Number_input"
                   
                />
                <br />

                <input
                  type="submit"
                  value="CONTINUE"
                  className="login_btn"
                  
                />
              </form>

              <div className="foot_text">
                <p>
                  By clicking on Login, I accept the terms & Conditions &
                  Privacy Policy
                </p>
              </div>
            </div>
          )}
        </Box>
      </Drawer>

      (
        <Drawer
          anchor="right"
          open={isDraweropen}
          onClose={() => {
            setisDraweropen(false);
          }}
        >
          <Box role="presentation" p={4} width="500px">
            <CloseIcon
              className="close_icon"
              onClick={() => {
                setisDraweropen(false);
              }}
              style={{ cursor: "pointer" }}
            />
            <div className="login_form">
              <div className="left_div">
                <h2>Enter OTP</h2>
              </div>
              <form>
                <input
                  type="number"
                  name="Number"
                  placeholder="Enter the OTP"
                  className="Number_input" 
                   
                />
                <br />
                <input
                  type="submit"
                  value="SUBMIT"
                  className="login_btn"
                   
                />
              </form>
              <div className="foot_text">
                <p>
                  By clicking on Login, I accept the terms & Conditions &
                  Privacy Policy
                </p>
              </div>
            </div>
          </Box>
        </Drawer>
      ) : (
        ""
      )

      <nav className="navbar">
        <img src={Logo} alt="" className="logo" />
        <div className="div1_nav">
          <p className="other">Other</p>
          <div className="location">
            {location} &nbsp;
            <img src={Arrow} alt="" className="arrow" />
          </div>
        </div>
        <div className="div2_nav">
          <p className="search">
            <img src={Search} alt="" className="search_icon" />
            Search{" "}
          </p>
        </div>
        <div className="div3_nav">
          <p className="offers">
            <img src={Discount} alt="" className="discount_icon" />
            Offers <span className="new">NEW</span>{" "}
          </p>
        </div>
        <div className="div4_nav">
          <p className="help">
            <img src={Help} alt="" className="help_icon" />
            Help
          </p>
        </div>
        <div className="div5_nav">
          <p
            className="sign_in"
            onClick={() => {
              signIn
                ? setisDraweropen(false)
                : setisDraweropen(true) && setLogin(true);
            }}
          >
            <img src={User} alt="" className="user_icon" />
            {user_signin ? user_details.name : "Sign In"}
          </p>
        </div>
        <div className="div6_nav">
          {len !== 0 ? (
            <Link to="/payment" style={{ textDecoration: "none" }}>
              <p className="cart">
                <img src={Cart} alt="" className="cart_icon" />
                Cart
              </p>
            </Link>
          ) : (
            <p className="cart">
              <img src={Cart} alt="" className="cart_icon" />
              Cart
            </p>
          )}
          <span className="cart_num">{len}</span>
        </div>
      </nav>
    </>
  );
}
