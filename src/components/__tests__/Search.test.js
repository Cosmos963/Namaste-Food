import { fireEvent, render } from "@testing-library/react";
import Body from "../Body";
import { act } from "react";
import MOCK_DATA from "../mocks/mockResList.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// Integration testing

// fetch is a browser given feature not JS
// running on jsdom(browser like environment)
// Trying to make exactly how the fetch function works.
// faking an api call, fetch request
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

// whenever state updates, async operation present in component => wrap component in act()

it("Should search resList for burger text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  //   object simulates e event in onChange
  //   e is given by browser, e.target.value
  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchBtn);

  //   screen should load some number of res cards

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(5);
  //   expect(searchBtn).toBeInTheDocument();
});

// Link error => wrap component in BrowserRouter

it("Should filter top rated restaurants", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
  
    expect(cardsBeforeSearch.length).toBe(20);
  
    const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });
  
    fireEvent.click(topRatedBtn);
  
    //   screen should load some number of res cards
  
    const cardsAfterFilter = screen.getAllByTestId("resCard");
  
    expect(cardsAfterFilter.length).toBe(13);
  });

