import React from 'react'
import './featuredRestaurants.css'
import { getUniqueRestaurants } from './categoriesSlice'
import { useSelector } from 'react-redux'


const restaurantdata = [
    {id:'1',name:'Canteen',time:'10-15 mins',available:['Veg','Non-veg','Fast Food','Maggie'],img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDqFTHpG57UxrPr6-hGe-PogMjZHnrifTQcg&usqp=CAU'},
    {id:'2',name:'Shamiyana',time:'10-15 mins',available:['Veg','Non-veg','Fast Food','Maggie'],img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReyTthE5MntSF10bmDAVaB2pFimPpdKkFliQ&usqp=CAU'},
]



const FeaturedRestaurants = () => {

    const featuredrestaurants = useSelector(getUniqueRestaurants)


    const displayrestaurants = featuredrestaurants.map((restaurantname)=>{
        const selectedrestaurant = restaurantdata.filter(restaurant => restaurant.name === restaurantname)
        const name = restaurantname
        const time = selectedrestaurant[0].time
        const available = selectedrestaurant[0].available.sort(() => 0.5 - Math.random()).slice(0,3)
        const img = selectedrestaurant[0].img

        const availablefeatures = available.map((feature)=>{
            return(
                <div className='featuredrestaurantfeaturebox'>
                    {feature}
                </div>
            )
        })

        return(
            <a href='/' className='featuredrestaurantbox'>
                
                <div className='featuredrestaurantratings'>
                    <span className='featuredrestaurantspanpan'>
                        <span className='featuredrestaurantratingsrate'>
                            4.5
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#FFC529" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                    </span>

                    <span className='featuredrestaurantpeople'>
                        35+
                    </span>
                </div>

                <div className='featuredrestaurantimgbox'>
                    <img className='featuredrestaurantimg' src={img} alt={name} />
                </div>

                <div className='featuredrestaurantbottom'>
                    <div className='featuredrestaurantnamebox'>
                        <h3 className='featuredrestaurantname'>{name}</h3>
                        <span className='featuredrestauranttickbox'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                            </svg>
                        </span>
                    </div>

                    <div className='featuredrestauranttimecontainer'>
                        <span className='featuredrestaurantwatch'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-stopwatch-fill" viewBox="0 0 16 16">
                                <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584.531.531 0 0 0 .013-.012l.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354a.717.717 0 0 0-.012.012A6.973 6.973 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1h-3zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0z"/>
                            </svg>
                        </span>
                        <span className='featuredrestaurantstimeshown'>
                            {time}
                        </span>
                    </div>
                    
                    <div className='featuredrestaurantfeatures'>
                        {availablefeatures}
                    </div>

                </div>
                
            </a>
        )
    })

  return (
    <div className='featuredrestaurantscontainer'>
        {displayrestaurants}
    </div>
  )
}

export default FeaturedRestaurants
