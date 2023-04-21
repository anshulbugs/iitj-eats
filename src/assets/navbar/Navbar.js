import React from 'react'
import './navbar.css'
import { useSelector } from 'react-redux';

function navbarclose(){
    document.getElementById("sidenavbar").style.visibility = "hidden";
    document.getElementById("sidenavbar").style.width = "0";
    document.getElementById("topnavbar").style.height = "60px";
    document.getElementById("topnavbar").style.visibility = "visible";
}

function closenavbar(event) {
    const windowWidth = window.innerWidth;
    const clickX = event.clientX;
  
    if (clickX > windowWidth / 2) {
        navbarclose()
    }
  }

const Navbar = () => {

    const opennavbar = ()=>{
        document.getElementById("sidenavbar").style.width = "100%";
        document.getElementById("sidenavbar").style.visibility = "visible";
        document.getElementById("topnavbar").style.height = "0px";
        document.getElementById("topnavbar").style.visibility = "hidden";
    }

    const username = useSelector((state)=>state.profile.name).split(' ')[0]
    var img = useSelector(state=>state.profile.img)
    const useremail = useSelector(state=>state.profile.email)

    if(!img){
        img = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    }

  return (
    <>
        <div id='topnavbar' className='navbartop'>
            <div>
                <button onClick={()=>opennavbar()} className='navabaropenbutton'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>
            </div>
            
            <h1 className='navbartopname'>
                IITJ EATs
            </h1>

            <a href="/profile" className='navbartopprofile'>
                <img src={img} alt="Name" className='navbartopprofileimg'/>
            </a>
        </div>


        <div onClick={closenavbar} className='sidenavbar' id='sidenavbar'>
            <button className='sidenavnarclosebutton' onClick={()=>navbarclose()}>
                <img className='profilebackbuttonimg' src="https://cdn.icon-icons.com/icons2/1674/PNG/512/arrowiosback_111116.png" alt="" />
            </button>

            <div className='sidenavbarcontainer'>
                <div className='sidenavbarprofile'>
                    <div className='sidenavbaravatar'>
                        <img src={img} alt="Name" className='sidenavbarimg'/>
                    </div>
                    <span className='sidenavbarprofilename'>{username}</span>
                    <span className='sidenavbarprofileemail'>{useremail}</span>
                </div>
                
                <ul>
                    <li>
                        <a href="/" className='sidenavbaritems'>
                            <div className='sidenavbaritemsiconbox'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list-nested" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                            </div>
                            <span className='sidenavbaritemsiconname'>
                                My Orders
                            </span>
                        </a>
                    </li>


                    <li>
                        <a href="/profile" className='sidenavbaritems'>
                            <div className='sidenavbaritemsiconbox'>
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                </svg>
                            </div>
                            <span className='sidenavbaritemsiconname'>
                                My Profile
                            </span>
                        </a>
                    </li>
                    

                    <li>
                        <a href="/deliveryaddress" className='sidenavbaritems'>
                            <div className='sidenavbaritemsiconbox'>
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                </svg>
                            </div>
                            <span className='sidenavbaritemsiconname'>
                                Delivery Address
                            </span>
                        </a>
                    </li>

                    <li>
                        <a href="/" className='sidenavbaritems'>
                            <div className='sidenavbaritemsiconbox'>
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                                </svg>
                            </div>
                            <span className='sidenavbaritemsiconname'>
                                Contact Us
                            </span>
                        </a>
                    </li>

                    <li>
                        <a href="/" className='sidenavbaritems'>
                            <div className='sidenavbaritemsiconbox'>
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                                </svg>
                            </div>
                            <span className='sidenavbaritemsiconname'>
                                Settings
                            </span>
                        </a>
                    </li>

                    <li>
                        <a href="/" className='sidenavbaritems'>
                            <div className='sidenavbaritemsiconbox'>
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-question-lg" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14Z"/>
                                </svg>
                            </div>
                            <span className='sidenavbaritemsiconname'>
                                Help and FAQs
                            </span>
                        </a>
                    </li>


                </ul>
                <button className='sidebarlogoutbutton'>
                    Log Out
                    <span className='sidebarlogoutbuttoniconbox'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z"/>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    </>
  )
}
export default Navbar
