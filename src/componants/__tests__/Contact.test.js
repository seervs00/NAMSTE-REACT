import { render,screen } from "@testing-library/react";
import { Contact } from "../Contact";
import "@testing-library/jest-dom";
  // this is unit testing
// it and test are same 
 // group of test 
 // we use fescribe in describe;
 describe("Contact load contact us ", ()=>{
// test("should load contact us component",() =>{
//     render(<Contact/>);
//   const heading =  screen.getByRole("heading")
//   expect(heading).toBeInTheDocument();
// });
// test("should load place holder component",() =>{
//     render(<Contact/>);
//   const inputtext =  screen.getByPlaceholderText("name")
//   expect(inputtext).toBeInTheDocument();
// });
  

test("should load place holder component",() =>{
  render(<Contact/>);
  //Qurering 
const inputall =  screen.getAllByRole("textbox")
//   expect(inputall).toBeInTheDocument();
console.log(inputall.length)
expect(inputall.length).not.toBe(3);
});
 })
