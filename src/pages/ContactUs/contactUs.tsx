import React from 'react';
import { Link } from 'react-router-dom';
import { ContatoContainer, ContactTitle, ContactText, ContactLink } from './ContatoComponents.tsx';

const Contact: React.FC = () => {
  return (
    <ContatoContainer>
      <ContactTitle>Contato</ContactTitle>

      <Link to="tel:+351961195956" className='second-text'>
      <ContactText> 969 819 109 • 913 143 289</ContactText>
      </Link>
      <ContactText>Email: aberturas24h.info@gmail.com</ContactText>
   
        <ContactLink href="https://wa.me/message/SXGUDW4HN3U4J1" target="_blank" rel="noopener noreferrer">
        <ContactText><img src="public/whatsapp1.png" alt="Ícone de telefone" /> Ligue Já para nossso WhatsApp</ContactText> 
        </ContactLink>
    
    </ContatoContainer>
  );
};

export default Contact;
