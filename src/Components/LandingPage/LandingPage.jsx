// LandingPage.jsx
import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer, Box } from "@mui/material";
import LoadingSpinner from "../LoaderSpinner";
import "./LandingPage.css";
import Animation from "./Animation";
import { cities } from "../../data";
import { useNavigate } from "react-router-dom";

import PopularCities from "./PopularCities.jsx";
import LocationInput from "./LocationInput.jsx";
import SocialFooter from "./SocialFooter.jsx";
import NewFooterComponent from "./NewFooterComponent.jsx";
import CardSection from "../SplittingComponent/CardSection";
import AppDownloadSection from "../SplittingComponent/AppDownloadSection";
import DeliveryCitiesSection from "../SplittingComponent/DeliveryCitiesSection";
 

export function LandingPage() {
  const [isDraweropen, setisDraweropen] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [res, setRes] = useState([]);
  const [login, setLogin] = useState(true);
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState(false);
  const [verificationId, setVerificationId] = useState("");
  const [otpvalid, setOtp_valid] = useState("");

  let navigate = useNavigate();

  let API_KEY = "5bdc9bb5e105da7714d3b4fda20a88c6";

  function check() {
    let user = JSON.parse(localStorage.getItem("user_details"));
    if (!query) {
      document.querySelector(".trip1").style.display = "block";
    } else if (user.name == "" || user.email == "" || user.number == "") {
      alert(
        "You can visit the restaurants page\nYou have to login to place orders"
      );
      navigate("/restaurants");
    } else {
      alert("Welcome to the restaurant page");
      navigate("/restaurants");
    }
  }

  useEffect(() => {
    if (!query) return;

    let temp = document.querySelector(".trip1");
    if (temp) temp.style.display = "none";
    let id = setTimeout(() => {
      let temp = [];
      let c = 0;
      for (let i = 0; i < cities.length; i++) {
        if (c === 5) break;
        if (cities[i].toLowerCase().includes(query.toLowerCase())) {
          temp.push(cities[i]);
          c++;
        }
      }
      setRes(temp);
    }, 300);
    return () => clearTimeout(id);
  }, [query]);

  function geoLocation() {
    setisLoading(true);
    navigator.geolocation.getCurrentPosition((success) => {
      let { latitude, longitude } = success.coords;
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=en`
      )
        .then((response) => response.json())
        .then((name) => {
          setTimeout(() => {
            let fetch = `${name.city.name}, ${name.city.country}`;
            setQuery(fetch);
            setisLoading(false);
          }, 1000);
        })
        .catch(() => {
          setisLoading(false);
          setQuery("");
        });
    });
  }

  localStorage.setItem("Location", JSON.stringify(query));

  






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
                  spellCheck={false}
                   
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
                  spellCheck={false}
                  
                />
                <br />
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  className="Number_input_1"
                  
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

      

      <div
        className="split"
        onClick={() => {
          document.querySelector(".suggestion").style.display = "none";
        }}
      >
        <div className="left">
          <div className="check0">
            <div>
              <img src="https://d1ye2ocuext585.cloudfront.net/images/s/Swiggy_Logo_9.png" />
            </div>

            <div className="hing">
              <div>
                <button
                  id="login"
                  onClick={() => {
                    setLogin(true);
                    setisDraweropen(true);
                  }}
                >
                  Login
                </button>
              </div>
              <div>
                <button
                  id="signup"
                  onClick={() => {
                    setLogin(false);
                    setisDraweropen(true);
                  }}
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>

          <Animation />

          <LocationInput
            query={query}
            setQuery={setQuery}
            isLoading={isLoading}
            geoLocation={geoLocation}
            check={check}
            res={res}
          />
          <div className="trip1" style={{ display: query ? "" : "none" }}>
            Please add your delivery location
          </div>

          <article
            className="suggestion"
            style={{
              display: query ? "" : "none",
            }}
          >
            {res.map((i, index) => (
              <div
                key={index}
                style={{
                  borderBottom:
                    index === res.length - 1
                      ? "0px"
                      : "1px solid rgb(229, 229, 229)",
                }}
                className="show"
              >
                <p
                  className="city-name show city"
                  onClick={() => {
                    setQuery(i);
                  }}
                >
                  <i className="fas fa-map-marker-alt"></i>
                  &nbsp;&nbsp;&nbsp;&nbsp;{i}
                </p>
              </div>
            ))}
          </article>

          <PopularCities />
        </div>
      </div>

      <div className="two">
        <CardSection />
      </div>

      <AppDownloadSection />

      <NewFooterComponent />
      <DeliveryCitiesSection />
      <SocialFooter />
    </>
  );
}
