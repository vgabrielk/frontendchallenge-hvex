import React from 'react'
import { OmniData } from '../../Mock/OmniData/OmniData'
import { Container } from '../../styles/components/Container'
import * as S from './style'
import OmniTrafoImage from '../../assets/svg/omni-trafo-1.svg'

import { Fragment } from 'react'
type OmniType = {
    id: number,
    title: string,
    image: string,
    duration?: number
}

const Omni = () => {
    return (
        <Fragment>
            <S.Omni background="--dark-blue">
                <Container>
                    <S.Info>
                        <S.OmniContent>
                            <S.Title data-testid="title" color="--white " data-aos="fade-up">OMNI TRAFO</S.Title>
                            <S.SubTitle data-testid="subtitle" color="--light-blue" data-aos="fade-up">É o dispositivo capaz de integrar os transformadores as redes inteligentes</S.SubTitle>
                            <S.Paragraph data-testid="paragraph" color="--white" data-aos="fade-up">O Omni Trafo envia informações em tempo real, permitindo a administração remota de dados importantes da rede elétrica, como tensão, corrente, potência passante, energia, temperatura, sobrecarga entre outros, mapeando seu funcionamento, prevendo a vida útil dos ativos e aferindo perdas técnicas e não técnicas.</S.Paragraph>
                        </S.OmniContent>
                        <S.OmniDetails>
                            {OmniData.one.map((item: OmniType) => (
                                <S.Card data-aos="flip-left" key={item.id}>
                                    <img width='80px' src={item.image} alt="" />
                                    <p>{item.title}</p>
                                </S.Card>
                            ))}
                        </S.OmniDetails>
                    </S.Info>
                </Container>
            </S.Omni>
            <Container>
                <S.Omni background="--white">
                    <S.Info>
                        <S.OmniContent>
                            <S.Image data-testid="image-omni" src={OmniTrafoImage} />
                        </S.OmniContent>
                        <S.OmniSecondSection>
                            <S.Title data-testid="second-title" color='--dark-blue' withBorderBottom data-aos="fade-up">OMNI TRAFO</S.Title>
                            <S.SubTitle data-testid="second-subtitle" color='--dark-blue' data-aos="fade-up">Monitoramento inteligente de transformadores de distribuição</S.SubTitle>
                            <S.Paragraph data-testid="second-paragraph" color='--brown' data-aos="fade-up">O Omni trafo é uma solução consolidada para monitoramento de ativos.   Através deste equipamento, informações importantes da rede são enviadas em tempo real , permitindo, assim, a administração remota de dados como:</S.Paragraph>
                            <S.OmniSolutions>
                                {OmniData.three.map((item: OmniType) => (
                                    <div key={item.id}>
                                        <S.SolutionsCard data-aos="fade-up" data-aos-duration={item.duration}>
                                            <img src={item.image} alt="" />
                                        </S.SolutionsCard>
                                        <p data-aos="fade-up" data-aos-duration={item.duration}>{item.title}</p>
                                    </div>
                                ))}
                            </S.OmniSolutions>
                        </S.OmniSecondSection>
                    </S.Info>
                </S.Omni>
            </Container>
        </Fragment>
    )
}

export default Omni