import React from 'react'

const LearnMore = () => {
  return (
      <div className='learnMore-wrapper'>
        <div className='learnMore-container'>
            <div className='learnMore-item left'>
                <div>
                    <h2 className='learnMore-header'>From the Blog</h2>
                    <p className='learnMore-text'>Best Products in 2022</p>
                    <p className='learnMore-text'>5 Ways To Clean Your Dogs Teeth At Home</p>
                    <p className='learnMore-text'>Dog-Friendly Walks in Auckland</p>
                    <p className='learnMore-text'>Should I Get My Pet Desexed?</p>
                    <button className='learnMore-btn'>Learn more</button>
                </div>
            </div>
            <div className='learnMore-item right'>
                <div>
                    <h2 className='learnMore-header'>Our Guide</h2>
                    <p className='learnMore-text'>Premium products</p>
                    <p className='learnMore-text'>Understanding stress {'&'} anxiety in pets</p>
                    <p className='learnMore-text'>How to treat your dog for worms</p>
                    <p className='learnMore-text'>How to treat your dog for worms</p>
                    <button className='learnMore-btn'>Learn more</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LearnMore