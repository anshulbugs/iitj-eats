import React from 'react'
import './registration.css'

const Registration = () => {
  return (
    <>
        <div className='registrationcontainer'>
            <div className='registrationcontainer2'>

                <div className='registrationbox'>

                    <h2>Registration</h2>

                    <span className='registrationheadingspan'>Enter your details to create account</span>



                    <div className='redistrationformbox'>
                        <form action="" className='redistrationform'>
                            <label className='registrationlabel' htmlFor="name">Name</label>
                            <input id= 'name' name='name' className='registrationinput' type="text" />

                            <label className='registrationlabel' htmlFor="number">Phone Number</label>
                            <input id= 'number' name='number' className='registrationinput' type="text" />

                            <label className='registrationlabel' htmlFor="address">Address</label>
                            <textarea name="address" id="address" rows="3" className='registrationtextarea'></textarea>

                            <div className='registrationbuttonbox'>
                              <button className='registrationbutton' > Save </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Registration
