import {
  AboutUsContainer,
  AboutUsSection,
  AboutUsTitle,
  AboutUsSubtitle,
  AboutUsTexts,
  AboutUsImage,
  Texts,
} from "./AboutUsComponents";
import React from 'react';
const AboutUs = () => {
  return (
    <AboutUsContainer>
      <AboutUsSection>
        <AboutUsImage src="aboutUs.png" alt="Sobre Nós" />
        <AboutUsTexts>
          <AboutUsTitle>Quem Somos Nós?</AboutUsTitle>
          <AboutUsSubtitle> Conheça a Abertura de Portas</AboutUsSubtitle>
          <Texts>
            Somos uma empresa especializada em serviços de chaveiro, comprometida com a excelência e a segurança.<br/> Com experiência no mercado, conquistamos a confiança de nossos clientes ao oferecer soluções eficazes e seguras para todas as suas necessidades.
          </Texts>
          <Texts>
            Nossa equipe altamente qualificada está sempre pronta para atendê-lo, seja em situações de emergência ou para serviços programados. Priorizamos a satisfação do cliente e a qualidade em cada trabalho realizado.
          </Texts>
        </AboutUsTexts>
      </AboutUsSection>
    </AboutUsContainer>
  );
};

export default AboutUs;
