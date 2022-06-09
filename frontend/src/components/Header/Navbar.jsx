import React from 'react';
import './Navbar.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faHeart, faCartShopping, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import MegaMenu from './MegaMenu';
import { Link } from 'react-router-dom';
const Navbar = () => {

  const [activeTab, setActiveTab] = useState("");

  const showMegaMenu = (e) => {
    e.preventDefault(); 
    console.log(e.currentTarget.id);
    setActiveTab(e.currentTarget.id);
  }

  const hideMegaMenu = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.id);
    setActiveTab("");
  }

  return (
    <div className='nav-wrapper'>
      <div className='nav-container flex'>
        <div className='nav-item' id='dog' onMouseEnter={showMegaMenu}>
          <button>Dog 
            <FontAwesomeIcon className='drop-icon' icon={faCaretDown} />
          </button>
        </div>
        <div className='nav-item' id='cat' onMouseEnter={showMegaMenu}>
          <button>Cat
          <FontAwesomeIcon className='drop-icon' icon={faCaretDown} />
          </button>
        </div>
        <div className='nav-item' id='fish' onMouseEnter={showMegaMenu}>
          <button>Fish
          <FontAwesomeIcon className='drop-icon' icon={faCaretDown} />
          </button>
        </div>
        <div className='nav-item' id='small pets' onMouseEnter={showMegaMenu}>
          <button>Small Pets
          <FontAwesomeIcon className='drop-icon' icon={faCaretDown} />
          </button>
        </div>
        <div className='nav-item' id='bird' onMouseEnter={showMegaMenu}>
          <button>Bird
          <FontAwesomeIcon className='drop-icon' icon={faCaretDown} />
          </button>
        </div>
        <div className='nav-item' id='reptile' onMouseEnter={showMegaMenu}>
          <button>Reptile
          <FontAwesomeIcon className='drop-icon' icon={faCaretDown} />
          </button>
        </div>
        <div className='nav-item' id='horse' onMouseEnter={showMegaMenu}>
          <button>Horse
          <FontAwesomeIcon className='drop-icon' icon={faCaretDown} />
          </button>
        </div>
        
        <div className='nav-item flex'>
          <div>
            <FontAwesomeIcon className='icon heart' icon={faHeart} />
          </div>
          <div>
            <FontAwesomeIcon className='icon cart' icon={faCartShopping} />
          </div>
          <div>
            <Link className='nav-item-link' to='/Dashboard'><FontAwesomeIcon className='icon user' icon={faCircleUser} /></Link>
          </div>
        </div>
      </div>
      
      <div id='mm' onMouseLeave={hideMegaMenu}>
        <MegaMenu activeTab={activeTab} />
      </div>
      
    </div>
  )
}

export default Navbar