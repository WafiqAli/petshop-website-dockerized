import React from 'react';
import './Header.scss';
import Navbar from './Navbar';
import Top from './Top';
import companyLogo from '../../Assets/Navigation Bar/Pet.co 1.svg';


const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className='bg-img-container'>
          <Top />
          <img className='header-logo' src={companyLogo} alt='logo' />
        </div>
        <div>
          <Navbar />
        </div>
        
    </div>
  )
}

export default Header