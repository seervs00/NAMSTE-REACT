import React, { Children ,lazy,Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import Header  from "./componants/Header";
import Body from "./componants/Body";
 import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";   
 import { About } from "./componants/About";
 import { Contact } from "./componants/Contact";
 import Error from "./componants/Error";
 import RestaurantMenu from "./componants/Restaurant";
 import { useState,useEffect } from "react";
import UserContext from "./utils/UserContext";
 const Grocery = lazy(() => import("./componants/Grocery"))
 import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./componants/Cart";


const AppLayout = ()=>{
    const [userName,setUserName] = useState();
    useEffect(()=>{
     const data = {
        name:"mahendra seervi",
     };
        setUserName(data.name)
     
    },[]);
return (
<Provider store={appStore}>
<UserContext.Provider value={{loggedInUser:userName,setUserName}}>
<div className="app">
{/* <UserContext.Provider value={{loggedInUser:"anil"}}> */}
    <Header/>
    {/* </UserContext.Provider>   */}
    <Outlet/>
</div>
</UserContext.Provider>  
</Provider>
);
}
const appRouter =createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
    
    children:[
        {
            path:"/",
            element:<Body/>,
            
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/restaurants/:resid",
            element:<RestaurantMenu/>
        },
        {
            path:"/cart",
            element:<Cart/>
        },
        {
            path:"/grocery",
            element:<Suspense fallback ={<h2>loading....</h2>}> <Grocery/> </Suspense>
        },
    ],
    errorElement:<Error/>
},
]);
const root = ReactDOM.createRoot(document.getElementById("hpp"));
root.render(<RouterProvider router={appRouter}/>);

