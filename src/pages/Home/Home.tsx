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
} from "./HomeComponents";
import "@fontsource/montserrat";
import React from 'react';
import BottomBar from "../../../components/BottomBar/bottomBar";
const Home = () => {
  return (
    <HomeContainer>
      <HomeImg src="public/home.png"></HomeImg>
      <Section>
        
        <GenericTexts>
          <Title>Atendimento</Title>
          <Subtitle>
          Lisboa , Cascais , Oeiras , Sintra e Margem Sul
          <br/>24 HORAS  
          </Subtitle>
          </GenericTexts>
          <ImageSection>
          <img src="public/Chaveiro1.png" />
        </ImageSection>
        <GenericTexts>
          <Subtitle>
            Casa de Chaves Don Pedro, a sua escolha para serviços de chaveiro 24. <br/>
             Aberturas rápidas e seguras, a qualquer hora do
            dia. Sua segurança, nossa prioridade.
          </Subtitle>
          <PhoneLink to="tel:+351961195956">
            <PhoneTitle>
              <img src="public/telefone.png" alt="Ícone de telefone" />
              Ligue já, Chaveiro 24 horas
            </PhoneTitle>
          </PhoneLink>
          </GenericTexts>
      
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
              Solicite agora um orçamento via WhatsApp{" "}<br/><br/>
              <img src="public/whatsapp1.png" alt="Ícone de telefone" /><br/>
            </PhoneTitleTwo>
          </PhoneLink><br/>
        </GenericTextstwo>
        <ImageSection>
          <img src="public/abrecarro.jpg" />
        </ImageSection>
      </FirstSection>

      <ThirdSection>
        <GenericTexts>
          <Title>Marcas: </Title>
          <Subtitle>Marcas que trabalhamos:</Subtitle>
        </GenericTexts>
        <ImageSection>
          <img src="public/empresas.webp" />
        </ImageSection>
        <TextsThree>
            Dedicação refletida em parcerias de confiança. Confie na Casa de
            Chaves Don Pedro para a segurança da sua casa ou veículo.
          </TextsThree>
      </ThirdSection>
      <BottomBar />
    </HomeContainer>
    
  );
};

export default Home;
