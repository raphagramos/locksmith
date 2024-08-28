import './bottomBar.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { useTranslation } from 'react-i18next';

const BottomBar = () => {
  const { t } = useTranslation();

  return (
    <div className='bottom-bar-body'>
      <Link to="https://ec.europa.eu/consumers/odr/main/?event=main.home2.show" className='bottom-second-text'>
        <p className='bottom-link-text'>{t('bottomBar.odr')}</p>
      </Link>
    </div>
  );
};

export default BottomBar;
