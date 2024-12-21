import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom"

// Grouping Test Cases
describe("Contact Us Page Test Case", ()=>{

  // beforeAll(()=>{
  //   console.log("Before All")
  // })

  // beforeEach (()=>{
  //   console.log("Before Each")
  // })

  // afterAll(()=>{
  //   console.log("After All")
  // })

  // afterEach(()=>{
  //   console.log("After All")
  // })

    //you can use it or test
    test("should load contact us component", () => {
        render(<ContactUs />); // render on jsdom
      
        const heading = screen.getByRole("heading");// find heading
      
        expect(heading).toBeInTheDocument();
      });
      
    test("should load button inside contact us component", () => {
          render(<ContactUs />); // render on jsdom
        
          const button = screen.getByRole("button");// find button
          // const button = screen.getByText("Submit");
        
          expect(button).toBeInTheDocument();
        });
      
    test("should load input name inside contact us component", () => {
          render(<ContactUs />); // render on jsdom
        
          const name = screen.getByPlaceholderText("name");// find input name
        
          expect(name).toBeInTheDocument();
        });
      
    test("should load input boxes on the contact us component", () => {
          render(<ContactUs />); // render on jsdom
        
          //Querying
          const inputBoxes = screen.getAllByRole("textbox") // find all textboxes
        
          expect(inputBoxes.length).toBe(2);
        });   
})

