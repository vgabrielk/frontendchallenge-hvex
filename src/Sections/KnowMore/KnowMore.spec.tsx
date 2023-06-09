import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import KnowMore from ".";


describe('KnowMore', () => {
    beforeEach(() => {
        render(<KnowMore />);
    })
    it('Assert that the title be in screen', () => {
        const title = screen.getByTestId("title");
        expect(title.innerHTML).toEqual("Quer saber mais sobre como podemos te ajudar a melhorar a performance de seus ativos?")
    })
    it('Assert that the button be in screen', () => {
        const button = screen.getByText("Falar com um consultor");
        expect(button).toBeInTheDocument()
    })
})