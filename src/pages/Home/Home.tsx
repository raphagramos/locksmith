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

const Home = () => {
  return (
    <HomeContainer>
      <HomeImg src="home.png"></HomeImg>
      <Section>
        <GenericTexts>
          <Title>Serviços de Chaveiro 24H</Title>
          <Subtitle>
            Casa de Chaves Don Pedro, a sua escolha para serviços de chaveiro 24
            horas em Portugal. Aberturas rápidas e seguras, a qualquer hora do
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
            Chaves no carro? Porta trancada? Atendimento 24 horas, rápido,
            eficiente, seguro. Tranquilidade em cada emergência.
          </TextsTwo>
          <TitleTwo>Qualidade Garantida</TitleTwo>
          <TextsTwo>
            Compromisso com a qualidade. Clientes satisfeitos, serviços
            excepcionais. Seja parte da experiência Casa de Chaves Don Pedro.
          </TextsTwo>
          <PhoneLink to="https://api.whatsapp.com/message/SXGUDW4HN3U4J1?autoload=1&app_absent=0">
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
          <Title>Marcas: </Title>
          <Subtitle>Marcas que confiam em nós:</Subtitle>
          <TextsThree>
            Dedicação refletida em parcerias de confiança. Confie na Casa de
            Chaves Don Pedro para a segurança da sua casa ou veículo.
          </TextsThree>
        </GenericTexts>
        <ImageSection>
          <img src="empresas.webp" />
        </ImageSection>
      </ThirdSection>
    </HomeContainer>
  );
};

export default Home;
