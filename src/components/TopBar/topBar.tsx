import './topBar.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageIconsMobile } from '../../pages/Home/HomeComponents';

const TopBar: React.FC = () => {
  const { t,i18n } = useTranslation();
  const toggleLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className='bar-body'>
      <p className='first-text'>{t('topBar.professionalsText')}</p>
      
      <Link to="tel:+351961195956" className='second-text'>
        <p className='link-text'>{t('topBar.phoneNumber')}</p>
      </Link>
      <p className='second-text'>{t('topBar.availabilityText')}</p>
      <LanguageIconsMobile>
          <img 
              style={{ width: "2rem", cursor: "pointer", margin: "0 0.5rem" }} 
              src='https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg' 
              onClick={() => toggleLanguage('ptPT')} 
              alt="Portuguese" 
            />
            <img 
              style={{ width: "2rem", cursor: "pointer", margin: "0 0.5rem" }} 
              src='https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg' 
              onClick={() => toggleLanguage('en')} 
              alt="English" 
            />
          </LanguageIconsMobile>
    </div>
  );
};

export default TopBar;
