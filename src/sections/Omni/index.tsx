import React from 'react'
import { OmniData } from '../../Mock/OmniData/OmniData'
import { Container } from '../../styles/components/Container'
import * as S from './style'

type OmniType = {
    id: number,
    title: string,
    image: string
}

const Omni = () => {
    return (
        <S.Omni>
            <Container>
                <S.Info>
                    <S.OmniContent>
                        <S.Title>OMNI TRAFO</S.Title>
                        <S.SubTitle>É o dispositivo capaz de integrar os transformadores as redes inteligentes</S.SubTitle>
                        <S.Paragraph>O Omni Trafo envia informações em tempo real, permitindo a administração remota de dados importantes da rede elétrica, como tensão, corrente, potência passante, energia, temperatura, sobrecarga entre outros, mapeando seu funcionamento, prevendo a vida útil dos ativos e aferindo perdas técnicas e não técnicas.</S.Paragraph>
                    </S.OmniContent>
                    <S.OmniDetails>
                        {OmniData.map((item: OmniType) => (
                            <S.Card key={item.id}>
                                <img width='80px' src={item.image} alt="" />
                                <p>{item.title}</p>
                            </S.Card>
                        ))}
                    </S.OmniDetails>
                </S.Info>
            </Container>
        </S.Omni>
    )
}

export default Omni