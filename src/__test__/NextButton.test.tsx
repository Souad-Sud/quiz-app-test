import NextButton from "@/component/NextButton";
import { render, screen } from "@testing-library/react";

it("tests that the next button has the right name", () => {
    render(<NextButton changeQuestion={() => {}}/>)

    const nextButton = screen.getByRole('button', {name: /next/i});
    expect(nextButton).toBeInTheDocument();
});

