import { describe, test, expect } from "vitest";

import { screen, render } from '@testing-library/react'
import MainPage from ".";


describe('MainPage', () => {
    it('Assert that the title do not have errors', () => {
        render(<MainPage />);
        const title = screen.getByTestId("title")
        expect(title.innerHTML).toEqual("Tenha Informações em tempo real das condições dos ativos e com o monitoramento inteligente")
    })
    it('Assert that the subtitle do not have errors', () => {
        render(<MainPage />);
        const subtitle = screen.getByTestId("subtitle")
        expect(subtitle.innerHTML).toEqual("Tenha acesso a informações em tempo real, administração remota de dados importantes da rede elétrica como: tensão, corrente, potência passante, energia, temperatura, sobrecarga entre outros, mapeando seu funcionamento, prevendo a vida útil dos ativos e aferindo perdas técnicas e não técnicas.")
    })
    it('Assert that the button do not have errors', () => {
        render(<MainPage />);
        const button = screen.getByTestId("button")
        expect(button.innerHTML).toEqual("Quero mais informações")
    })
    it('Should render the image', () => {
        render(<MainPage />);
        const image = screen.getByRole("img")
        expect(image).toBeInTheDocument()
    })
})