import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EmailIcon from '@mui/icons-material/Email';

export default function Sidebar() {
  return (
    <div className='bg-black h-100 w-100 '>
      
    {/* <!-- Sidebar --> */}
    <div className="sidebar w-40 h-screen  text-white fixed top-0 left-0 flex flex-col overflow-y-auto transition-all duration-300  ">
        {/* <h2 className="text-center py-5 border-b border-gray-600">Menu</h2> */}
        <a href="/" className=" text-gray-300 py-6 px-5 text-lg border-b border-gray-600 hover:bg-gray-600 hover:text-white transition-colors">{<HomeIcon className=''/> }<br/>HOME</a>
        <a href="/About" className="text-gray-300 py-6 px-5 text-lg border-b border-gray-600 hover:bg-gray-600 hover:text-white transition-colors">{<PersonIcon/>}<br/>ABOUT</a>
        <a href="/Photos" className="text-gray-300 py-6 px-5 text-lg border-b border-gray-600 hover:bg-gray-600 hover:text-white transition-colors">{<VisibilityOutlinedIcon/>}<br/>PHOTOS</a>
        <a href="/Contact" className="text-gray-300 py-3 px-5 text-lg border-b border-gray-600 hover:bg-gray-600 hover:text-white transition-colors">{<EmailIcon/>}<br/>CONTACT</a>
    </div>

    </div>
  )
}


    




