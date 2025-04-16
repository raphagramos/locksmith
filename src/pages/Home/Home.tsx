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
  AtendemosDiv,
  HoursIconTwo,
  MarcasText,
  MarcasTitle,
  MarcasDiv2,
  TitleTwo2,
  Icon,
  ServiceItem,
  ServiceTitle,
  ServicesContainer,
  ServicesText,
  WhoTexts,
  WhoTitle,
  WhoText,
  WhoContainer,
  ServiceText,
} from "./HomeComponents";
import "@fontsource/montserrat";
import VanComponent from "../../components/VanComponents";
import React, { useEffect } from "react";
// import BottomBar from "../../../components/BottomBar/bottomBar";
import { useTranslation } from "react-i18next";

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
            <a href="tel:+351961195956" style={{ textDecoration: "none" }}>
              <TitleThree>
                <WhatsappIcon src="/whatsapp.png" />
                {t("home.CallYes")}
              </TitleThree>
            </a>
            <HoursIconTwo src="/24H.png" />
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
         <ServicesContainer id="servicos">
        <ServicesText>
          <TitleTwo2>
            <Icon src="/cadeado.png" alt="Ícone de cadeado" />
            <WhoTitle>{t("services.title")}</WhoTitle>
          </TitleTwo2>

          <ServiceItem>
            <ServiceTitle>{t("services.items.0.title")}</ServiceTitle>
            <ServiceText>{t("services.items.0.text")}</ServiceText>
          </ServiceItem>

          <ServiceItem>
            <ServiceTitle>{t("services.items.1.title")}</ServiceTitle>
            <ServiceText>{t("services.items.1.text")}</ServiceText>
          </ServiceItem>

          <ServiceItem>
            <ServiceTitle>{t("services.items.2.title")}</ServiceTitle>
            <ServiceText>{t("services.items.2.text")}</ServiceText>
          </ServiceItem>
        </ServicesText>

        <ServicesImage src="/servicos.png" id="servicos" />
      </ServicesContainer>

      <WhoContainer id="quemsomos">
        <ServicesImageTwo src="/quemsomos.png" id="servicos" />
        <WhoTexts>
          <TitleTwo2>
            <Icon src="/who.png" alt="Ícone de cadeado" />
            <WhoTitle>{t("about.title")}</WhoTitle>
          </TitleTwo2>
          <ServiceItem>
            <WhoText>{t("about.intro")}</WhoText>
            <WhoText>{t("about.text1")}</WhoText>
            <WhoText>{t("about.text2")}</WhoText>
          </ServiceItem>
        </WhoTexts>
      </WhoContainer>
      </ThirdSection>
      <MarcasDiv>
        <MarcasDiv2>
          <div style={{ width: "100%" }}>
            <MarcasTitle>{t("brands.title")}</MarcasTitle>
            <MarcasText>{t("brands.text")}</MarcasText>
          </div>
          <Marcas src={"/marcas.png"} />
        </MarcasDiv2>

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
