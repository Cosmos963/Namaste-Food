import { fireEvent, render } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import VariableName from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";
// Procider is needed to provide store as redux is used

// BrowserRouter is there because Link is there

// VariableName = MOCK_DATA => default export
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(VariableName),
  })
);

it("Should load the restaurant menu components", async () => {
  act(async () =>
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

  const accordianHeader = screen.getByText("Biryani (5)");
  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(5);

  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  console.log(addBtns.length);
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

  //    5 from RestaurantMenu and 2 from Cart. (5+2=7)
  expect(screen.getAllByTestId("foodItems").length).toBe(7);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  //   5 from RestaurantMenu
  expect(screen.getAllByTestId("foodItems").length).toBe(5);

  expect(
    screen.getByText("Cart is empty. Add items to the cart!")
  ).toBeInTheDocument();
});
