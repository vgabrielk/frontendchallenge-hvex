import { describe, test, expect } from "vitest";

import { screen, render } from '@testing-library/react'
import MainPage from ".";


describe('MainPage', () => {
    const titleJSX = 'Tenha Informações em tempo real das condições dos ativos e com o monitoramento inteligente'
    const subtitleJSX = 'Tenha Informações em tempo real das condições dos ativos e com o monitoramento inteligente'
    const buttonTextJSX = 'Quero mais informações'
    test('Assert that the title do not have errors', () => {
        render(<MainPage />);
        const title = screen.getByText(titleJSX)
        expect(title).toBeInTheDocument()
    })
    test('Assert that the subtitle do not have errors', () => {
        render(<MainPage />);
        const subtitle = screen.getByText(subtitleJSX)
        expect(subtitle).toBeInTheDocument()
    })
    test('Assert that the button do not have errors', () => {
        render(<MainPage />);
        const button = screen.getByText(buttonTextJSX)
        expect(button).toBeInTheDocument()
    })
    test('Should render the image', () => {
        render(<MainPage />);
        const image = screen.getByRole("img")
        expect(image).toBeInTheDocument()
    })
})