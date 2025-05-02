import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading",{level:1})
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole("heading",{level:2})
    expect(sectionHeading).toBeInTheDocument()

    const spanElement = screen.getByTitle("close")
    expect(spanElement).toBeInTheDocument()

    const pElements = screen.getByText(/all fields are mandatory/i)
    expect(pElements).toBeInTheDocument()

    const imgElement = screen.getByAltText(/a person with a laptop/i)
    expect(imgElement).toBeInTheDocument()

    const customElement = screen.getByTestId("custom-elements")
    expect(customElement).toBeInTheDocument()

    const nameElement = screen.getByRole("textbox", { name: /name/i });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText(/name/i,{selector: "input" });
    expect(nameElement2).toBeInTheDocument();

    const nameElementPlaceholder = screen.getByPlaceholderText('Fullname')
    expect(nameElementPlaceholder).toBeInTheDocument()

    const nameElementDisplayValue = screen.getByDisplayValue('Kishor')
    expect(nameElementDisplayValue).toBeInTheDocument()

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

    const termsElement2 = screen.getByLabelText(/i agree to the terms and conditions/i);
    expect(termsElement2).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button", { name: /submit/i });
    expect(submitButtonElement).toBeInTheDocument();
  });
});
