import React, { useState } from 'react'
import './addNewAddress.css'
import { useDispatch } from 'react-redux'
import { addnewaddress } from '../profile/profileSlice'

const AddNewAddress = ({index}) => {

    const Dispatch = useDispatch()

    var heading = 'Add New Address'

    var [updateAddresss,setUpdateAddress] = useState('')

    const addaddress = (address)=>{
        if(address){
            Dispatch(addnewaddress(address))
            window.location.href = '/deliveryaddress'
        }
        else{
            console.log('No Address found')
        }
    }

  return (
    <div className='nad'>

        <a href="/deliveryaddress" className='profilebackbutton'>
            <img className='profilebackbuttonimg' src="https://cdn.icon-icons.com/icons2/1674/PNG/512/arrowiosback_111116.png" alt="" />
        </a>

        <div className='nadcontainer'>
            <div className='nadheading'>
                <span>{heading}</span>
            </div>
        </div>

        <div className='nadaddressbox'>
            <label className='nadaddresslabel' htmlFor="addressarea">Address</label>
            <textarea className='nadaddresstextarea' name="address" id="addressarea" rows="5" onChange={e=>setUpdateAddress(e.target.value)}></textarea>
        </div>

        <div className='nadbuttonbox'>
            <button className='nadbutton' onClick={()=>addaddress(updateAddresss)}>Save Address</button>
        </div>

    </div>
  )
}

export default AddNewAddress
