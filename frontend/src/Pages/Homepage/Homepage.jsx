import React from 'react';
import { useState, useEffect } from 'react';
import './Homepage.scss';
import BrandsBanner from '../../components/Homepage/BrandsBanner';
import HomeBanner from '../../components/Homepage/HomeBanner';
import HomeProductSearch from '../../components/Homepage/HomeProductSearch';
import Testimonials from '../../components/Homepage/Testimonials';
import LearnMore from '../../components/Homepage/LearnMore';
import SaveALife from '../../components/Homepage/SaveALife';
import BackToTop from '../../components/BackToTop';

const Homepage = () => {
  
  const [testimonials, setTestimonials] = useState(null);
  
  useEffect(() => {
    fetch('http://localhost:9001/testimonials')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(data => {
        setTestimonials(data);
        console.log(data);
      })
      .catch(err => console.log(err));
    }, []);

  return (
    <div className='homepage-wrapper'>
        <HomeBanner />
        <BrandsBanner />
        <HomeProductSearch />
        <Testimonials testimonials={testimonials} />
        <LearnMore />
        <SaveALife />
        <BackToTop />
    </div>
  )
}

export default Homepage