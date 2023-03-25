import { describe, test, expect } from "vitest";

import { screen, render } from '@testing-library/react'

import Button from ".";
describe('Header', () => {
    const title = 'test'
    test("Rendering the Button component", () => {
        const { debug } = render(<Button title={title} />)
        debug()
    })
    test("Should show the title in button", () => {
        render(<Button title={title} />)
        const button = screen.getByRole("main")
        expect(button).toBeInTheDocument()
    })
})