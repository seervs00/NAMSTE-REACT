import { useEffect,useState } from "react";
import { MENU_API } from "./contants";  
const useRestaurantMenu = (resid)=>{
const [resinfo ,setResinfo] =useState([]);
 useEffect(()=>{
    fetchdata();
 },[])

const fetchdata = async()=>{
    const data = await fetch(MENU_API+resid+"&catalog_qa=undefined");
    const json = await data.json();
    setResinfo(json);
};
return resinfo;
};
export default useRestaurantMenu;
