import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("should render Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" }); // find specific button among all buttons
  expect(loginButton).toBeInTheDocument();
});

test("should render Header component with a cart items 1", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //const cartItems = screen.getByText("Cart(0)")
  const cartItems = screen.getByText("Cart (1)"); // find specific button among all buttons
  expect(cartItems).toBeInTheDocument();
});

test("should render Header component with a cart items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //const cartItems = screen.getByText("Cart(0)")
  const cartItems = screen.getByText(/Cart/); // find specific button among all buttons
  expect(cartItems).toBeInTheDocument();
});

test("should change the Login button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" }); // find specific button among all buttons

  fireEvent.click(loginButton); // Button click

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
