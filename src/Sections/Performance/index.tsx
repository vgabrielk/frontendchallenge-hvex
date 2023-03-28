import React, { Fragment } from 'react'
import { PerformanceData } from '../../Mock/PerformanceData/PerformanceData'
import { Container } from '../../styles/components/Container'
import Check from '../../assets/svg/check-black.svg'
import Transformer from '../../assets/img/omni-transformer.png'
import * as S from './style'

type PerformanceType = {
    id: number,
    title: string
}

const Performance = () => {
    return (
        <S.Info>
                <S.Title data-aos="fade-up" data-testid="title">Desenvolvido para melhorar a performance dos ativos de distribuição</S.Title>
                <S.Content>
                    <S.ContentInfo>
                        {PerformanceData.map((item: PerformanceType) => (
                            <div key={item.id}>
                                <img data-aos="fade-up" src={Check} alt="" />
                                <span data-aos="fade-up">{item.title}</span>
                            </div>
                        ))}
                    </S.ContentInfo>
                    <S.Image data-aos="fade" data-testid="image-content" src={Transformer} />
                </S.Content>
        </S.Info>
    )
}

export default Performance