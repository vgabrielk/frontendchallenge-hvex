import { describe, test, expect } from "vitest";

import { screen, render } from '@testing-library/react'
import Header from ".";
import { NavData } from "../../Mock/NavData";

describe('Header', () => {
    test("Rendering the Header component", () => {
        const { debug } = render(<Header />)
        debug()
    })
    test("Should show the logo img", () => {
        render(<Header />)
        const logo = screen.getByRole("img")
        expect(logo).toBeInTheDocument()
    })
    
})