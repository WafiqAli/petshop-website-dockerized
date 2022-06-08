import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCircle } from '@fortawesome/free-solid-svg-icons';

import cocoImg from '../../Assets/Homepage/Body/coco.png';
import jackyImg from '../../Assets/Homepage/Body/jacky.png';
import lolaImg from '../../Assets/Homepage/Body/lola.png';

const TestimonialCards = ({ activeTestimonials }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const images = [cocoImg, jackyImg, lolaImg];

    const pageCount = Math.ceil(activeTestimonials.length/3);
    const startIndex = 3 * (currentPage - 1);

    let cardList = [];
    let j = 1;
    for (let i = startIndex; i < startIndex + 3; i++) {
        
        if (i < activeTestimonials.length) {
            cardList.push(
                <div className={'review-card'}>
                    <img src={images[j-1]} alt='petpicture'/>
                    <div className='card-text'>
                        <p>{activeTestimonials[i].owner}</p>
                        <h3>{activeTestimonials[i].petName}, {activeTestimonials[i].petAge}</h3>
                        <h3>{activeTestimonials[i].petBreed}</h3>
                        <p>"{activeTestimonials[i].comment}"</p>
                    </div>
                    
                </div>
            )
            j++;
        }
    }

    let pageCountCircles = []
    for (let i = 0; i < pageCount; i++) {
        if (currentPage === i + 1) {
            pageCountCircles.push(<div><FontAwesomeIcon className='review-page-circle active' icon={faCircle}/></div>);
        }
        else {
            pageCountCircles.push(<div><FontAwesomeIcon className='review-page-circle' icon={faCircle}/></div>);
        }
    }

    const handleLeftArrowClick = (e) => {
        e.preventDefault();
        
        if (currentPage - 1 < 1) {
            setCurrentPage(1);
        }
        else {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleRightArrowClick = (e) => {
        e.preventDefault();
        
        if (currentPage + 1 > pageCount) {
            setCurrentPage(pageCount);
        }
        else {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <div>
            <div className='review-container'>
                <FontAwesomeIcon className='review-arrows' onClick={handleLeftArrowClick} icon={faChevronLeft}/>
                {cardList} 
                <FontAwesomeIcon className='review-arrows' onClick={handleRightArrowClick} icon={faChevronRight}/>
            </div>
            <div className='review-page-count'>
                {pageCountCircles}
            </div>
        </div>
    )
}

export default TestimonialCards