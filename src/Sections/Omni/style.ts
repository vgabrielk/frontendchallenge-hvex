import styled from "styled-components";

type Props = {
    background?: string,
    color?: string,
    withBorderBottom?: boolean,
    center?: boolean
}
export const Omni = styled.section`
    height: auto;
    padding: 2rem 0;
    background-color: var(${(props: Props) => props.background});
`

export const OmniContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    width: 45%;
    @media(max-width: 920px){
        width: 100%;
    }

`

export const OmniDetails = styled.div`
  padding: 2rem 0;
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

export const OmniSecondSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 55%;
    @media(max-width: 920px){
        width: 100%;
    }
`


export const Info = styled.div`
    display: flex;
    justify-content: ${(props: Props) => props.center ? 'center' : 'space-between'};
    @media(max-width: 920px){
        flex-direction: column;
    }
`

export const Title = styled.h2`
    border-bottom: ${props => props.withBorderBottom ? '5px solid var(--light-blue)' : ''};
    margin-top: 2rem;
    width: 180px;
    height: ${props => props.withBorderBottom ? '60px' : ''};
    color: var(${(props: Props) => props.color});
    white-space: nowrap;
    font-size: 1.6rem;
    @media(max-width: 900px){
        font-size: 1.8em;
    }
    @media(max-width: 600px){
        font-size: 1.3em;
    }
`
export const SubTitle = styled.h2`
    color: var(${(props: Props) => props.color});
    font-size: 1.6rem;
    @media(max-width: 900px){
        font-size: 1.4em;
    }
    `
export const Paragraph = styled.p`
    color: var(${(props: Props) => props.color});
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

export const OmniSolutions = styled.div`
    display:grid;
    grid-template-columns: auto auto auto auto;
    grid-row: auto auto;    
    place-content: center;
    grid-column-gap: 20px;
    grid-row-gap: 5px;
    div {
        transition: all .5s;
        margin: 0 auto;
        &:hover {
        cursor: pointer;
        opacity: .5;
    }
    }
    p {
        text-align: center;
        color: var(--dark-blue);
        font-weight: 600;
        margin-top: 10px;
        font-size: .8rem;
    }
    &::-webkit-scrollbar {
     height: 0;
    }
    @media(max-width: 1100px){
        grid-template-columns: 100px 100px 100px  100px;
        }
     @media(max-width: 920px){
        place-content: center;
        grid-template-columns: 150px 150px 150px  150px;
        place-items: center;
        }
     @media(max-width: 745px){
        grid-template-columns:  150px 150px 150px;
     }
     @media(max-width: 553px){
            grid-template-columns:  150px;
        }
`

export const Image = styled.img`
    width: 350px;
    object-fit: cover;
    @media(max-width: 920px){
        display: none;
    }
`

export const SolutionsCard = styled.div`
    background-color: var(--gray-blue);
    padding:20px;
    height:70px;
    width:70px;
    border-radius:50%;
    gap: 20px;
    color:#fff;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family:sans-serif;
    text-align: center;
    transition: all .5s ease;
    p {
        color: var(--light-blue);
        font-weight: bold;
    } 
   
`