import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

const SaveALife = () => {
  return (
    <div className='sal-wrapper'>
        <h2 className='sal-header'>Purchase from us and save a life</h2>
        <p className='sal-subheading'>Saved <span className='sal-number'>1,204,692</span> lives</p>
        <div className='sal-partners-wrapper'>
            <h3 className='sal-subheading op'>Our partners</h3>
            <div className='sal-partners-container'>
                <div className='sal-partners-item'><button>Bay of Islands</button></div>
                <div className='sal-partners-item'><FontAwesomeIcon className='sal-paw' icon={faPaw}/></div>
                <div className='sal-partners-item'><button>Bay of Islands Animal {'&'} Rescue</button></div>
                <div className='sal-partners-item'><button>Helping you and help animals {'(HUHA)'}</button></div>
                <div className='sal-partners-item'><button>Paw Justice</button></div>
                <div className='sal-partners-item'><p className='sal-partners-description'>We also partner with local charities, Paw Justice, Bay of Islands Animal Rescue,
                                                    and Helping you help animals (HUHA) donating food supplies, 
                                                    flea and worm treatments, and proceeds to help their initiatives. 
                                                    In 2021, we donated more than $85,000 worth of supplies helping hundreds of 
                                                    pets around the country who need it most. Your choice to shop with Pet.co.nz 
                                                    allows us to give back to Kiwi pets.</p></div>
            </div>
        </div>
    </div>
  )
}

export default SaveALife