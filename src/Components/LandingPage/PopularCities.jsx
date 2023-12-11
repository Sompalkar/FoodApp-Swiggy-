import React from "react";

const popularCities = [
  { name: "Ahmedabad", color: "grey" },
  { name: "Bangalore", color: "lightgray" },
  { name: "Chennai", color: "grey" },
  { name: "Delhi", color: "lightgray" },
  { name: "Gurgaon", color: "grey" },
  { name: "Hyderabad", color: "lightgray" },
  { name: "Kolkata", color: "grey" },
  { name: "Mumbai", color: "lightgray" },
  { name: "Pune", color: "black" },
  { name: "more", color: "lightgray" },
];

const PopularCities = () => {
  return (
    <div style={{ marginBottom: "40px", marginTop: "50px" }}>
      <h3 style={{ fontSize: "18px", fontWeight: "600", color: "grey" }}>
        POPULAR CITIES IN INDIA
      </h3>
      <div style={{ paddingRight: "15px" }} className="popular alterflex">
        {popularCities.map((city, index) => (
          <div key={index} style={{ color: city.color }}>
            {city.name} {index !== popularCities.length - 1 && "&"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCities;
