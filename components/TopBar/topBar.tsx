import './topBar.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { useTranslation } from 'react-i18next';

const TopBar = () => {
  const { t } = useTranslation();

  return (
    <div className='bar-body'>
      <p className='first-text'>{t('topBar.professionals')}</p>

      <Link to="tel:+351966799623" className='second-text'>
        <p className='link-text'>{t('topBar.phone')}</p>
      </Link>
      <p className='second-text'>{t('topBar.availability')}</p>
    </div>
  );
};

export default TopBar;
