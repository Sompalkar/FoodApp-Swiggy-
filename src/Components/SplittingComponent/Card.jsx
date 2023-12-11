// Card.jsx
import React from "react";

const Card = ({ imgsrc, widthy, heighty, texty, para }) => {
  return (
    <div className="card">
      <img src={imgsrc} alt={texty} width={widthy} height={heighty} />

      <h3>{texty}</h3>
      <p>{para}</p>
    </div>
  );
};

export default Card;

// export default function Card(props) {
//     return (
//       <>
//         <div className="car">
//           <div>
//             <img
//               style={{ width: props.widthy, height: props.heighty }}
//               src={props.imgsrc}
//             />
//           </div>
//           <div>
//             <h3>{props.texty}</h3>

//           </div>
//           <div>
//             <p>{props.para}</p>

//           </div>
//         </div>
//       </>
//     );
//   }
