import styled from "styled-components";

export const SmartGrid = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: flex-start;
    padding: 2rem 0;
    gap: 4rem;
`

export const Image = styled.img`
   width: 50%;
   object-fit: cover;
   @media(max-width: 900px){
    display: none;
   }
`
export const Content = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    gap: 20px;
`

export const Title = styled.h2`
    width: 70%;
    color: var(--green-blue);
    @media(max-width: 1090px){
        width: 100%;
    }
    @media(max-width: 900px){
        font-size: 1.8em;
    }
    @media(max-width: 600px){
        font-size: 1.3em;
    }
`
export const SubTitle = styled.p`
    width: 70%;
    color: var(--brown);
    @media(max-width: 1090px){
        width: 100%;
    }
`

export const UtilitiesContent = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const Utilities = styled.div`
    display: flex;
    flex-direction: column;
`
export const UtilitieText = styled.h3`
    color: var(--brown);
    @media(max-width: 900px){
        font-size: 1em;
    }
    @media(max-width: 600px){
        font-size: .8em;
    }
    
`
export const IconCheck = styled.img`

`