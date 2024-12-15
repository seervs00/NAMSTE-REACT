import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import MOCK_DATA from './mocks/api.json';
const Body =()=>{
  const {loggedInUser,setUserName} = useContext(UserContext)
     const [resto,setresto] = useState([]
     );
     const [filterRestaurants,setFilterRestaurants]  =useState([]);
        const [searchText,setSearchText] = useState('')
     useEffect(()=>{
      fetchdata();
     },[]);
     const fetchdata = async () =>{
      const json = await MOCK_DATA
      
      setresto(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
      setFilterRestaurants(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
     };
     const onlineStatus= useOnlineStatus();
     if(onlineStatus === false)
      return (
      <h2>you are offline please check your internate</h2>
      );
    return !resto || resto.length === 0 ?(<Shimmer/>): (
       <div className="body">
         <div className="filter flex ">
          <div className="search p-4 m-4">
            <input type="text"
            data-testid = "searchinput"
            className="border border-solid border-black" 
            value = {searchText}
            onChange={(e)=>{
             setSearchText(e.target.value);
            }}
            />
            <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
             onClick={()=>{
              // Filter the restraunt cards and update the UI
              //searchTest;
          const fiterresatraunt = resto.filter((res)=>
                res.info.name.includes(searchText));
          setFilterRestaurants(fiterresatraunt);
                  }}
  
            >Search</button>
           
           
          </div>
         <div className=" search p-4 m-4">
           <button className="px-4 py-2 bg-gray-200 m-4 rounded-lg" 
          onClick={()=>{
           const vibchange=resto.filter(
              (res) => res.info.avgRating >4
            );
          
            setFilterRestaurants(vibchange);
        }}
          >Top Rated REstaurant
          </button>
          <label>onchange</label>
            <input className="border border-black p-2"
            value={loggedInUser} 
            onChange={(e) => setUserName(e.target.value)}
            />
          </div>
         </div>
         <div className="flex flex-wrap">
         {filterRestaurants.map((res) => (
          <Link className="link" key = {res.info.id} to ={"/restaurants/"+res.info.id}><RestaurantCard resinfo={res.info} /></Link>
     
   ))}
         </div>
       </div>
    )
  }
  export default Body;
