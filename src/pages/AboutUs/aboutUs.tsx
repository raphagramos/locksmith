import {
  AboutUsContainer,
  AboutUsSection,
  AboutUsTitle,
  AboutUsSubtitle,
  AboutUsTexts,
  AboutUsImage,
  Texts,
} from "./AboutUsComponents";

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <AboutUsSection>
        <AboutUsImage src="aboutUs.jpeg" alt="Sobre Nós" />
        <AboutUsTexts>
          <AboutUsTitle>Quem Somos</AboutUsTitle>
          <AboutUsSubtitle>Conheça a Casa de Chaves Don Pedro</AboutUsSubtitle>
          <Texts>
            Somos uma empresa dedicada a oferecer serviços de chaveiro com
            excelência e comprometimento. Com anos de experiência, conquistamos
            a confiança de nossos clientes, proporcionando soluções eficientes e
            seguras para suas necessidades.
          </Texts>
          <Texts>
            Nossa equipe altamente qualificada está pronta para atendê-lo, seja
            para situações de emergência ou serviços programados. Valorizamos a
            satisfação do cliente e a qualidade em cada trabalho realizado.
          </Texts>
        </AboutUsTexts>
      </AboutUsSection>
    </AboutUsContainer>
  );
};

export default AboutUs;
