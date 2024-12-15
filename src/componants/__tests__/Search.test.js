import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/api.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
global.fetch = jest.fn(()=>{
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    }
  })
});
it("should renser the body Componant with serach", async() =>{
  await act(async()=>
    render(<BrowserRouter>
    <Body/>
    </BrowserRouter>)
   
  )
  const searchbutton = screen.getByRole("button",{name:"Search"})
  const searchinput = screen.getByTestId("searchinput");
fireEvent.change(searchinput, { target: { value: "KFC" } });

  fireEvent.click(searchbutton)

});


it("should renser the body Componant with top rated restaurant", async() =>{
  await act(async()=>
    render(<BrowserRouter>
    <Body/>
    </BrowserRouter>)
   
  )
  const topbutton = screen.getByRole("button",{name:"Top Rated REstaurant"})
  

});

