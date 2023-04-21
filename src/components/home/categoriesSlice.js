import { createSlice } from "@reduxjs/toolkit";

const allfooditems = [
    {   id: '1',
        name:'ALoo Tikki Burger',
        img:'https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886',
        price:'50',
        categories:['burger','fast food'],
        restaurant:'Canteen'
    },
    
    {   id: '2',
        name:'Veg Burger',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-DEl_VpAZzJ2sLHUgAERGMznVhhT85eGwiw&usqp=CAU',
        price:'50',
        categories:['burger','fast food'],
        restaurant:'Canteen'
    },
    {   id: '3',
        name:'Pizza',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-DEl_VpAZzJ2sLHUgAERGMznVhhT85eGwiw&usqp=CAU',
        price:'50',
        categories:['pizza','fast food'],
        restaurant:'Shamiyana'
    }
]

const initialState = {
    items: allfooditems,
    categoryFilter: ''
  };


const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers:{
        updateCategory:{
            reducer:(state,action)=>{
                const category = action.payload.category;
                state.categoryFilter = category;
                state.items = allfooditems.filter(item => item.categories.includes(category));
            },
            prepare:(category)=>{
                let setcategory = category||'burger'
                return{
                    payload:{
                        category: setcategory,
                    }
                }
            }
        }
    }
})

export const getcategoryItems = (state) => {
    return state.categories.items.slice(0,10);
} 
export const getUniqueRestaurants = (state) => {
    const categoryItems = state.categories.items;
    const uniqueRestaurants = [...new Set(categoryItems.map(item => item.restaurant))];
    return uniqueRestaurants;
}

export const {updateCategory} = categoriesSlice.actions

export default categoriesSlice.reducer;