import { describe, test, expect } from "vitest";

import { screen, render } from '@testing-library/react'
import Performance from ".";


describe('Performance', () => {
    it('Assert that the title be in screen', () => {
        render(<Performance />);
        const title = screen.getByTestId("title")
        expect(title.innerHTML).toEqual("Desenvolvido para melhorar a performance dos ativos de distribuição")
    })
    it("Assert that the image transformer be in screen", () => {
        render(<Performance/>);
        const image = screen.getByTestId("image-content")
        expect(image).toBeDefined()
    })    
    
})
