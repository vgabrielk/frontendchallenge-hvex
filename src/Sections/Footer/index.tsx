import React, { Fragment } from "react";
import { Container } from "../../styles/components/Container";
import Logo from "../../assets/svg/Logo.svg";

import * as S from "./style";
import { SocialIcons } from "../../Mock/SocialIcons/SocialIcons";

type Icons = {
  id: number,
  social: string,
  image: string

}

const Footer = () => {
  return (
    <S.Footer>
      <Container>
        <S.FooterContent>
          <S.FooterLogoContent data-testid="logo" className="logo">
            <S.LogoImage src={Logo} alt="Logo" />
          </S.FooterLogoContent>
          <S.InfoContent>
            <S.Title data-testid='address'>Endereço</S.Title>
            <S.SubHead data-testid='address-info'>
              R. Ismael Pinto de Noronha, 86 - Nossa Sra. de Fatima, Itajubá -
              MG, 37502-508
            </S.SubHead>
          </S.InfoContent>
          <S.InfoContent data-testid="contact">
            <S.Title data-testid="contact-info">Contato</S.Title>
            <S.SubHead>(35) 3622-2699</S.SubHead>
            <S.SubHead>contato@hvex.com.br</S.SubHead>
          </S.InfoContent>
          <S.InfoContent data-testid='social'>
            <S.Title data-testid='social-info'>Confira nossa redes</S.Title>
            <S.Social>
              {SocialIcons.map((item: Icons) => (
              <div key={item.id} data-testid="linkedin">
                <img src={item.image}  />
              </div>
              ))}
            </S.Social>
          </S.InfoContent>
        </S.FooterContent>
          <S.Rights data-testid="rights">
            <p>HVEX © 2021 | Todos os direitos reservados.</p>
            <div>
              <p>Políticas de Privacidade</p>
              <p>Termos de Uso</p>
            </div>
          </S.Rights>
      </Container>
    </S.Footer>
  );
};

export default Footer;
