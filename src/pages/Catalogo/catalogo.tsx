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
          <CatalogFirstTitle>Nossos Serviços Disponíveis <br />🔒🔧</CatalogFirstTitle>

          <CatalogSubtitleTwo>
            Explore nossas áreas de especialização
          </CatalogSubtitleTwo>
          <PhoneLink to="tel:+351961195956">
            <PhoneTitle>
              <img src="telefone.png" alt="Ícone de telefone" />
              Ligue já, Chaveiro 24 horas
            </PhoneTitle>
          </PhoneLink>
        </CatalogTexts>
      </CatalogFirstSection>

      <CatalogSection>
        <CatalogTitle>Fechaduras para Portas Reforçadas</CatalogTitle>
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
            Troca de fechaduras, aberturas com trinco e com voltas, ajuste e lubrificação.
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
          <CatalogSubtitle>
            Troca de fechaduras, aberturas com trinco e com voltas, ajuste e lubrificação.
          </CatalogSubtitle>
        </CatalogTexts>
      </CatalogSection>
    </CatalogContainer>
  );
};

export default Catalogo;
