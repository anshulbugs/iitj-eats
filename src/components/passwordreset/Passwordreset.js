import React from 'react'
import './passwordReset.css'

const Passwordreset = () => {
  return (
    <>
        <div className='passwordresetcontainer'>
            <div className='passwordresetcontainer2'>

                <div className='passwordresetbox'>

                    <h2>Reset Password</h2>

                    <span className='passwordresetheadingspan'>Enter email to Reset Password</span>

                    <div className='passwordresetformbox'>
                        <form action="" className='passwordresetform'>
                            <label className='passwordresetlabel' htmlFor="email">Email</label>
                            <input id= 'email' name='email' className='passwordresetinput' type="text" />

                            <div className='passwordresetbuttonbox'>
                              <button className='passwordresetbutton' > Send </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Passwordreset
