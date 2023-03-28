import React from 'react'
import Button from '../../components/Button'
import * as S from './style'

const KnowMore = () => {
    return (
        <S.KnowMore>
                <S.Title data-aos="fade-up" data-testid="title">Quer saber mais sobre como podemos te ajudar a melhorar a performance de seus ativos?</S.Title>
                <span data-aos="fade-up"></span>
                <S.Button>
                    <Button fadeUp title='Falar com um consultor' />
                </S.Button>
        </S.KnowMore>
    )
}

export default KnowMore