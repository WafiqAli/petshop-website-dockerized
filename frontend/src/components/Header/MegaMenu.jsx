import React from 'react';
import { navItems } from './navItems';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const MegaMenu = ({ activeTab }) => {
    
    const activeNavItems = navItems.filter(e => e.category.toLowerCase() === activeTab);

    let activeMM = <></>;
    
    console.log(activeNavItems);
    
    if (activeNavItems !== undefined && activeNavItems.length > 0) {

        activeMM = activeNavItems[0].subcategory.map(cat => (
            <div className={`mm-subcat ${activeTab}`}>
                <h3 className='subcat-header'><Link to='/PageNotImplemented'>{cat.category}</Link></h3>
                {cat.items.map(item => <li className='subcat-items'><Link to='/PageNotImplemented'>{item}</Link></li>)}
            </div>
        ))
    }
    
    if (activeTab) {
        return (
            <div className={`mm-wrapper ${activeTab.replace(/\s/g, '')}-img`}>
                <div className='mm-cat '><p>For {activeNavItems[0].category}</p></div>
                <div className='mm-container flex'>
                    {activeMM}
                </div> 
            </div>
            
        )
    }
    return <></>
  
}

export default MegaMenu