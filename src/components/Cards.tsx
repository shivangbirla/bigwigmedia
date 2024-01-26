import { Navigate, useNavigate } from "react-router-dom";
import { Card } from '../pages/Landing';
import { useState } from "react";

const Cards = ({ cards }: { cards: Card[] }) => {
  const navigate = useNavigate();
  
  return (
    <div className="flex justify-center flex-wrap mt-5   gap-10">
      
      {cards.map((card, id) => {
        return <CardComponent card={card} key={id} />;
       })}
    </div>
  );
};

export default Cards;


const CardComponent = ({card}:{card:Card})=>{
   const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate()

   return (
     <div
       className="flex flex-col justify-between gap-5 px-3 py-4 text-gray-700 shadow-xl rounded-xl  max-w-80  bg-white dark:bg-[#262626] dark:border dark:border-gray-700 w-full"
      onClick={()=>navigate({
        pathname:"/generate",
        search:`?id=${card._id}`
      })}
       
     >
       <div className="flex flex-row gap-8  justify-center items-center ">
         {!imageLoaded && (
           <svg
             xmlns="http://www.w3.org/2000/svg"
             width="37"
             height="38"
             viewBox="0 0 37 38"
             fill="none"
             className="m-3 dark:invert"
           >
             <path
               d="M22.1409 16.3738L35.8019 0.493652H32.5643L20.7029 14.2818L11.2287 0.493652H0.301323L14.628 21.3441L0.301323 37.9965H3.53887L16.0654 23.4357L26.0705 37.9965H36.9979L22.14 16.3738H22.1409ZM17.7068 21.5275L16.255 19.4514L4.70527 2.93075H9.67792L18.9983 16.2636L20.4497 18.3397L32.5658 35.6702H27.5937L17.7068 21.5284V21.5275Z"
               fill="black"
             />
           </svg>
         )}
         <img
           src={card.logo}
           alt=""
           className="m-3"
           onLoad={() => setImageLoaded(true)}
           onError={() => setImageLoaded(false)}
           style={{ display: imageLoaded ? "initial" : "none" }}
         />
         <div className=" flex items-center text-xl text-black  dark:text-white font-outfit  font-semibold">
           {card.name}
         </div>
       </div>
       <div className="w-full  text-sm dark:text-white  font-normal">
         {card.description}
       </div>
       <div className="flex items-start justify-center  pt-0 gap-5">
         <button className="dark:bg-white dark:text-gray-900 flex w-full p-1 md:p-2 justify-center my-auto gap-2.26 rounded-full bg-gray-900  text-white font-outfit text-base font-medium px-10 mx-auto">
           Generate
         </button>
         <button className="flex w-[40px] h-[40px] gap-2 rounded-full border-2 dark:bg-white border-gray-800 p-1 justify-end">
           <span className="w-22.599 h-22.599 flex-shrink-0">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               width="23"
               height="24"
               viewBox="0 0 23 24"
               fill="none"
               className="w-6 h-6 text-gray-700 dark:text-gray-300"
             >
               <path
                 fill-rule="evenodd"
                 clip-rule="evenodd"
                 d="M3.77765 5.56119C3.77765 4.81199 4.07527 4.09347 4.60503 3.56371C5.13479 3.03395 5.85331 2.73633 6.60251 2.73633H16.0187C16.7679 2.73633 17.4864 3.03395 18.0162 3.56371C18.5459 4.09347 18.8436 4.81199 18.8436 5.56119V20.6535C18.8436 21.8022 17.5441 22.4708 16.61 21.8032L11.3106 18.0179L6.01117 21.8032C5.07614 22.4717 3.77765 21.8032 3.77765 20.6544V5.56119ZM6.60251 4.61957C6.35277 4.61957 6.11327 4.71877 5.93668 4.89536C5.76009 5.07195 5.66089 5.31145 5.66089 5.56119V19.7392L10.4895 16.29C10.7291 16.1188 11.0162 16.0268 11.3106 16.0268C11.605 16.0268 11.8921 16.1188 12.1317 16.29L16.9603 19.7392V5.56119C16.9603 5.31145 16.8611 5.07195 16.6845 4.89536C16.5079 4.71877 16.2684 4.61957 16.0187 4.61957H6.60251Z"
                 fill="#1E1E1E"
               />
             </svg>
           </span>
         </button>
       </div>
     </div>
   );
}
