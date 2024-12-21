import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mockData/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

test("should load RestuarantMenu component", async () => {
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

  // go to "Biriyani (5)" accordian header
  const accordianHeader = screen.getByText("Biriyani (5)");
  // click accordian header
  fireEvent.click(accordianHeader);
  //check 5 Biriyani items have
  expect(screen.getAllByTestId("foodItems").length).toBe(5);
  //check any item is added to the cart
  expect(screen.getByText("Cart (0)")).toBeInTheDocument();
  // go to the" Add +" button
  const addBtn = screen.getAllByRole("button", { name: "Add +" });
  // click the" Add +" button
  fireEvent.click(addBtn[0]);
  // check one item was added to the cart
  expect(screen.getByText("Cart (1)")).toBeInTheDocument();
  // click the" Add +" button
  fireEvent.click(addBtn[1]);
  // check second item was added to the cart
  expect(screen.getByText("Cart (2)")).toBeInTheDocument();
  // check how many items cart has
  // foodItems = 7 ( 5 + 2)
  expect(screen.getAllByTestId("foodItems").length).toBe(7);
  // click "Clear Cart" button
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  // check any item has been in the cart
  expect(screen.getAllByTestId("foodItems").length).toBe(5);
  // check "Cart is empty!" is displyed
  expect(screen.getByText("Cart is empty!")).toBeInTheDocument();
});
