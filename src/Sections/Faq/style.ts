import styled from "styled-components";

type Props = {
    isOpened: boolean,
}

export const Faq = styled.section`
    padding: 2rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--gray);
`
export const FaqHeader = styled.h2`
    text-align: center; 
    color: var(--dark-blue);
    margin: 2rem 0;
    @media (max-width: 700px) {
        font-size: 22px;
    }
`
export const FaqContent = styled.button`
    background-color : var(--white);
    border: none;
    margin: 0 auto;
    margin-top: 20px;
    height: auto;
    width: 60%;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.19);
    padding: 2rem;
    display: flex;
    position: relative;
    span {
        position: absolute;
        right: 1rem;
    }
    p {
        color: var(--dark-blue);
        font-weight: bold;
        text-align: start;
        width: 90%;
    }
    @media (max-width: 900px) {
        width: 100%;
    }
    
`
export const FaqAnswer = styled.div`
    background-color : var(--white);
    transform: translateY(-10px);
    border: none;
    margin: 0 auto;
    border-radius: 0 0 10px 10px;
    height: 150px;
    width: 60%;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.19);
    padding: 1rem 2rem;
    position: relative;
    p {
        color: var(--brown);
        font-weight: 300;
    }
    @media (max-width: 900px) {
        width: 100%;
        height: auto;
    }
`