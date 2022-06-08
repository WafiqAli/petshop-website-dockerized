import React from 'react';
import './Header.scss';
import Navbar from './Navbar';
import Top from './Top';
import companyLogo from '../../Assets/Navigation Bar/Pet.co 1.svg';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className='bg-img-container'>
          <Top />
          <Link to='/'><img className='header-logo' src={companyLogo} alt='logo' /></Link>
        </div>
        <div>
          <Navbar />
        </div>
        
    </div>
  )
}

export default Header