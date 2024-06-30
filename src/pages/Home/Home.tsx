import {
  HomeContainer,
  Section,
  Title,
  Subtitle,
  PhoneLink,
  HomeImg,
  TextsTwo,
  PhoneTitleTwo,
  TextsThree,
  TitleTwo,
  GenericTextstwo,
  FirstSection,
  GenericTexts,
  ImageSection,
  ThirdSection,
  PhoneTitle,
  Image,
  ImageTwo
} from "./HomeComponents";
import "@fontsource/montserrat";
import React from 'react';
import BottomBar from "../../../components/BottomBar/bottomBar";

const Home = () => {
  return (
    <HomeContainer>
      <HomeImg src="home.png"></HomeImg>
      <Section>

        <GenericTexts>
          <Title>Serviço de Chaveiro</Title>
        </GenericTexts>
        <ImageSection>
          <Image src="Chaveiro1.png" />
        </ImageSection>
        <GenericTexts>
        <PhoneLink to="tel:+351961195956">
            <PhoneTitle>
              <img src="telefone.png" alt="Ícone de telefone" />
              Ligue agora, Chaveiro 24 horas
            </PhoneTitle>
          </PhoneLink>
          <Subtitle>
            Disponibilidade de diversos serviços de chaveiro para você <br />
            Desde aberturas rápidas até codificação de chaves de veículos.
          </Subtitle>
         
        </GenericTexts>

      </Section>

      <FirstSection>
        <GenericTextstwo>
          <TitleTwo>Emergências Solucionadas</TitleTwo>
          <TextsTwo>
            <div>Respostas rápidas para momentos críticos.</div>
            Chave esquecida no carro? Porta bloqueada? Atendimento 24 horas, ágil, eficaz e seguro. Paz de espírito em cada emergência.
          </TextsTwo>
          <TitleTwo>Excelência Garantida</TitleTwo>
          <TextsTwo>
            Compromisso com a qualidade. Clientes satisfeitos, serviços excepcionais. Vivencie a experiência Abertura de Portas.
          </TextsTwo>

          <PhoneLink to="https://wa.me/+351966799623">
            <PhoneTitleTwo>
              Solicite um orçamento via WhatsApp agora mesmo<br /><br />
              <img src="whatsapp1.png" alt="Ícone de WhatsApp" /><br />
            </PhoneTitleTwo>
          </PhoneLink><br />
        </GenericTextstwo>
        <ImageSection>
          <Image src="abrecarro.jpg" />
        </ImageSection>
      </FirstSection>

      <ThirdSection>
        <GenericTexts>
          <Title>Marcas:</Title>
        </GenericTexts>
        <ImageSection>
          <ImageTwo src="empresas.webp" />
        </ImageSection>
        <TextsThree>
          Trabalhamos com marcas de Excelente procedência para melhor lhe atender.
        </TextsThree>
      </ThirdSection>
      <BottomBar />
    </HomeContainer>
  );
};

export default Home;
