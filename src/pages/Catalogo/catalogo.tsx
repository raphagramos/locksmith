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
const Catalogo = () => {
  return (
    <CatalogContainer>
      <CatalogFirstSection>
        <CatalogTexts>
          <CatalogFirstTitle>Nossos Serviços <br />🔒🔧</CatalogFirstTitle>

          <CatalogSubtitleTwo>
            Saiba mais sobre as nossas especialidades
          </CatalogSubtitleTwo>
          <PhoneLink to="tel:+351961195956">
            <PhoneTitle>
              <img src="public/telefone.png" alt="Ícone de telefone" />
              Ligue já, Chaveiro 24 horas
            </PhoneTitle>
          </PhoneLink>
        </CatalogTexts>
      </CatalogFirstSection>

      <CatalogSection>
        <CatalogTitle>Fechaduras para portas Blindadas</CatalogTitle>
        <CatalogImageContainer>
          <CatalogImage src="public/fechadura.jpeg" alt="Fechadura Blindada" />
        </CatalogImageContainer>
        <CatalogTexts>

          <CatalogSubtitle>
            Trocas de fechaduras, aberturas no trinco e com voltas, manutenções,
            troca de segredos, canhões e lubrificação.
          </CatalogSubtitle>
        </CatalogTexts>
      </CatalogSection>

      <FirstCatalogSection>
        <CatalogTitleTwo>Fechaduras 2 e 4 trancas</CatalogTitleTwo>
        <CatalogImageContainer>
          <CatalogImage src="public/fecha2e4.jpeg" alt="Fechadura 2 e 4 trancas" />
        </CatalogImageContainer>
        <CatalogTextsTwo>
          <CatalogSubtitleTwo>
            Troca de fechaduras, aberturas no trinco e com voltas, afinação e
            lubrificação.
          </CatalogSubtitleTwo>
        </CatalogTextsTwo>
      </FirstCatalogSection>

      <CatalogSection>
        <CatalogTitle>
          Fechadura Elétrica? Conte Conosco!
        </CatalogTitle>
        <CatalogImageContainer>
          <CatalogImage src="public/fechaele.jpeg" alt="Fechadura 2 e 4 trancas" />
        </CatalogImageContainer>
        <CatalogTexts>
          <CatalogSubtitle>
            Troca de fechaduras, aberturas no trinco e com voltas, afinação e
            lubrificação.
          </CatalogSubtitle>
        </CatalogTexts>
      </CatalogSection>
    </CatalogContainer>
  );
};

export default Catalogo;
