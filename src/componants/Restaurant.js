
import Shimmer from "./shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu =()=>{
 
  const [showIndex ,setShowIndex] = useState(null);

      const {resid} = useParams();
      const restoinfo = useRestaurantMenu(resid);
   if(restoinfo == 0 )return <Shimmer/>;
   const  restauransinfo = restoinfo?.data?.cards[2]?.card?.card?.info;
 
   const {name ,id} = restauransinfo ||{};
   const {itemCards} = restoinfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ;
   
   const categories = restoinfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
    c.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  
    return(
     <div className="text-center">
         <h1 className="font-bold my-4 text-2xl">{name}</h1>

         {
          categories.map((category,index) =>(
            <RestaurantCategory key = {category?.card?.card?.title}
             data ={category?.card?.card}
            showItems={index === showIndex?true:false} 
            setShowIndex={()=> setShowIndex(index)

            }
            />
          )
        )
         }
        
     
     </div>
    )
};
export default RestaurantMenu;
