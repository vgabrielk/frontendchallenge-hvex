import styled from "styled-components";

export const Omni = styled.section`
    padding: 2rem 0;
    background-color: var(--dark-blue);
`

export const OmniContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 45%;
    @media(max-width: 920px){
        width: 100%;
    }

`
export const OmniDetails = styled.div`
  display:grid;
  grid-template-columns: 200px 200px;
  grid-row: auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  @media(max-width: 920px){
        margin-top: 2rem;
        place-content: center;
        grid-template-columns: 180px 180px 180px;
        place-content: center;
    }
    @media(max-width: 658px){
        grid-template-columns:  180px 180px;
    }
    @media(max-width: 460px){
        grid-template-columns:  180px;
    }

`

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    @media(max-width: 920px){
        flex-direction: column;
    }
`

export const Title = styled.h2`
    margin-top: 2rem;
    width: 100%;
    color: var(--white);
    @media(max-width: 900px){
        font-size: 1.8em;
    }
    @media(max-width: 600px){
        font-size: 1.3em;
    }
`
export const SubTitle = styled.h2`
    color: var(--light-blue);
    @media(max-width: 900px){
        font-size: 1.4em;
    }
    `
export const Paragraph = styled.p`
    color: var(--white);
    @media(max-width: 900px){
        font-size: .9em;
    }
`

export const Card = styled.div`
    background-color: var(--gray-blue);
    border: 2px solid var(--light-blue);
    padding:20px;
    height:200px;
    border-radius:6px;
    gap: 20px;
    color:#fff;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-between;
    font-family:sans-serif;
    text-align: center;
    transition: all .5s ease;
    p {
        color: var(--light-blue);
        font-weight: bold;
    }
    &:hover {
        transform: translateX(-5px);
        cursor: pointer;
    }
`