import { render,screen } from "@testing-library/react";
import Greet from "./Greet";



describe('Greet Component', () => {
    test("with hello",() => {
        render(<Greet />);
        const greetElement = screen.getByText(/Hello/);
        expect(greetElement).toBeInTheDocument();
    })
    
//     test('with hello name',() => {
//         render(<Greet name='Kishor'/>);
//         const nameElement = screen.getByText('Hello Kishor')
//         expect(nameElement).toBeInTheDocument();
//     })
 })
