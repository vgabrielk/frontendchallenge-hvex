import { describe, expect } from "vitest";

import { screen, render } from '@testing-library/react'
import Header from ".";

describe('Header', () => {
    it("Rendering the Header component", () => {
        const { debug } = render(<Header />)
        debug()
    })
    it("Should show the logo img", () => {
        render(<Header />)
        const logo = screen.getByRole("img")
        expect(logo).toBeInTheDocument()
    })
    
})