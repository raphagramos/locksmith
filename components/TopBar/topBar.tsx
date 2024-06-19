import './topBar.css';
import { Link } from 'react-router-dom';
import React from 'react';
const TopBar = () => {
  return (
    <div className='bar-body'>
      <p className='first-text'>Profissionais em Fechaduras</p>
      
      <Link to="tel:+351966799623" className='second-text'>
      <p className='link-text'>351 966 799 623</p>
      </Link>
      <p className='second-text'>24h/dia, todos os dias</p>
    </div>
  );
};

export default TopBar;
