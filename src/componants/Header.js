import { LOGO_URL } from "../utils/contants";
import  {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = ()=>{
   const [btnName,setBtn] = useState("Login");

   const onlineStatus = useOnlineStatus();

   const {loggedInUser} = useContext(UserContext)
// subscribing to the store using a selector
   const  cartItems = useSelector((store) => store.cart.items);
    return (
       <div className="flex justify-between shadow-lg bg-slate-300 sm:bg-yellow-50 lg:bg-pink-100">
          <div >
             <img className="w-24 "  src = {LOGO_URL}/>
          </div>
       
          <div className="flex items-center ">
             <ul className="flex p-4 m-4">
             <li className="px-4">Online Status: {onlineStatus ? '✅' : '⛔'}</li> 
                <li className="px-4">  <Link to ="/" className="link">Home</Link></li>
                <li className="px-4">
                   <Link to="/about"className="link">Aobut Us</Link>
                   </li>
               <li className="px-4">
                  <Link to="/contact" className="link" >Contant Us</Link>
                  </li>
                <li className="px-4">
                   <Link to="/grocery" className="link" >grocery</Link>
                  </li>
               
                <li className="px-4 font-bold text-xl "> 
                <Link to="/cart" className="link" >Cart({cartItems.length})</Link>
                

                  </li>
                <button className="login" onClick={()=>{
                   btnName === 'Login'
                   ?setBtn("Logout")
                   :setBtn("Login"); 
                }}> {btnName}</button>
                <li className="px-2" > {loggedInUser}</li>
             </ul>
          </div>
    
       </div>
    );
    
    }

    export default Header;