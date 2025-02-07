import {
  HomeContainer,
  Section,
  TitleTwo,
  CallNow,
  Subtitletwo,
  TitleThree,
  FirstSection,
  TitleFour,
  TitleFive,
  CallNowSub,
  TelephoneIcon,
  Homepage,
  SecondSection,
  WhatsappIcon,
  HomeSeparator,
  ThirdSection,
  LocaleIcon,
  LocaleDiv,
  TitleFour2,
  HoursIcon,
  PhoneNumber,
  ServicesImage,
  TextoMarcasDiv,
  MarcasDiv,
  Marcas,
  ServicesImageTwo,
  ContactText,
  ContactText2,
  ContactDiv,
  SocialMedia,
  SocialMediaImage,
  ServicesImageMobile,
  ServicesImageTwoMobile,
  AtendemosDiv,
} from "./HomeComponents";
import "@fontsource/montserrat";
import VanComponent from "../../../components/VanComponents";
import React, { useEffect } from "react";
// import BottomBar from "../../../components/BottomBar/bottomBar";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Home = () => {
  useEffect(() => {
    const handleScroll = (event: { deltaY: number }) => {
      if (event.deltaY > 0) {
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);
  const { t } = useTranslation();

  return (
    <HomeContainer>
      <Homepage id="homepage">
        <Section>
          <CallNow>
            <TelephoneIcon src="/tel.png" />
            <TitleTwo>{t("home.callNow")}</TitleTwo>
          </CallNow>

          <SecondSection>
            <Subtitletwo>{t("home.AssistanceImeddiate")}</Subtitletwo>
          </SecondSection>

          <CallNowSub>
            <a
              href="tel:+351961195956"
              style={{ textDecoration: "none" }}
            >
              <TitleThree>
                <WhatsappIcon src="/whatsapp.png" />
                {t("home.CallYes")}
              </TitleThree>
            </a>
          </CallNowSub>
          <VanComponent />
        </Section>
        <HomeSeparator />
      </Homepage>

      <ThirdSection>
        <FirstSection>
          <CallNow>
            <AtendemosDiv>
              <TitleFour>
                {t("home.Atendemos")}
                <br />
                {t("home.serviceLocations")}
              </TitleFour>
            </AtendemosDiv>

            <LocaleIcon src="/local.png" />
          </CallNow>
        </FirstSection>
        <LocaleDiv>
          <TitleFour2>
            <br />
          </TitleFour2>
          <HoursIcon src="/24hb.png" />
          <TitleFive>
            <PhoneNumber>+351 961 195 956</PhoneNumber>
          </TitleFive>
        </LocaleDiv>
        <ServicesImage
          src={
            i18next.language === "ptPT" ? "/servicos.png" : "/servicosENG.png"
          }
          id="servicos"
        />
        <ServicesImageTwo
          src={
            i18next.language === "ptPT" ? "/quemsomos.png" : "/quemsomosENG.png"
          }
          id="quemsomos"
        />
        <ServicesImageMobile
          src={
            i18next.language === "ptPT"
              ? "/servicemobilePT.png"
              : "/servicemobileENG.png"
          }
          id="servicosmobile"
        />
        <ServicesImageTwoMobile
          src={
            i18next.language === "ptPT"
              ? "/whomobilePT.png"
              : "/whomobileENG.png"
          }
          id="quemsomosmobile"
        />
        <Marcas src={
            i18next.language === "ptPT"
              ? "/marcas.jpg"
              : "/marcasENG.png"
          } />
      </ThirdSection>

      <MarcasDiv>
        <TextoMarcasDiv>
          <a
            href="https://wa.me/message/SXGUDW4HN3U4J1"
            style={{ textDecoration: "none" }}
          >
            <TitleThree>
              <WhatsappIcon src="/whatsapp.png" />
              {t("home.REQUEST_QUOTE")}
            </TitleThree>
          </a>
        </TextoMarcasDiv>

        <ContactDiv id="contato">
          <SocialMedia>
            <ContactText>{t("home.Redes")}</ContactText>
            <br />
            <a
              href="https://www.instagram.com/chaveirodonpedro.pt/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SocialMediaImage src="/instagram.png" />
            </a>
            <a
              href="https://www.facebook.com/chaveiros24hdonpedro"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SocialMediaImage src="/facebook.png" />
            </a>
            <ContactText2>/chaveirodonpedro.pt</ContactText2>
          </SocialMedia>
          <SocialMedia>
            <br />
            <a
              href="mailto:aberturas24h.info@gmail.com"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SocialMediaImage src="/email.png" />

              <ContactText2>aberturas24h.info@gmail.com</ContactText2>
            </a>
          </SocialMedia>
        </ContactDiv>
      </MarcasDiv>
      {/* <BottomBar /> */}
    </HomeContainer>
  );
};

export default Home;
