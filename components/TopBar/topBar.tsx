import './topBar.css';
import { Link } from 'react-router-dom';
import React from 'react';
const TopBar = () => {
  return (
    <div className='bar-body'>
      <p className='first-text'>Profissionais em Fechaduras desde 1998</p>
      
      <Link to="tel:+351961195956" className='second-text'>
      <p className='link-text'>969 819 109 • 913 143 289</p>
      </Link>
      <p className='second-text'>24h/dia, todos os dias</p>
    </div>
  );
};

export default TopBar;
