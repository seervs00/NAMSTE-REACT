import { CDN_URL } from "../utils/contants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList =({items})=>{
  const dispatch = useDispatch();
   const handleAddItem = (item) =>{
    // dispatch and action
    dispatch(addItem(item));
   };
  return(
    <div>
        
            {items.map((item)=>(
            <div
             key = {item?.card?.info?.id}
             className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between" >
                <div className="w-9/12">
                <div className="py-2">
                     {item?.card?.info?.itemAttribute?.vegClassifier ==="NONVEG"?<p>🔴</p>:<p>🟢</p>}
                  <p className="font-semibold">{item?.card?.info?.name}</p>
                  <p className="font-semibold"> ₹  {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</p>
                 </div>
                <p className="text-sm">{item?.card?.info?.description}</p>
                </div>
                <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-2 ml-6 mt-[70px] rounded-lg bg-black text-white shadow-lg hover:bg-white  hover:text-black transition-all duration-[.3s]"
              onClick={()=>handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full rounded-md"
            />
          </div>
        </div>
            )
            )}
        
    </div>
  )
};
export default ItemList