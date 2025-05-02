import {render,screen} from "@testing-library/react";
import Skills from "./Skills";
describe("Skills", () => {
    const skills = ["JavaScript", "React", "Node.js"];
    test("renders correctly", () => {
        render(<Skills skills={skills} />);
        const listElement =screen.getByRole("list")
        expect(listElement).toBeInTheDocument()
    })

    test("renders list of skills", () => {
        render(<Skills skills={skills} />);
        const listItems = screen.getAllByRole("listitem");
        expect(listItems).toHaveLength(skills.length);
    })
    test('renders Login button',() => {
        render(<Skills skills={skills} />)
        const loginButton = screen.queryByRole("button",{
            name : "Login"
        })
        expect(loginButton).toBeInTheDocument()
    })

    test('Start Learning button is not render',() => {
        render(<Skills skills={skills} />)
        const startLearningButton = screen.queryByRole('button', {
            name : "Start Learning"
        })
        expect(startLearningButton).not.toBeInTheDocument()
    })

    test('Start Learning button is eventually render',async () => {
        render(<Skills skills={skills} />)
        const startLearningB = await screen.findByRole("button", {
            name : "Start Learning"
        },{timeout : 2000})
        expect(startLearningB).toBeInTheDocument()
    })
})