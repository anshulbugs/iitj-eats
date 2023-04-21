import React from 'react'
import './selectCategory.css'
import { useDispatch } from 'react-redux'
import { updateCategory } from './categoriesSlice'


const categories = {
    burger: ['Burger','https://drive.google.com/u/0/uc?id=1I_fMXPVB-ygF3sajtebcqsvGGtxBLoph&export=download'],
    pizza: ['Pizza','https://drive.google.com/u/0/uc?id=1K7w_sfbBdSfRXImLj73EfSc5vL-GZ5u_&export=download'],
    soutIndian:['South','https://drive.google.com/u/0/uc?id=1K7w_sfbBdSfRXImLj73EfSc5vL-GZ5u_&export=download'],
    mexian:['Mexia','https://drive.google.com/u/0/uc?id=1vmbIotG62Ya30MnVXvMIwj6S3Y0KKuZA&export=download'],
    asian: ['Asian','https://drive.google.com/u/0/uc?id=1K7w_sfbBdSfRXImLj73EfSc5vL-GZ5u_&export=download'],
}


const SelectCategory = () => {

    const dispatch = useDispatch(); 

    const cateogoryButtons = Object.entries(categories).map(([category,name])=>{
        return(
            <button key={category} type='button' className='selectcategorybutton' onClick={()=>dispatch(updateCategory(category))}>
                <div className='selectcategorybuttonbox'>
                    <div className='selectcategorybuttonlogo'>
                        <img className='selectcategorybuttonlogoimg' src={name[1]} alt="" />
                    </div>
                    <span className='selectcategoryname'>
                        {name[0]}
                    </span>
                </div>
            </button>
        )
    })
    return (
        <div className='selectcategorycontainer'>
            {cateogoryButtons}
        </div>
    )
}

export default SelectCategory
