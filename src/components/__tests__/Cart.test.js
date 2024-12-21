import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mockData/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom"; // Fixed import
import "@testing-library/jest-dom";

// Mock fetch globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

test("should load RestaurantMenu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  // Find "Biriyani (5)" accordion header
  const accordionHeader = screen.getByText("Biriyani (5)");
  // Click accordion header
  fireEvent.click(accordionHeader);

  // Check 5 Biriyani items are rendered
  expect(screen.getAllByTestId("foodItems").length).toBe(5);

  // Check cart starts empty
  expect(screen.getByText("Cart (0)")).toBeInTheDocument();

  // Find and click "Add +" buttons
  const addButtons = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addButtons[0]); // Add first item
  expect(screen.getByText("Cart (1)")).toBeInTheDocument();

  fireEvent.click(addButtons[1]); // Add second item
  expect(screen.getByText("Cart (2)")).toBeInTheDocument();

  // Check total food items after adding 2 to cart (5 original + 2 in cart)
  expect(screen.getAllByTestId("foodItems").length).toBe(7);

  // Click "Clear Cart" button
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  // Check food items are back to 5
  expect(screen.getAllByTestId("foodItems").length).toBe(5);

  // Check "Cart is empty!" is displayed
  expect(screen.getByText("Cart is empty!")).toBeInTheDocument();
});
