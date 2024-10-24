import React from 'react'
import profile from '../../assets/images/profile.png'

const Navbar = () => {
  return (
    <>
     <div className='flex justify-between items-center py-4 md:py-8'>
        <h3 className='text-2xl md:text-4xl font-bold'>Knowledge Cafe's</h3>
        <img className='md:w-20 w-12' src={profile} alt="" />
     </div> 
     <hr></hr>
    </>
  )
}

export default Navbar
