import { describe, test, expect } from "vitest";

import { screen, render } from '@testing-library/react'
import Omni from ".";


describe('Part 1 Omni trafo', () => {
    it('Assert that the title be in screen', () => {
        render(<Omni />);
        const title = screen.getByTestId("title")
        expect(title.innerHTML).toEqual("OMNI TRAFO")
    })
    it('Assert that the subtitle be in screen', () => {
        render(<Omni />);
        const subtitle = screen.getByTestId('subtitle')
        expect(subtitle.innerHTML).toEqual("É o dispositivo capaz de integrar os transformadores as redes inteligentes")
    })
    it('Assert that the paragraph be in screen', () => {
        render(<Omni />);
        const paragraph = screen.getByTestId("paragraph")
        expect(paragraph.innerHTML).toEqual("O Omni Trafo envia informações em tempo real, permitindo a administração remota de dados importantes da rede elétrica, como tensão, corrente, potência passante, energia, temperatura, sobrecarga entre outros, mapeando seu funcionamento, prevendo a vida útil dos ativos e aferindo perdas técnicas e não técnicas.")
    })
})

describe('Part 2 Omni trafo', () => {
    it('Assert that the second title be in screen', () => {
        render(<Omni />);
        const title = screen.getByTestId("second-title")
        expect(title.innerHTML).toEqual("OMNI TRAFO")
    })
    it('Assert that the second subtitle be in screen', () => {
        render(<Omni />);
        const subtitle = screen.getByTestId("second-subtitle")
        expect(subtitle.innerHTML).toEqual("Monitoramento inteligente de transformadores de distribuição")
    })
    it('Assert that the second paragraph be in screen', () => {
        render(<Omni />);
        const subtitle = screen.getByTestId("second-paragraph")
        expect(subtitle.innerHTML).toEqual("O Omni trafo é uma solução consolidada para monitoramento de ativos.   Através deste equipamento, informações importantes da rede são enviadas em tempo real , permitindo, assim, a administração remota de dados como:")
    })
    it('Assert that the image be in screen', () => {
        render(<Omni />);
        const image = screen.getByTestId("image-omni")
        expect(image).toBeInTheDocument()
    })
})