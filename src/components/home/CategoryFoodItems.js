import React from 'react'
import { useSelector } from 'react-redux'
import { getcategoryItems } from './categoriesSlice'
import './categoryFoodItems.css'

const CategoryFoodItems = () => {

    const categoryItems = useSelector(getcategoryItems)

    const showitems = categoryItems.map((category)=>{
        return (
            <div className='categoryfooditembox'>
                <a href='/' key={category.id} className='categoryfooditemboxbox' >

                    <div className='categoryfoodpricebox'>
                        Rs. {category.price}
                    </div>

                    <button className='categoryfoodlikebutton'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>
                    </button>

                    <div className='categoryfooditemboxtop'>
                        <img className="categoryfooditemboxtopimg" src={category.img} alt="" />
                    </div>
                    <div className='categoryfooditemboxbottom'>
                        <div className='categoryfooditemrating'>
                            <span className='categoryratingtogether'>
                                <span className='categoryrating'>4.5</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#FFC529" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                            </span>
                            <span className='categoryratingpeeps'>
                                25+
                            </span>
                        </div>
                        <div className='categoryfooddiscp'>
                            <h5 className='categoryfoodtitle'>{category.name}</h5>
                            <span className='categoryfoodrestaurant'>{category.restaurant}</span>
                        </div>
                        
                    </div>
                </a>
            </div>
            
        )
    })
  return (
    <div className='categoryfooditemscontainer'>
        {showitems}
    </div>
  )
}

export default CategoryFoodItems
