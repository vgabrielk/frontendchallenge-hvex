import styled from "styled-components";

export const KnowMore = styled.section`
    padding: 2rem;
    background-color: var(--dark-blue);
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    span {
        margin: 0 auto;
        height: 5px;
        width: 180px;
        background-color: var(--light-blue);
        @media (max-width: 900px) {
        margin: 0 ;
        }
     }
    `
export const Title = styled.h2`
    margin: 0 auto;
    text-align: center;
    width: 40%;
    height: auto;
    color: var(--white);
    @media (max-width: 900px) {
        width: 70%;
        text-align: start;
        width: 100%;
    }
`

export const Button = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 900px) {
        justify-content: flex-start;
    }
`