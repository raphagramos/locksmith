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
          <CatalogFirstTitle>{t('catalog.servicesTitle')}</CatalogFirstTitle>
          <CatalogSubtitleTwo>{t('catalog.servicesSubtitle')}</CatalogSubtitleTwo>
          <PhoneLink to="tel:+351961195956">
            <PhoneTitle>
              <img src="telefone.webp" alt={t('catalog.phoneIconAlt')} />
              {t('catalog.phoneCallText')}
            </PhoneTitle>
          </PhoneLink>
        </CatalogTexts>
      </CatalogFirstSection>

      <CatalogSection>
        <CatalogImageContainer>
          <CatalogImage src="fechadura.webp" alt={t('catalog.lockImageAlt')} />
        </CatalogImageContainer>
        <CatalogTexts>
          <CatalogTitle>{t('catalog.lockTitle')}</CatalogTitle>
          <CatalogSubtitle>{t('catalog.lockDescription')}</CatalogSubtitle>
        </CatalogTexts>
      </CatalogSection>

      <FirstCatalogSection>
        <CatalogImageContainer>
          <CatalogImage src="fecha2e4.webp" alt={t('catalog.lock2and4ImageAlt')} />
        </CatalogImageContainer>
        <CatalogTextsTwo>
          <CatalogTitleTwo>{t('catalog.lock2and4Title')}</CatalogTitleTwo>
          <CatalogSubtitleTwo>{t('catalog.lock2and4Description')}</CatalogSubtitleTwo>
        </CatalogTextsTwo>
      </FirstCatalogSection>

      <CatalogSection>
        <CatalogImageContainer>
          <CatalogImage src="fechaele.webp" alt={t('catalog.electricLockImageAlt')} />
        </CatalogImageContainer>
        <CatalogTexts>
          <CatalogTitle>{t('catalog.electricLockTitle')}</CatalogTitle>
          <CatalogSubtitle>{t('catalog.electricLockDescription')}</CatalogSubtitle>
        </CatalogTexts>
      </CatalogSection>
    </CatalogContainer>
  );
};

export default Catalogo;
