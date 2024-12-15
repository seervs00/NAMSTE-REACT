import { fireEvent, render,screen} from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";


test("should load Header Componant with a login button",()=>{
   render(
    <BrowserRouter>
    <Provider store={appStore}> <Header/>
    </Provider></BrowserRouter>
   
   )
   //const loginbutton = screen.getByRole("button")
   //const loginbutton = screen.getByText("Login")

   //if more the one button
  const loginbutton = screen.getByRole("button",{name:"Login"});
  fireEvent.click(loginbutton);
  const logoutbutton = screen.getByRole("button",{name:"Logout"});
   expect(loginbutton).toBeInTheDocument();
});


test("should load Header Componant with a cart items",()=>{
    render(
     <BrowserRouter>
     <Provider store={appStore}> <Header/>
     </Provider></BrowserRouter>
    
    )
    
   const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
 });
