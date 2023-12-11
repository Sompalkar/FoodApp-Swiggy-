// AuthFormDrawer.jsx
import React from "react";
import { Drawer, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AuthFormDrawer = ({
  isDrawerOpen,
  onClose,
  onFormSubmit,
  isLogin,
  setLogin,
  number,
  setNumber,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  return (
    <Drawer anchor="right" open={isDrawerOpen} onClose={onClose}>
      <Box role="presentation" p={4} width="500px">
        <CloseIcon
          className="close_icon"
          onClick={onClose}
          style={{ cursor: "pointer" }}
        />
        <div className="login_form">
          <div className="left_div">
            <h2>{isLogin ? "Login" : "Sign up"}</h2>
            <p className="link_register">
              or{" "}
              <a
                onClick={() => setLogin(!isLogin)}
                style={{ cursor: "pointer" }}
              >
                {isLogin ? "create an account" : "login to your account"}
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
              className={isLogin ? "Number_input" : "Number_input_1"}
              autoFocus={true}
              spellCheck={false}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <br />
            {!isLogin && (
              <>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  className="Number_input_1"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="Number_input_1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="Number_input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
              </>
            )}
            <input
              type="submit"
              value="CONTINUE"
              className="login_btn"
              onClick={onFormSubmit}
            />
          </form>
          <div className="foot_text">
            <p>
              By clicking on Login, I accept the terms & Conditions & Privacy
              Policy
            </p>
          </div>
        </div>
      </Box>
    </Drawer>
  );
};

export default AuthFormDrawer;
