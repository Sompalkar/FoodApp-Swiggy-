// CardSection.jsx
import React from "react";
import Card from "./Card";

const CardSection = () => {
  const cardsData = [
    {
      imgsrc:
        "https://web.archive.org/web/20210903175337im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf",
      widthy: "105px",
      heighty: "199px",
      texty: "No Minimum Order",
      para: "Order in for yourself or for the group, with no restrictions on order value",
    },
    {
      imgsrc:
        "https://web.archive.org/web/20210903175338im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy",
      widthy: "112px",
      heighty: "206px",
      texty: "Live Order Tracking",
      para: "Know where your order is at all times, from the restaurant to your doorstep",
    },
    {
      imgsrc:
        "https://web.archive.org/web/20210903175339im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn",
      widthy: "124px",
      heighty: "188px",
      texty: "Lightning-Fast Delivery",
      para: "Experience Swiggy's superfast delivery for food delivered fresh & on time",
    },
  ];

  return (
    <div className="two">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardSection;
