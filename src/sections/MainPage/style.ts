import styled from "styled-components"

export const MainPage = styled.main`
    gap: 20px;
    background-color: var(--dark-blue);
    height: 90vh;
    padding: 2rem 0;
    @media(max-width:900px){
        height: auto;
    }
    `
export const PageContent = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    
`

export const Title = styled.h1`
    width: 70%;
    color: var(--white);
    @media(max-width: 900px){
        width: 100%;
        font-size: 2em;
    }
    @media(max-width: 600px){
        font-size: 1.5em;
    }
    `

export const SubTitle = styled.h4`
    width: 70%;
    color: var(--white);
    margin-top: 20px;
    font-weight: 300;
    @media(max-width: 900px){
        width: 100%;
        font-size: 1em;
        margin-top: 10px;
    }
    @media(max-width: 600px){
        font-size: .8em;
    }
`
export const ImageRight = styled.img`
    position: absolute;
    right: 0;
    top: 2rem;
    z-index: 1;
    width: 300px;
    @media(max-width: 900px){
        display: none;
    }
`

export const ButtonInfo = styled.button`
    width: 200px;
    height: 35px;
    white-space: nowrap;
    margin-top: 30px;
    background-color: var(--light-blue);
    color: var(--white);
    border-radius: 6px;
    cursor: pointer;
    border: none;
    transition: all .5s ease;

    &:hover {
        opacity: 0.5;
    }
`