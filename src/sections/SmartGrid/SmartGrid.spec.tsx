import { describe, test, expect } from "vitest";

import { screen, render } from '@testing-library/react'
import SmartGrid from ".";


describe('SmartGrid', () => {
    const titleJSX = 'Seja bem-vindo a era da energia inteligente'
    const subtitleJSX = 'As redes inteligentes são um caminho sem volta, o desenvolvimento e disceminação de dispositivos de medição e monitoramento são as ferramentas para redução de custos, perdas e trazem mais previsibilidade para as utilities de energia.'
    test('Assert that the title do not have errors', () => {
        render(<SmartGrid />);
        const title = screen.getByText(titleJSX)
        expect(title).toBeInTheDocument()
    })
    test('Assert that the subtitle do not have errors', () => {
        render(<SmartGrid />);
        const subtitle = screen.getByText(subtitleJSX)
        expect(subtitle).toBeInTheDocument()
    })
    test('Should render the image', () => {
        render(<SmartGrid />);
        const image = screen.getByTestId("image")
        expect(image).toBeInTheDocument()
    })
})