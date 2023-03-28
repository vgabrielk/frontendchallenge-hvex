import styled from "styled-components"

export const Info = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: var(--gray);
    padding: 2rem 4rem;
    box-sizing: border-box;
    @media(max-width: 920px){
        flex-direction: column;
    }
    @media(max-width: 810px) {
        padding: 0 2rem;
    }
`

export const Title = styled.h2`
    margin-top: 2rem;
    width: 40%;
    color: var(--dark-blue);
    font-size: 1.6rem;
    position: relative;
    &::after{
        content: '';
        position: absolute;
        background-color: var(--light-blue);
        height: 5px;
        width: 170px;
        bottom: -2rem;
        left: 0;
    }
    @media(max-width: 900px){
        font-size: 1.8em;
        width: 100%;
    }
    @media(max-width: 600px){
        font-size: 1.3em;
    }
`
export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ContentInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    div {
        display: flex;
        align-items: center;
        gap: 20px
    }
    span {
        color: var(--brown);
        font-weight: 700;
    }
    @media (max-width: 1100px) {
        margin-top: 4rem;
    }
`

export const Image = styled.img`
    width: 500px;
    @media (max-width: 920px) {
        display: none;
    }
`