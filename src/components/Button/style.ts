import styled from "styled-components";

interface PropsResponsive {
    responsive: boolean;
};

export const Button = styled.button<PropsResponsive>`
    border: 1px solid var(--light-blue);
    background-color: transparent;
    padding: 10px 15px;
    color: var(--light-blue);
    border-radius: 6px;
    cursor: pointer;
    transition: all .5s ease;
    white-space: nowrap;
    &:hover {
        opacity: .5;
    }
    @media(max-width: 810px){
       display: ${(props : PropsResponsive) => props.responsive ? 'none' : 'block'};
    }
`