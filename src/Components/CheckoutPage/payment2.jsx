// import React, { useState, useEffect } from "react";
// import CloseIcon from "@mui/icons-material/Close";
// import { Drawer, Box } from "@mui/material";
// import Button from "@mui/material/Button";
// import "./PaymentDetails.css";
// import Veg from "../Assets/veg.jpg";
// import NonVegan from "../Assets/NonVeg.jpg";
// import { Address } from "./Address";
// import Coupoun from "../Assets/coupon.jpg";
// import Coupoun_2 from "../Assets/coupon_2.jpg";
// import Coupoun_3 from "../Assets/coupon_3.jpg";
// import { Navbar } from "../RestaurantPage/Navbar";

// export const AnotherComponent = () => {
//   const [isDraweropen, setisDraweropen] = useState(false);
//   const [couponApplied, isCouponApplied] = useState(false);
//   const [discountAmt, isdiscountAmt] = useState(0);
//   const [discount_1, isDiscount_1] = useState(30);
//   const [discount_2, isDiscount_2] = useState(20);
//   const [discount_3, isDiscount_3] = useState(50);
//   const [state, setState] = useState([]);

//   let total_amount;
//   useEffect(() => {
//     let cart = JSON.parse(localStorage.getItem("Cart")) || [];
//     setState(cart);
//   }, []);

//   const handleChange = (amt) => {
//     total_amount = state
//       .map((e) => (e = e.price * e.q))
//       .reduce((a, b) => a + b, 0);
//     total_amount = (+total_amount - +total_amount * (amt / 100)).toFixed(2);
//     isdiscountAmt(+total_amount);
//     isCouponApplied(true);
//     setisDraweropen(false);
//   };

//   const qHandler = (e) => {
//     // Your quantity change logic
//   };

//   return (
//     <>
//       <Navbar />
//       <Address />
//       <Drawer
//         anchor="right"
//         open={isDraweropen}
//         onclose={() => {
//           setisDraweropen(false);
//         }}
//       >
//         <Box role="presentation" p={4} width="400px">
//           <CloseIcon
//             onClick={() => {
//               setisDraweropen(false);
//             }}
//             style={{ cursor: "pointer", position: "absolute", left: "30px" }}
//             className="close_address"
//           />
//           {/* Coupon images and apply buttons */}
//         </Box>
//       </Drawer>
//       <div>
//         <div className="cart_body">
//           {/* Cart items display */}
//           <div className="cart_title">{/* Cart item details */}</div>
//           <div className="items_div_parent">
//             {state
//               ? state.map((e) => (
//                   <div className="items_div" id={e.id}>
//                     {/* Cart item details */}
//                   </div>
//                 ))
//               : ""}
//           </div>
//           <button
//             className="applynow"
//             onClick={() => {
//               setisDraweropen(true);
//             }}
//           >
//             Apply Coupon
//           </button>
//           {/* Bill details */}
//           <p className="billdetails">Bill Details</p>
//           <div className="itemdetails">
//             <p className="bill_details_user">Item Total</p>
//             <p className="amount">
//               {" "}
//               &#8377;
//               {couponApplied
//                 ? discountAmt
//                 : state
//                     .map((e) => (e = e.price * e.q))
//                     .reduce((a, b) => a + b, 0)
//                     .toFixed(2)}
//             </p>
//           </div>
//           {/* More bill details */}
//           <div className="bordertotal"></div>
//           <div className="itemdetails">{/* More bill details */}</div>
//           <div className="total_pay_for_user">
//             <p className="amount_tag">TO PAY</p>
//             <span className="amount_to_paid">
//               {" "}
//               &#8377;{" "}
//               {couponApplied
//                 ? discountAmt
//                 : state
//                     .map((e) => (e = e.price * e.q))
//                     .reduce((a, b) => a + b, 0)
//                     .toFixed(2)}
//             </span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
