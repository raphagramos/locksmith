import React from 'react';
import { Link } from 'react-router-dom';
import { ContatoContainer, ContactTitle, ContactText, ContactLink } from './ContatoComponents.tsx';

const Contact: React.FC = () => {
  return (
    <ContatoContainer>
      <ContactTitle>Contato</ContactTitle>

      <Link to="tel:+351966799623" className='second-text'>
      <ContactText>351 966 799 623</ContactText>
      </Link>
      <ContactText>Email: locksmith24hourslisbon@gmail.com</ContactText>
   
        <ContactLink href="https://wa.me/+351966799623" target="_blank" rel="noopener noreferrer">
        <ContactText><img src="whatsapp1.png" alt="Ícone de telefone" /> Ligue Já para nossso WhatsApp</ContactText> 
        </ContactLink>
    
    </ContatoContainer>
  );
};

export default Contact;
