import styled from "styled-components";
import React from "react";
import { useTranslation } from "react-i18next";
import { desktopSmall, desktop, desktopLarge, mobile } from "../dimensions";

const PostersContainer = styled.div`
  /* 🔵 DESKTOP (IGUAL AO ORIGINAL — NÃO MEXE) */
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 20px;
  justify-items: center;

  ${desktopSmall} {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    padding: 40px;
  }

  ${desktop} {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    padding: 50px;
  }

  ${desktopLarge} {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    padding: 60px;
  }

  /* 📱 MOBILE — CARROSSEL (SÓ AQUI) */
  ${mobile} {
    display: flex;
    overflow-x: auto;
    gap: 16px;
    padding: 20px;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;

    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const PosterImage = styled.img`
  /* 🔵 DESKTOP (IGUAL AO ORIGINAL) */
  width: 100%;
  max-width: 500px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  /* 📱 MOBILE — ITEM DO CARROSSEL */
  ${mobile} {
    width: 85%;
    max-width: 320px;
    flex-shrink: 0;
    scroll-snap-align: center;

    &:hover {
      transform: scale(1.05);
      opacity: 0.9;
    }
  }
`;

const Posters = () => {
  const { i18n } = useTranslation();
  const language = i18n.language.toLowerCase();
  const isPortuguese = language === "pt-br" || language.startsWith("pt");

  const postersPT = ["/poster1.webp", "/poster2.webp", "/poster3.webp"];
  const postersEN = ["/Prancheta1.webp", "/Prancheta2.webp", "/Pracheta3.webp"];

  const handleClick = () => {
    window.location.href = "tel:+351961195956";
  };

  const postersToShow = isPortuguese ? postersPT : postersEN;

  return (
    <PostersContainer>
      {postersToShow.map((src, i) => (
        <PosterImage
          key={src}
          src={src}
          alt={`Poster ${i + 1}`}
          onClick={handleClick}
        />
      ))}
    </PostersContainer>
  );
};

export default Posters;
