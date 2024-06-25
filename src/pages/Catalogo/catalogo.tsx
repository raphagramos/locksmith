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
          <CatalogFirstTitle>Catálogo de Serviços <br />🔑 🔒</CatalogFirstTitle>

          <CatalogSubtitleTwo>
            Explore nossas especialidades
          </CatalogSubtitleTwo>
          <PhoneLink to="tel:+351961195956">
            <PhoneTitle>
              <img src="telefone.png" alt="Ícone de telefone" />
              Ligue agora, 24 horas
            </PhoneTitle>
          </PhoneLink>
        </CatalogTexts>
      </CatalogFirstSection>

      <CatalogSection>
        <CatalogTitle>Fechaduras para Portas Blindadas</CatalogTitle>
        <CatalogImageContainer>
          <CatalogImage src="fechadura.jpeg" alt="Fechadura Blindada" />
        </CatalogImageContainer>
        <CatalogTexts>
          <CatalogSubtitle>
            Troca de fechaduras, aberturas com trinco e com voltas, manutenção, troca de segredos, cilindros e lubrificação.
          </CatalogSubtitle>
        </CatalogTexts>
      </CatalogSection>

      <FirstCatalogSection>
        <CatalogTitleTwo>Fechaduras de 2 e 4 Trancas</CatalogTitleTwo>
        <CatalogImageContainer>
          <CatalogImage src="fecha2e4.jpeg" alt="Fechadura 2 e 4 trancas" />
        </CatalogImageContainer>
        <CatalogTextsTwo>
          <CatalogSubtitleTwo>
           Temos diversos tipos de fechaduras com trancas para lhe deixar seguro.
          </CatalogSubtitleTwo>
        </CatalogTextsTwo>
      </FirstCatalogSection>

      <CatalogSection>
        <CatalogTitle>
          Precisando de Fechadura Elétrica? Conte com a gente!
        </CatalogTitle>
        <CatalogImageContainer>
          <CatalogImage src="fechaele.jpeg" alt="Fechadura Elétrica" />
        </CatalogImageContainer>
        <CatalogTexts>
        </CatalogTexts>
      </CatalogSection>
    </CatalogContainer>
  );
};

export default Catalogo;
