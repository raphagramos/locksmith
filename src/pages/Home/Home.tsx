import {
  HomeContainer,
  Section,
  Hometitle,
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
          <Hometitle>Atendimento</Hometitle>
          <Subtitle>
          Lisboa , Cascais , Oeiras , Sintra e Margem Sul
          <br/>24 HORAS  
          </Subtitle>
          <Subtitle>
            Casa de Chaves Don Pedro, a sua escolha para serviços de chaveiro 24.
             Aberturas rápidas e seguras, a qualquer hora do
            dia. Sua segurança, nossa prioridade.
          </Subtitle>
          <PhoneLink to="tel:+351961195956">
            <PhoneTitle>
              <img src="telefone.png" alt="Ícone de telefone" />
              Ligue já, Chaveiro 24 horas
            </PhoneTitle>
          </PhoneLink>
        </GenericTexts>
        <ImageSection>
          <img src="Chaveiro1.png" />
        </ImageSection>
      </Section>

      <FirstSection>
        <GenericTextstwo>
          <TitleTwo>Emergências Resolvidas</TitleTwo>
          <TextsTwo>
            <div>Soluções rápidas para momentos críticos.</div>
            Esqueceu sua chave dentro do carro? Porta trancada? Atendimento 24 horas, rápido,
            eficiente, seguro. Tranquilidade em cada emergência.
          </TextsTwo>
          <TitleTwo>Qualidade Garantida</TitleTwo>
          <TextsTwo>
            Compromisso com a qualidade. Clientes satisfeitos, serviços
            excepcionais. Seja parte da experiência Casa de Chaves Don Pedro.
          </TextsTwo>
          <PhoneLink to="https://wa.me/message/SXGUDW4HN3U4J1">
            <PhoneTitleTwo>
              <img src="whatsapp1.png" alt="Ícone de telefone" />
              Solicite agora um orçamento via WhatsApp{" "}
            </PhoneTitleTwo>
          </PhoneLink>
        </GenericTextstwo>
        <ImageSection>
          <img src="abrecarro.jpg" />
        </ImageSection>
      </FirstSection>

      <ThirdSection>
        <GenericTexts>
          <Hometitle>Marcas: </Hometitle>
          <Subtitle>Marcas que trabalhamos:</Subtitle>
          <TextsThree>
            Dedicação refletida em parcerias de confiança. Confie na Casa de
            Chaves Don Pedro para a segurança da sua casa ou veículo.
          </TextsThree>
        </GenericTexts>
        <ImageSection>
          <img src="empresas.webp" />
        </ImageSection>
      </ThirdSection>
      <BottomBar />
    </HomeContainer>
    
  );
};

export default Home;
