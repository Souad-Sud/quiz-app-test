import Header from "@/component/Header";
import {render, screen} from "@testing-library/react";

describe("That the header renders correctly", () => {
    it('Tests that the page title is on screen', () => {
        render(<Header />);

        const pageTitle = screen.getByRole('heading', 
            {
                level:1, 
                name: /trivia quiz/i
            }
        );

        expect(pageTitle).toBeInTheDocument();
    })

})