import { CDN_URL } from "../utils/contants";
const RestaurantCard = (props)=>{
    const{resinfo} = props;
   
    const {
       cloudinaryImageId,
       name ,
       avgRating,
       cuisines ,
       costForTwo ,
       locality ,
       areaName 
     } = resinfo; 
   return (
    <div  data-testid="resCard" className=" rounded-lg m-4 p-4 w-[250px]  bg-gray-100 hover:bg-gray-300 hover:shadow-xl">
       <img className="rounded-lg" src={CDN_URL+cloudinaryImageId}/>
       <h3 className="font-bold py-4 ">{name}</h3>
       <span className="span-card">{avgRating} • 30 -35 mins </span>
       <br/>
       <p>{cuisines}</p>
       <p>{costForTwo}</p>
       <p>{locality}, {areaName}</p>
 
    </div>
   )
 }

 export default RestaurantCard;