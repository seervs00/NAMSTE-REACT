import { render,screen } from "@testing-library/react";
import { act } from "@testing-library/react";
import RestaurantMenu from "../Restaurant.js"
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/cards.json"
global.fetch = jest.fn(()=>Promise.resolve(()=>{      json:()=>Promise.resolve(MOCK_DATA)}
));

test("restaurantmanue componant", async()=>{
  await act(async() =>{
    render(
    <RestaurantMenu/>);

  })
});