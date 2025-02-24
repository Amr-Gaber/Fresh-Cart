import React, { useContext, useEffect, useState } from 'react'
import styles from "./Navbar.module.css"
import logo from '../../assets/images/freshcart-logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { counterContext } from '../../Context/counterContext'
import { tokenContext } from '../../Context/tokenContext'
import { cartContext } from '../../Context/CartContext'
export default function Navbar() {
    
   let {token,setToken}=useContext(tokenContext)
   let {numOfCartItems}=useContext(cartContext  )
   let navigate =useNavigate(cartContext)

   console.log(token,"tokentokenn navbar");
   


function logOut(){
  //1-remove localstrage

  localStorage.removeItem("userToken")
  //2-set token null
  setToken(null)
  // 3-navigate login
navigate("/login")

}



    useEffect(()=>{

    },[])

return(
<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex  items-center justify-between mx-auto p-4  ">
 <div className="flex items-center gap-4">
 <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
     <img src={logo} width={'200px'} alt="" />
    </a>
    <div className="hidden w-full md:block md:w-auto absolute top-0 left-0 md:relative md-top-0"  id="navbar-default">


{token ?
  <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <NavLink to={'home'} className="block py-2 px-3 rounded-sm   dark:text-white" aria-current="page">Home</NavLink>
        </li>
        <li>
          <NavLink to={'cart'} className="block py-2 px-3 text-gray-900 rounded-sm md:border-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> Cart {numOfCartItems }</NavLink>
        </li>
        <li>
          <NavLink to={'products'} className="block py-2 px-3 text-gray-900 rounded-sm md:border-0  dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Products</NavLink>
        </li>
        <li>
          <NavLink to={'categories'} className="block py-2 px-3 text-gray-900 rounded-sm md:border-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Categories</NavLink>
        </li>
        <li>
          <NavLink to={'brands'} className="block py-2 px-3 text-gray-900 rounded-sm md:border-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Brands</NavLink>
        </li>
        <li>
          <NavLink to={'wishlist'} className="block py-2 px-3 text-gray-900 rounded-sm md:border-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">WishList</NavLink>
        </li>
      </ul>:''}
      
    </div>
    
 </div>
 


<div className='flex items-center '>


<div className="flex gap-3 me-10">
  <ul className='flex gap-3 hidden md:flex   '>
    <li>
      <i className='fa-brands fa-instagram'></i>
      </li>
      <li><i className='fa-brands fa-facebook'></i></li>
     <li><i className='fa-brands fa-tiktok'></i></li> 
     <li><i className='fa-brands fa-twitter'></i></li> 
      <li><i className='fa-brands fa-linkedin'></i></li>
      <li><i className='fa-brands fa-youtube'></i></li>
  
  </ul>
 
</div>



<ul className='flex gap-3 '>

{token ?<li>
<span onClick={logOut} >Logout</span>
 </li>
: <>
<li>
<NavLink to={'register'}>Register</NavLink>
</li>
<li>
<NavLink to={'login'}>Login</NavLink>
</li>

</>
}
 

</ul>



<button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
</div>



    
  </div>
</nav>


)

}
