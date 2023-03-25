import React, { Fragment } from 'react'
import { Container } from '../../styles/components/Container'
import * as S from './style'
import SmartGridImage from '../../assets/img/smart-grid.png'
import { UtilitiesData } from '../../Mock/UtilitiesData/UtilitiesData'
import IconCheck from '../../assets/svg/check.svg'

type Utilities = {
    title: string,
    id: number
}

const SmartGrid = () => {
    return (
        <Container>
            <S.SmartGrid>
                <S.Image data-aos="fade-up" data-testid="image" src={SmartGridImage} alt="" />
                <S.Content>
                    <S.Title data-aos="fade-up">Seja bem-vindo a era da energia inteligente</S.Title>
                    <S.SubTitle data-aos="fade-up">As redes inteligentes são um caminho sem volta,  o desenvolvimento e disceminação de dispositivos de medição e monitoramento são as ferramentas para redução de custos, perdas e trazem mais previsibilidade para as utilities de energia.</S.SubTitle>
                    {UtilitiesData.map((item: Utilities) => (
                        <S.UtilitiesContent data-aos="fade-up" key={item.id}>
                            <S.IconCheck src={IconCheck} />
                            <S.Utilities>
                                <Fragment>
                                    <S.UtilitieText>{item.title}</S.UtilitieText>
                                </Fragment>
                            </S.Utilities>
                        </S.UtilitiesContent>
                    ))}
                </S.Content>
            </S.SmartGrid>
        </Container>
    )
}

export default SmartGrid