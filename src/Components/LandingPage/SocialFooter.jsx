// Footer.jsx
import React from "react";

const SocialFooter = () => {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <footer>
      <img
        className="footer_logo"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"
        width="200px"
        height="60px"
        alt="Swiggy Logo"
      />
      <p style={{ color: "white", fontSize: "21px" }}>&copy; 2022 Swiggy</p>
      <div
        style={{
          width: "200px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="icons"
      >
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc"
          width="24"
          height="24"
          alt="Facebook"
          onClick={() => openLink("https://www.linkedin.com/in/contact-som/")}
        />

        <img
          src="https://media.glassdoor.com/sqll/1763822/leetcode-squarelogo-1524799041565.png"
          width="24"
          height="24"
          alt="LinkedIn"
          onClick={() => openLink("https://leetcode.com/So_mnm/")}
        />
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh"
          width="24"
          height="24"
          alt="Instagram"
        />
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv"
          width="24"
          height="24"
          alt="Twitter"
        />
      </div>
    </footer>
  );
};

export default SocialFooter;
