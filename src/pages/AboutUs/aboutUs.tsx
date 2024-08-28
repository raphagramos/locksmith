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
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <AboutUsContainer>
      <AboutUsSection>
        <AboutUsImage src="aboutUs.png" alt={t('aboutUs.title')} />
        <AboutUsTexts>
          <AboutUsTitle>{t('aboutUs.title')}</AboutUsTitle>
          <AboutUsSubtitle>{t('aboutUs.subtitle')}</AboutUsSubtitle>
          <Texts>{t('aboutUs.text')}</Texts>
        </AboutUsTexts>
      </AboutUsSection>
    </AboutUsContainer>
  );
};

export default AboutUs;
