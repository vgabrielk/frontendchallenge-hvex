import React, { Fragment, useEffect, useState } from 'react'
import { FaqData } from '../../Mock/FaqData/FaqData'
import * as S from './style'
import Chevron from '../../assets/svg/chevron.svg'

type FaqType = {
    id: number
    question: string,
    answer: string,
    opened: boolean
}

const Faq = () => {
    const [clicked, setClicked] = useState({})

    const toogle = (item: object) => {
        if (clicked === item) {
            return setClicked({})
        }
        setClicked(item)
    }


    return (
        <S.Faq>
            <S.FaqHeader data-testid="title" data-aos="fade-up">Perguntas Frequentes</S.FaqHeader>
            {FaqData.map((item: FaqType) => (
                <Fragment key={item.id}>
                    <S.FaqContent data-aos="fade-up" onClick={() => toogle(item)}>
                        <span style={{transform: `rotate(${clicked === item ? '0' : '90deg'})`}}>
                            <img src={Chevron} alt="" />
                        </span>
                        <p>{item.question}</p>
                    </S.FaqContent>
                    {clicked === item ? (
                        <S.FaqAnswer data-aos="fade-up" data-testid="answer">
                            <p>{item.answer}</p>
                        </S.FaqAnswer>
                    ) : null}
                </Fragment>
            ))}
        </S.Faq>
    )
}

export default Faq