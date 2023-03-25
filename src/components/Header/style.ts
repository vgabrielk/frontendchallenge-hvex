import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: auto;
    background-color: var(--dark-gray);
    position: sticky;
    z-index: 2;
`
export const HeaderContent = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

`
export const Logo = styled.img`
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
`
export const Navigation = styled.nav`
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 30px;
`
export const Link = styled.li`
    list-style: none;
    color: var(--white);
    transition: all .5s ease;
    white-space: nowrap;
    &:hover {
        color: var(--light-blue);
        cursor: pointer;
        transform: translateY(-5px);
    }
    @media(max-width: 810px){
        display: none;
    }
`


