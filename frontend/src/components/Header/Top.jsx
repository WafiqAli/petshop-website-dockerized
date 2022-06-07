import React from 'react'
import { Link } from 'react-router-dom';

const Top = () => {
  return (
    <div className='top-wrapper'>
        <div className='top-text'><p>20% off orders for autodelivery | Free shipping over $39</p></div>
       
        <div className='top-nav'>
          <div className='top-nav-item'><Link className='top-nav-btn' to='/PageNotImplemented'>Help</Link></div>
          <div className='top-nav-item'><button className='top-nav-btn'>Log in</button></div>
        </div>
       
      
    </div>
  )
}

export default Top