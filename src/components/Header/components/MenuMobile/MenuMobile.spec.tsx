import { describe, test, expect } from "vitest";


import { screen, render, fireEvent } from '@testing-library/react'
import MenuMobile from ".";

describe('MenuMobile', () => {
    test('Assert that the menu has opened and closed after onClick', () => {
        render(<MenuMobile />)
        const menuButton = screen.getByTestId("menuopen");
        const contentMenu = screen.getByTestId("menuclosed");
        fireEvent.click(menuButton);
        expect(contentMenu).toHaveAttribute("data-testid", "menucontent");
        fireEvent.click(menuButton);
        expect(contentMenu).toHaveAttribute("data-testid", "menuclosed")
    })
})