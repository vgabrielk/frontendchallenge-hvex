import React from 'react'
import { Container } from '../../styles/components/Container'
import OmniTrafo from '../../assets/svg/omni-trafo-1.svg'
import * as S from './style'

const MainPage = () => {
    return (
        <S.MainPage>
            <Container>
                <S.PageContent>
                    <S.Title data-testid="title" data-aos="fade-up" >Tenha Informações em tempo real das condições dos ativos e com o monitoramento inteligente</S.Title>
                    <S.SubTitle data-testid="subtitle" data-aos="fade-up" data-aos-duration="2000">Tenha acesso a informações em tempo real, administração remota de dados importantes da rede elétrica como: tensão, corrente, potência passante, energia, temperatura, sobrecarga entre outros, mapeando seu funcionamento, prevendo a vida útil dos ativos e aferindo perdas técnicas e não técnicas.</S.SubTitle>
                    <S.ButtonInfo data-testid="button" data-aos="fade-up" data-aos-duration="3000">
                        Quero mais informações
                    </S.ButtonInfo>
                </S.PageContent>
            </Container>
            <S.ImageRight  role="img" alt='Omni trafo' src={OmniTrafo} />
        </S.MainPage>
    )
}

export default MainPage