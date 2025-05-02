import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading",{level:1})
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole("heading",{level:2})
    expect(sectionHeading).toBeInTheDocument()

    const nameElement = screen.getByRole("textbox", { name: /name/i });
    expect(nameElement).toBeInTheDocument();

    const descriptionElement = screen.getByRole("textbox", {
      name: /description/i,
    });
    expect(descriptionElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox", {
      name: /job location/i,
    });
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox", {
      name: /i agree to the terms and conditions/i,
    });
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button", { name: /submit/i });
    expect(submitButtonElement).toBeInTheDocument();
  });
});
