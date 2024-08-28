import {
  CatalogContainer,
  CatalogSection,
  CatalogFirstSection,
  PhoneTitle,
  PhoneLink,
  CatalogTitle,
  CatalogFirstTitle,
  CatalogTextsTwo,
  CatalogSubtitle,
  CatalogSubtitleTwo,
  CatalogTexts,
  CatalogImageContainer,
  CatalogImage,
  FirstCatalogSection,
  CatalogTitleTwo,
} from "./CatalogComponents";
import React from 'react';
import { useTranslation } from 'react-i18next';

const Catalogo = () => {
  const { t } = useTranslation();

  return (
    <CatalogContainer>
      <CatalogFirstSection>
        <CatalogTexts>
          <CatalogFirstTitle>{t('catalog.title')}<br/>
          {t('catalog.icons')}</CatalogFirstTitle>
          <CatalogSubtitleTwo>{t('catalog.subtitle')}</CatalogSubtitleTwo>
          <PhoneLink to="tel:+351966799623">
            <PhoneTitle>
              <img src="telefone.png" alt="Ícone de telefone" />
              {t('catalog.phoneTitle')}
            </PhoneTitle>
          </PhoneLink>
        </CatalogTexts>
      </CatalogFirstSection>

      <CatalogSection>
        <CatalogTitle>{t('catalog.section1.title')}</CatalogTitle>
        <CatalogImageContainer>
          <CatalogImage src="fechadura.jpeg" alt="Fechadura Blindada" />
        </CatalogImageContainer>
        <CatalogTexts>
          <CatalogSubtitle>{t('catalog.section1.subtitle')}</CatalogSubtitle>
        </CatalogTexts>
      </CatalogSection>

      <FirstCatalogSection>
        <CatalogTitleTwo>{t('catalog.section2.title')}</CatalogTitleTwo>
        <CatalogImageContainer>
          <CatalogImage src="fecha2e4.jpeg" alt="Fechadura 2 e 4 trancas" />
        </CatalogImageContainer>
        <CatalogTextsTwo>
          <CatalogSubtitleTwo>{t('catalog.section2.subtitle')}</CatalogSubtitleTwo>
        </CatalogTextsTwo>
      </FirstCatalogSection>

      <CatalogSection>
        <CatalogTitle>{t('catalog.section3.title')}</CatalogTitle>
        <CatalogImageContainer>
          <CatalogImage src="fechaele.jpeg" alt="Fechadura Elétrica" />
        </CatalogImageContainer>
        <CatalogTexts></CatalogTexts>
      </CatalogSection>
    </CatalogContainer>
  );
};

export default Catalogo;
