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
  LanguageIconsMobile,
} from "./HomeComponents";
import "@fontsource/montserrat";
import React from 'react';
import BottomBar from "../../../components/BottomBar/bottomBar";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t,i18n } = useTranslation();
  const toggleLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <HomeContainer>
      <HomeImg src="home.png" alt={t('home.mainImageAlt')} />
      <Section>
        <GenericTexts>
          <LanguageIconsMobile>
          <img 
              style={{ width: "2rem", cursor: "pointer", margin: "0 0.5rem" }} 
              src='https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg' 
              onClick={() => toggleLanguage('ptPT')} 
              alt="Portuguese" 
            />
            <img 
              style={{ width: "2rem", cursor: "pointer", margin: "0 0.5rem" }} 
              src='https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg' 
              onClick={() => toggleLanguage('en')} 
              alt="English" 
            />
          </LanguageIconsMobile>
          <Hometitle>{t('home.serviceTitle')}</Hometitle>
          <Subtitle>
            {t('home.serviceLocations')}<br/>{t('home.serviceHours')}
          </Subtitle>
          <Subtitle>{t('home.serviceDescription')}</Subtitle>
          <PhoneLink to="tel:+351961195956">
            <PhoneTitle>
              <img src="telefone.png" alt={t('home.phoneIconAlt')} />
              {t('home.phoneCallText')}
            </PhoneTitle>
          </PhoneLink>
        </GenericTexts>
        <ImageSection>
          <img src="Chaveiro1.png" alt={t('home.locksmithImageAlt')} />
        </ImageSection>
      </Section>

      <FirstSection>
        <GenericTextstwo>
          <TitleTwo>{t('home.emergenciesTitle')}</TitleTwo>
          <TextsTwo>{t('home.emergenciesDescription')}</TextsTwo>
          <TitleTwo>{t('home.qualityTitle')}</TitleTwo>
          <TextsTwo>{t('home.qualityDescription')}</TextsTwo>
          <PhoneLink to="https://wa.me/message/SXGUDW4HN3U4J1">
            <PhoneTitleTwo>
              <img src="whatsapp1.png" alt={t('home.whatsappIconAlt')} />
              {t('home.whatsappText')}
            </PhoneTitleTwo>
          </PhoneLink>
        </GenericTextstwo>
        <ImageSection>
          <img src="abrecarro.jpg" alt={t('home.carUnlockImageAlt')} />
        </ImageSection>
      </FirstSection>

      <ThirdSection>
        <GenericTexts>
          <Hometitle>{t('home.brandsTitle')}</Hometitle>
          <Subtitle>{t('home.brandsSubtitle')}</Subtitle>
          <TextsThree>{t('home.brandsDescription')}</TextsThree>
        </GenericTexts>
        <ImageSection>
          <img src="empresas.webp" alt={t('home.brandsImageAlt')} />
        </ImageSection>
      </ThirdSection>
      <BottomBar />
    </HomeContainer>
  );
};

export default Home;
