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
          Nosso time é formado por especialistas em segurança e técnicos em abertura de portas, todos treinados e atualizados com as melhores práticas do mercado. Estamos aqui para garantir que você receba o melhor atendimento e solução possível, com o mínimo de estresse e máxima eficiência.
          </Texts>
        </AboutUsTexts>
      </AboutUsSection>
    </AboutUsContainer>
  );
};

export default AboutUs;
