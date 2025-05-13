import styled from "styled-components";

export const Footer = styled.footer`
  height: auto;
  padding: 4rem 0;
  width: 100%;
  background-color: var(--dark-blue);
  position: relative;
`;

export const FooterContent = styled.div`
  width: 100%;
  background: var(--dark-blue);
  display: grid;
  grid-template-columns: 12% 23% 23% 23%;
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  margin-bottom: 4rem;
  @media (max-width: 840px) {
    grid-template-columns: 0 23% 23% 23%;
    margin-top: 2rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: 100%;
    margin-top: 2rem;
  }
`;

export const FooterLogoContent = styled.div``;

export const LogoImage = styled.img`
  width: 80px;
  @media (max-width: 840px) {
    top: 1rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const FooterBlock = styled.div``;

export const InfoContent = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

export const Title = styled.h3`
  color: #52e0ff;
  margin-bottom: 2rem;
  white-space: nowrap;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const SubHead = styled.p`
  color: var(--white);
  margin-top: 15px;
`;

export const Social = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  div {
    img {
        transition: all .3s ease-in-out;
        cursor: pointer;
        &:hover {
            transform: translateY(-5px);
        }
    }
  }
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const Rights = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--white);
  padding-top: 1rem;
  @media (max-width: 840px) {
    flex-direction: column;
  }
  p {
    color: var(--white);
    font-size: 0.8em;
  }
  .second {
  }
  div {
    display: flex;
    align-items: center;
    gap: 40px;
    @media (max-width: 840px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 0;
    }
  }
`;
