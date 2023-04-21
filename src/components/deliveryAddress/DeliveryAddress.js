import React from 'react'
import './deliveryAddress.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteaddress } from '../profile/profileSlice'

const DeliveryAddress = () => {
    const Dispatch = useDispatch()

    const addressarray = useSelector(state=>state.profile.addresses)


    const displayAddress = addressarray.map((address,index)=>{
        return(
            <div id={index} className='daaddressbox'>
                <div className='daaddressboxleft'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-check" viewBox="0 0 16 16">
                        <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708L7.293 1.5Z"/>
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.707l.547.547 1.17-1.951a.5.5 0 1 1 .858.514Z"/>
                    </svg>
                </div>


                <div className='daaddressboxright'>
                    <div className='daaddresstype'>
                        Home
                    </div> 

                    <div className='daaddressemainaddress'>
                        {address}
                    </div>

                    <div className='daaddresschangebuttons'>
                        <button className='dabutton' onClick={()=>Dispatch(deleteaddress(index))}>
                            Delete
                        </button>

                        <a href={`/addnewaddress?index=${index}`} className='dabutton'>
                            Edit
                        </a>
                    </div>
                </div>
            </div>
        )
    })

  return (
    <>
        <div className='DA'>
            <a href="/" className='profilebackbutton'>
                <img className='profilebackbuttonimg' src="https://cdn.icon-icons.com/icons2/1674/PNG/512/arrowiosback_111116.png" alt="" />
            </a>

            <div className='dacontainer'>
                <div className='daheading'>
                    <span>Delivery Address</span>
                </div>
            </div>

            <div className='dasavedaddresses'>
                <span>SAVED ADDRESSES</span>
            </div>

            <div className='daaddresscontainer'>
                {displayAddress}
            </div>

            <div className='daaddnewaddresscontainer'>
                <a href="/addnewaddress" className='daaddnewaddressbutton'>
                    Add new address
                </a>
            </div>
        </div>
    </>
  )
}

export default DeliveryAddress
