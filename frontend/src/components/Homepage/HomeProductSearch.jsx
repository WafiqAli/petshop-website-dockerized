import React from 'react'

const HomeProductSearch = () => {
  return (
    <div>
        <div className='shop-container'>
            <div className='shop-card search'>
                <h3>Find Products, Fast!</h3>
                <form className='search-form'>
                    <input
                    type='text'
                    placeholder='What are you looking for?'
                    />
                    <button type='submit'>Search</button>
                </form>
                <div className='divider'></div>
                <form className='search-form'>
                    <select>
                        <option value="" disabled selected>Select your pet</option>
                        <option>Dog</option>
                        <option>Cat</option>
                        <option>Fish</option>
                        <option>Rabbit</option>
                        <option>Guinea Pig</option>
                        <option>Mouse</option>
                        <option>Rat</option>
                        <option>Budgie</option>
                        <option>Funch</option>
                        <option>Canaries</option>
                        <option>Cockatiels</option>
                        <option>Turtle</option>
                        <option>Frog</option>
                        <option>Lizard</option>
                        <option>Axolotl</option>
                        <option>Horse</option>
                    </select>
                    <select>
                        <option value="" disabled selected>Select your food brand</option>
                        <option>Royal Canin</option>
                        <option>BlackHawk</option>
                        <option>Hills</option>
                        <option>Kong</option>
                        <option>Purina</option>
                        <option>Eukanuba</option>
                        <option>Orijen</option>
                    </select>
                    
                    <button type='submit'>Search</button>
                </form>
            </div>
            <div className='shop-card latest'>
                <h3>Shop Latest</h3>
            </div>
            <div className='shop-card best'>
                <h3>Shop Best</h3>
            </div>
            <div className='shop-card sale'>
                <h3>Shop Sale</h3>
            </div>
        </div>
    </div>
  )
}

export default HomeProductSearch