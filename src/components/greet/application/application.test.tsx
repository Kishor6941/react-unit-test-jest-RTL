import { render,screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
    test('renders correctly',() => {
        render(<Application />)
        const nameElement = screen.getByRole('textbox', { name: /name/i })
        expect(nameElement).toBeInTheDocument()

        const jobLocationElement = screen.getByRole('combobox', { name: /job location/i })
        expect(jobLocationElement).toBeInTheDocument()

        const termsElement = screen.getByRole('checkbox', { name: /i agree to the terms and conditions/i })
        expect(termsElement).toBeInTheDocument()

        const submitButtonElement = screen.getByRole('button', { name: /submit/i })
        expect(submitButtonElement).toBeInTheDocument()
    })
})