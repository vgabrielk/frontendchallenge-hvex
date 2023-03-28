import { describe, test, expect } from "vitest";

import { screen, render } from '@testing-library/react'
import Header from ".";
import { NavData } from "../../Mock/NavData/NavData";

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