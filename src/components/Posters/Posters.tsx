import styled from "styled-components";
import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  desktopSmall,
  desktop,
  desktopLarge,
} from "../dimensions";


const PostersContainer = styled.div`
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
`;

const PosterImage = styled(motion.img)`
  width: 100%;
  max-width: 500px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: opacity 0.3s ease, transform 0.3s ease;

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }
`;

const imageVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

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
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={imageVariants}
          alt={`Poster ${i + 1}`}
          onClick={handleClick}
        />
      ))}
    </PostersContainer>
  );
};

export default Posters;
