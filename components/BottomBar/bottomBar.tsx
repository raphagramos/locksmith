import './bottomBar.css';
import { Link } from 'react-router-dom';
import React from 'react';

const BottomBar = () => {
  return (
    <div className='bottom-bar-body'>
      <Link to="https://ec.europa.eu/consumers/odr/main/?event=main.home2.show" className='bottom-second-text'>
        <p className='bottom-link-text'>Online Dispute Resolution</p>
      </Link>
    </div>
  );
};

export default BottomBar;
