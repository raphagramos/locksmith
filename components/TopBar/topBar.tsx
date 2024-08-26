import './topBar.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { useTranslation } from 'react-i18next';

const TopBar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='bar-body'>
      <p className='first-text'>{t('topBar.professionalsText')}</p>
      
      <Link to="tel:+351961195956" className='second-text'>
        <p className='link-text'>{t('topBar.phoneNumber')}</p>
      </Link>
      <p className='second-text'>{t('topBar.availabilityText')}</p>
    </div>
  );
};

export default TopBar;
