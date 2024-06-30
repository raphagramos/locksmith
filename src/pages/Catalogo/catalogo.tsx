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
          <CatalogFirstTitle>Nossos Serviços <br/>🔒🔧</CatalogFirstTitle>

          <CatalogSubtitleTwo>
            Saiba mais sobre as nossas especialidades
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
        <CatalogImageContainer>
          <CatalogImage src="fechadura.jpeg" alt="Fechadura Blindada" />
        </CatalogImageContainer>
        <CatalogTexts>
          <CatalogTitle>Fechaduras para portas Blindadas</CatalogTitle>
          <CatalogSubtitle>
            Trocas de fechaduras, aberturas no trinco e com voltas, manutenções,
            troca de segredos, canhões e lubrificação.
          </CatalogSubtitle>
        </CatalogTexts>
      </CatalogSection>

      <FirstCatalogSection>
        <CatalogImageContainer>
          <CatalogImage src="fecha2e4.jpeg" alt="Fechadura 2 e 4 trancas" />
        </CatalogImageContainer>
        <CatalogTextsTwo>
          <CatalogTitleTwo>Fechaduras 2 e 4 trancas</CatalogTitleTwo>
          <CatalogSubtitleTwo>
            Troca de fechaduras, aberturas no trinco e com voltas, afinação e
            lubrificação.
          </CatalogSubtitleTwo>
        </CatalogTextsTwo>
      </FirstCatalogSection>

      <CatalogSection>
        <CatalogImageContainer>
          <CatalogImage src="fechaele.jpeg" alt="Fechadura 2 e 4 trancas" />
        </CatalogImageContainer>
        <CatalogTexts>
          <CatalogTitle>
             Fechadura Elétrica? Conte Conosco! 
          </CatalogTitle>
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
