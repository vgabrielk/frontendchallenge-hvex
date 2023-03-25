import { describe, test, expect } from "vitest";

import { screen, render } from '@testing-library/react'
import Omni from ".";


describe('Omni', () => {
    const titleJSX = 'OMNI TRAFO'
    const subtitleJSX = 'É o dispositivo capaz de integrar os transformadores as redes inteligentes'
    const paragraphJSX = 'O Omni Trafo envia informações em tempo real, permitindo a administração remota de dados importantes da rede elétrica, como tensão, corrente, potência passante, energia, temperatura, sobrecarga entre outros, mapeando seu funcionamento, prevendo a vida útil dos ativos e aferindo perdas técnicas e não técnicas.'
    test('Assert that the title do not have errors', () => {
        render(<Omni />);
        const title = screen.getByText(titleJSX)
        expect(title).toBeInTheDocument()
    })
    test('Assert that the subtitle do not have errors', () => {
        render(<Omni />);
        const subtitle = screen.getByText(subtitleJSX)
        expect(subtitle).toBeInTheDocument()
    })
    test('Assert that the paragraph do not have errors', () => {
        render(<Omni />);
        const paragraph = screen.getByText(paragraphJSX)
        expect(paragraph).toBeInTheDocument()
    })
})