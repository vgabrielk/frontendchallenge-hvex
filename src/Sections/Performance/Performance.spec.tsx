import { describe, test, expect } from "vitest";

import { screen, render } from '@testing-library/react'
import Performance from ".";


describe('Performance', () => {
    beforeEach(() => {
        render(<Performance />);
    })
    it('Assert that the title be in screen', () => {
        const title = screen.getByTestId("title")
        expect(title.innerHTML).toEqual("Desenvolvido para melhorar a performance dos ativos de distribuição")
    })
    it("Assert that the image transformer be in screen", () => {
        const image = screen.getByTestId("image-content")
        expect(image).toBeDefined()
    })    
    
})
