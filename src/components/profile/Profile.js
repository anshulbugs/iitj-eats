import React, { useState } from 'react'
import './profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { updatenumber } from './profileSlice'

const Profile = () => {
    const Dispatch = useDispatch()
    const username = useSelector((state)=>state.profile.name)
    const number = useSelector((state)=>state.profile.number)
    const [phonenumber,setPhoneNumber] = useState(number)
    const email = useSelector((state)=>state.profile.email)
    var img = useSelector((state)=>state.profile.img)
    if(!img){
        img = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    }

  return (
    <>
        <div className='profile'>
            <a href="/" className='profilebackbutton'>
                <img className='profilebackbuttonimg' src="https://cdn.icon-icons.com/icons2/1674/PNG/512/arrowiosback_111116.png" alt="" />
            </a>
            <div className='profiledesign'>
            </div>
            <div className='profilecontainer'>
                <div className='profilelogo'>
                    <img className='profileimg' src={img} alt="name" />
                </div>

                <div className='profileimgname'>
                    {username}
                </div>

                <div className='profilestart'>
                    <label className='profilelabels' htmlFor="fullname">Full Name</label>
                    <input className ='profilereadonly' value = {username} type="text" name="fullname" id="fullname" readOnly/>

                    <label className='profilelabels' htmlFor="email">Email</label>
                    <input className ='profilereadonly' value = {email} type="text" name="email" id="email" readOnly/>

                    <label className='profilelabels' htmlFor="phonenumber">Phone Number</label>
                    <input className ='profilename' value = {phonenumber} type="text" name="phonenumber" id="phonenumber" onChange={e=>setPhoneNumber(e.target.value)}/>
                </div>
                
                <button className='profilesavebutton' onClick={()=>Dispatch(updatenumber(phonenumber))}>
                    Save Changes
                </button>
            </div>
        </div>
    </>
  )
}

export default Profile
