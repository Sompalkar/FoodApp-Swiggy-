// AppDownloadSection.jsx
import React from "react";

const AppDownloadSection = () => {
  return (
    <div className="three">
      <div className="do">
        <h1>
          Restaurants in
          <br /> your pocket
        </h1>
        <p>
          Order from your favorite restaurants & track on the go, with the
          all-new Swiggy app.
        </p>
        <div className="do1">
          <a href="https://play.google.com/store/apps/details?id=in.swiggy.android">
            <img
              style={{ height: "54px" }}
              src="https://web.archive.org/web/20210903175340im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"
              alt="Google Play Store"
            />
          </a>
          <a href="https://itunes.apple.com/in/app/swiggy-food-order-delivery/id989540920">
            <img
              style={{ height: "54px" }}
              src="https://web.archive.org/web/20210903175341im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"
              alt="Apple App Store"
            />
          </a>
        </div>
      </div>
      <div className="do2">
        <div>
          <img
            className="set"
            src="https://web.archive.org/web/20210903175342im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n"
            alt="App on Pixel"
          />
        </div>
        <div>
          <img
            className="set1"
            src="https://web.archive.org/web/20210903175343im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn"
            alt="App on iPhone"
          />
        </div>
      </div>
    </div>
  );
};

export default AppDownloadSection;
