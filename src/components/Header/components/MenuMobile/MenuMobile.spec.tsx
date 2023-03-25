import { describe, test, expect } from "vitest";


import { screen, render, fireEvent } from '@testing-library/react'
import MenuMobile from ".";

describe('MenuMobile', () => {
    test('Assert that the menu has opened after onClick', () => {
        render(<MenuMobile />)
        const menuButton = screen.getByRole("alertdialog");
        const contentMenu = screen.getByRole("contentinfo");
        fireEvent.click(menuButton);
        expect(contentMenu).toBeInTheDocument()
    })
})