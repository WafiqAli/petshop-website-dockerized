import React from 'react'
import royalCanin from '../../Assets/Homepage/Body/RoyalCanin.png';
import blackHawk from '../../Assets/Homepage/Body/BlackHawk.png';
import hills from '../../Assets/Homepage/Body/Hills.png';
import kong from '../../Assets/Homepage/Body/Kong.png';
import purina from '../../Assets/Homepage/Body/Purina.png';
import eukanuba from '../../Assets/Homepage/Body/Eukanuba.png';
import orijen from '../../Assets/Homepage/Body/Orijen.png';

const BrandsBanner = () => {
  return (
    <div>
        <div className='brands-container'>
            <div className='brands-item'><img src={royalCanin} alt='brandicon'/></div>
            <div className='brands-item'><img src={blackHawk} alt='brandicon'/></div>
            <div className='brands-item'><img src={hills} alt='brandicon'/></div>
            <div className='brands-item'><img src={kong} alt='brandicon'/></div>
            <div className='brands-item'><img src={purina} alt='brandicon'/></div>
            <div className='brands-item'><img src={eukanuba} alt='brandicon'/></div>
            <div className='brands-item'><img src={orijen} alt='brandicon'/></div>
        </div>
    </div>
  )
}

export default BrandsBanner