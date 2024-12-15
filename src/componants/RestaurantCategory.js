import ItemList from "./ItemList";
import { useEffect,useState } from "react";
const RestaurantCategory = ({data,showItems,setShowIndex})=>{
  const [fshowItem,setShowItem] = useState(false);
   const handleClick= () =>{
           setShowIndex();
           setShowItem(!fshowItem)
          

   }
       return (
    <div>
        {/*header*/ }
        <div className="w-6/12 mx-auto my-4 p-4  bg-gray-50 shadow-lg  ">  
           <div className="flex justify-between cursor-pointer" onClick={handleClick}>
           <span className="font-bold text-lg"> {data.title} ({data.itemCards.length})</span>
           <span>⬇️</span>
           </div>
        { fshowItem && showItems && <ItemList items ={data.itemCards}/> }
        </div>
        {/*accodian body*/}

    </div>
    );
};
export default RestaurantCategory;