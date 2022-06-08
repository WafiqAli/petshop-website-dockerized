import React from 'react'
import { useState } from 'react';
import TestimonialCards from './TestimonialCards';

const Testimonials = ({ testimonials }) => {
    
    const [activeTab, setActiveTab] = useState("dog");

    const handleTabClick = (e) => {
        e.preventDefault();
        setActiveTab(e.target.id);
    }

    const activeTestimonials = testimonials ? testimonials.filter(test => test.petType === activeTab) : "";
    console.log(activeTestimonials);
    console.log(testimonials);
    
    return (
        <div className='test-wrapper'>
            <div><h2 className='test-title'>Pets love our products</h2></div>
            
            <div>
                <div className='test-navbar'>
                    <div id='dog' onClick={handleTabClick} className={'test-navbar-item ' + (activeTab === "dog" ? "active" : "")}>Dog</div>
                    <div id='cat' onClick={handleTabClick} className={'test-navbar-item ' + (activeTab === "cat" ? "active" : "")}>Cat</div>
                    <div id='fish' onClick={handleTabClick} className={'test-navbar-item ' + (activeTab === "fish" ? "active" : "")}>Fish</div>
                    <div id='smallPet' onClick={handleTabClick} className={'test-navbar-item ' + (activeTab === "smallPet" ? "active" : "")}>Small Pet</div>
                    <div id='bird' onClick={handleTabClick} className={'test-navbar-item ' + (activeTab === "bird" ? "active" : "")}>Bird</div>
                    <div id='reptile' onClick={handleTabClick} className={'test-navbar-item ' + (activeTab === "reptile" ? "active" : "")}>Reptile</div>
                    <div id='horse' onClick={handleTabClick} className={'test-navbar-item ' + (activeTab === "horse" ? "active" : "")}>Horse</div>
                </div>
            </div>
            <div className='test-content'>
                <TestimonialCards activeTestimonials={activeTestimonials}/>
            </div>

        </div>
  )
}

export default Testimonials;