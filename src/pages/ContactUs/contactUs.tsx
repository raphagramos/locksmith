import React from 'react';
import { Link } from 'react-router-dom';
import { ContatoContainer, ContactTitle, ContactText, ContactLink } from './ContatoComponents.tsx';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <ContatoContainer>
      <ContactTitle>{t('contact.title')}</ContactTitle>

      <Link to="tel:+351961195956" className='second-text'>
        <ContactText>{t('contact.phone')}</ContactText>
      </Link>
      <ContactText>{t('contact.email')} aberturas24h.info@gmail.com</ContactText>
   
      <ContactLink href="https://wa.me/message/SXGUDW4HN3U4J1" target="_blank" rel="noopener noreferrer">
        <ContactText><img src="whatsapp1.webp" alt={t('contact.phoneIconAlt')} /> {t('contact.whatsappText')}</ContactText> 
      </ContactLink>
    </ContatoContainer>
  );
};

export default Contact;
