import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button", {
      name: /increment/i,
    });

    expect(buttonElement).toBeInTheDocument();
  });

  test("renders a count 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("increments count on button click", async () => {
    userEvent.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: /increment/i,
    });
    await userEvent.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("renders a count of 10 clicking the set button", async () => {
    userEvent.setup();
    render(<Counter />);
    const setButton = screen.getByRole("spinbutton");
    await userEvent.type(setButton, "10");
    expect(setButton).toHaveValue(10);
    const setButtonElement = screen.getByRole("button", {
      name: /set/i,
    });
    await userEvent.click(setButtonElement);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  test("elements are focused in the right order", async () => {
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: "Set" });
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await userEvent.tab();
    expect(incrementButton).toHaveFocus();

    await userEvent.tab();
    expect(amountInput).toHaveFocus();

    await userEvent.tab();
    expect(setButton).toHaveFocus();
  });
});
