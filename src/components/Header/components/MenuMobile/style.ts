import styled from "styled-components";

interface MenuProps {
    isOpen: boolean;
};


export const HamburguerMenu = styled.span`
    display: none;
    @media(max-width: 810px){
        display: block;
    }
`
export const MenuContent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: var(--dark-gray);
    transition: all .7s ease;
    display: ${(props: MenuProps) => props.isOpen ? 'flex' : 'none'};
    
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

`

export const CloseMenu = styled.button`
    position: fixed;
    top: 1.5rem;
    right: 2rem;
    background-color: transparent;
    border: none;
`

export const Links = styled.a`
    list-style: none;
    color: var(--white);
    transition: all .5s ease;
    white-space: nowrap;
    cursor: pointer;
    &:hover {
        color: var(--light-blue);
        cursor: pointer;
        transform: translateY(-5px);
    }
`