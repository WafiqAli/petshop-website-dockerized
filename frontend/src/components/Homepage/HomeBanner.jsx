import React from 'react';
import { useState } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import dogBannerImg from '../../Assets/Homepage/Banner/DogBanner.svg';
import fishBanner from '../../Assets/Homepage/Banner/NemoDoryBanner.svg';
import deliveryBanner from '../../Assets/Homepage/Banner/AutodeliveryBanner.svg';


const HomeBanner = () => {

  const [index, setIndex] = useState("");

  const images = [
    { url: dogBannerImg },
    { url: fishBanner },
    { url: deliveryBanner}
  ]



  return (
    <div>
      <SimpleImageSlider 
        width={'100%'}
        height={672}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={5} //seconds
      />
    </div>
  )
}

export default HomeBanner