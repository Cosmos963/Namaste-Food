import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
// toBeInTheDocument

// Unit Testing

describe("Contact Us Page test cases", () => {
  beforeAll(() => {
    // once
    console.log("Runs before all");
  });
  //   helpful in cleanup task
  beforeEach(() => {
    console.log("Runs before each test");
  });
  afterAll(() => {
    console.log("Runs after all");
  });
  afterEach(() => {
    console.log("Runs after each test");
  });

  test("Should load contact component", () => {
    render(<Contact />);

    //   Querying
    const heading = screen.getByRole("heading");

    //  Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button in contact component", () => {
    render(<Contact />);

    //   Querying
    const button = screen.getByText("Submit");
    //   const button = screen.getByRole("button");
    //   const button = screen.getByText("Random");

    //  Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load button in contact component", () => {
    render(<Contact />);

    //   Querying
    const inputName = screen.getByPlaceholderText("Name");

    //  Assertion
    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input boxes on the contact component", () => {
    render(<Contact />);

    //   Querying
    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes.length);

    //  Assertion
    //   expect(inputBoxes.length).toBe(2);
    //   expect(inputBoxes.length).not.toBe(3);
    expect(inputBoxes.length).toBeGreaterThanOrEqual(2);
  });
});
