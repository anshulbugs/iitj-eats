import React from 'react'
import './home.css'
import SelectCategory from './SelectCategory'
import CategoryFoodItems from './CategoryFoodItems'
import FeaturedRestaurants from './FeaturedRestaurants'


const Home = () => {
  return (
    <>
        <div className='homemaincontainer'>
            <div className='homeheadingandsearch'>
                <h2>What would you like to order</h2>
                <div class="group">
                  <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                  <input placeholder="Search" type="search" class="input"/>
                </div>
            </div>

            <div className='homecatergoryselectbox'>
              <SelectCategory/>
            </div>

            <div className='homefeaturedrestaurantsbox'>
              <h2 className='homefeaturedrestaurantsheading'>Featured Restaurants</h2>
              <div className='homefeaturedrestaurantscontainer'>
                <FeaturedRestaurants/>
              </div>
              
            </div>

            <div className='homepopularitems'>
                <h2 className='homepopularitemsheading'>Popular Items</h2>
                <CategoryFoodItems/>
            </div>

        </div>


        <div className='homefooter'>
            <h1>
               Eat  Learn  Repeat
            </h1>
            <span>
              <span className='homefootertext'>Created with</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(203, 0, 0, 0.649)" class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
              </svg>
              <span className='homefootertext2'>by students only</span>
            </span>
        </div>
    </>
  )
}

export default Home
