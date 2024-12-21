import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mockData/resCardMock.json";
import "@testing-library/jest-dom";

test("should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  // Check if the "Pizza Hut" name is rendered
  const name = screen.getByText("Pizza Hut");

  // Assert that the name is rendered properly
  expect(name).toBeInTheDocument();
});
 