import { render,screen } from "@testing-library/react";
import CounterTwo from "./CounterTwo";
import userEvent from "@testing-library/user-event";

describe("CounterTwo", () => {
    test("renders correctly",() => {
        render(<CounterTwo count={0} />)
        const textElement = screen.getByText(/Counter Two/i)
        expect(textElement).toBeInTheDocument()
        
    })

    test('handlers are called', async () => {
        userEvent.setup()
        const incrementHandler = jest.fn()
        const decrementHandler = jest.fn()
        render(<CounterTwo count={0} 
            increment = {incrementHandler}
            decrement = {decrementHandler} 
            />)
        const incrementButton = screen.getByRole("button", {
            name : /increment/i
        })
        const decrementButton = screen.getByRole("button", {
            name : /decrement/i
        })
        await userEvent.click(incrementButton)
        expect(incrementHandler).toHaveBeenCalledTimes(1)
        await userEvent.click(decrementButton)
        expect(decrementHandler).toHaveBeenCalledTimes(1)
    })
})
