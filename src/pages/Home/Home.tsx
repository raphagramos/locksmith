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
  ImageTwo,
  PhoneDiv
} from "./HomeComponents";
import "@fontsource/montserrat";
import React from 'react';
import BottomBar from "../../../components/BottomBar/bottomBar";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <HomeContainer>
      <HomeImg src="logohome.png"></HomeImg>
      <Section>
        <GenericTexts>
          <Title>{t('home.title')}</Title>
        </GenericTexts>
        <ImageSection>
          <Image src="Chaveiro1.png" />
        </ImageSection>
        <GenericTexts>
          <PhoneDiv >
          <PhoneLink to="tel:+351966799623">
            <PhoneTitle>
              <img src="telefone.png" alt="Ícone de telefone" />
              {t('home.phoneTitle')}
            </PhoneTitle>
          </PhoneLink>
          </PhoneDiv>
          <Subtitle>{t('home.subtitle')}<br/>{t('home.subtitle1')}</Subtitle>
        </GenericTexts>
      </Section>

      <FirstSection>
        <GenericTextstwo>
          <TitleTwo>{t('home.emergency.title')}</TitleTwo>
          <TextsTwo>{t('home.emergency.emergencysolve')}<br/>
        {t('home.emergency.text')}</TextsTwo>
          <TitleTwo>{t('home.excellence.title')}</TitleTwo>
          <TextsTwo>{t('home.excellence.text')}</TextsTwo>

          <PhoneLink to="https://wa.me/+351966799623">
            <PhoneTitleTwo>
              {t('home.whatsapp')}
              <br /><br />
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
          <Title>{t('home.brandstitle')}</Title>
        </GenericTexts>
        <ImageSection>
          <ImageTwo src="empresas.webp" />
        </ImageSection>
        <TextsThree>{t('home.brands')}</TextsThree>
      </ThirdSection>
      <BottomBar />
    </HomeContainer>
  );
};

export default Home;
