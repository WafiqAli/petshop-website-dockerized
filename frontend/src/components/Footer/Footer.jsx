    import React from 'react';
    import './Footer.scss';
    import igIcon from '../../Assets/Footer/Instagram.png';
    import fbIcon from '../../Assets/Footer/Facebook.png';
    import ytIcon from '../../Assets/Footer/YouTube.png';
    import msIcon from '../../Assets/Footer/mastercard.png';
    import visaIcon from '../../Assets/Footer/visa.png';
    import amexIcon from '../../Assets/Footer/amex.png';
    import apIcon from '../../Assets/Footer/afterpay.png';
    import lbIcon from '../../Assets/Footer/laybuy.png';
import { Link } from 'react-router-dom';

    const Footer = () => {
    return (
        <footer className='footer-wrapper'>
            <div className='links-wrapper'>
                <div className='links-container'>
                    <h3>Shop by Pets</h3>
                    <ul className='links-list'>
                        <li><a href='/'>Dog</a></li>
                        <li><a href='/'>Cat</a></li>
                        <li><a href='/'>Fish</a></li>
                        <li><a href='/'>Small Pets</a></li>
                        <li><a href='/'>Bird</a></li>
                        <li><a href='/'>Reptile</a></li>
                        <li><a href='/'>Horse</a></li>
                    </ul>
                </div>
                <div className='links-container'>
                    <h3>Help Centre</h3>
                    <ul className='links-list'>
                        <li><a href='/'>Help {'&'} FAQ</a></li>
                        <li><a href='/'>Returns</a></li>
                        <li><a href='/'>Shipping {'&'} Delivery </a></li>
                        <li><a href='/'>Orders</a></li>
                        <li><a href='/'>Autoship</a></li>
                        <li><a href='/'>My Account</a></li>
                        <li><a href='/'>Supplier Request</a></li>
                        <li><a href='/'>Product Request</a></li>
                    </ul>
                </div>
                <div className='links-container'>
                    <h3>Terms {'&'} Policies</h3>
                    <ul className='links-list'>
                        <li><a href='/'>Privacy Policy</a></li>
                        <li><a href='/'>Membership Terms</a></li>
                        <li><a href='/'>Sales Terms</a></li>
                        <li><a href='/'>Terms of Use</a></li>
                        <li><a href='/'>Promotional T{'&'}C's</a></li>
                    </ul>
                </div>
                <div className='links-container'>
                    <h3>Further Information</h3>
                    <ul className='links-list'>
                        <li><a href='/'>About Us</a></li>
                        <li><a href='/'>Contact Us</a></li>
                        <li><a href='/'>Blog</a></li>
                        <li><a href='/'>Dog Breed Information</a></li>
                        <li><a href='/'>Features</a></li>
                        <li><a href='SortedProductNames'>Week 1 Quicksort</a></li>
                    </ul>
                </div>
                <div className='links-container'>
                    <h3>Stay Connected</h3>
                    <ul className='links-list'>
                        <li><a href='/'><img src={fbIcon} alt='socialicon'/> Facebook</a></li>
                        <li><a href='/'><img src={igIcon} alt='socialicon'/> Instagram</a></li>
                        <li><a href='/'><img src={ytIcon} alt='socialicon'/> YouTube</a></li>
                    </ul>
                </div>
            </div>
            <div className='pb-container'>
                <div>
                    <img src={msIcon} alt='paymentbrands'/>
                </div>
                <div>
                    <img src={visaIcon} alt='paymentbrands'/>
                </div>
                <div>
                    <img src={amexIcon} alt='paymentbrands'/>
                </div>
                <div>
                    <img src={apIcon} alt='paymentbrands'/>
                </div>
                <div>
                    <img src={lbIcon} alt='paymentbrands'/>
                </div>
            </div>
            <div>
                <p className='footer-copyright'>&copy; 2013 - 2022 Pet.co.nz, All rights reserved</p>
            </div>
        </footer>
    )
    }

    export default Footer