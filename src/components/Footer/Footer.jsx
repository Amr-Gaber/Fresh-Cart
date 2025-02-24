import React, { useEffect, useState } from 'react'
import styles from "./Footer.module.css"
export default function Footer() {
    const[counr,useCount]=useState(0)
  return (
    <footer className='bg-[rgb(242,242,242)]  py-6'>
      <div className="container w-full ">

      <h2 className='text-3xl text-[#212529]'>Get the freshCart App</h2>
      <p className='text-[#6d767e] font-light mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, recusandae!</p>
      <div className="flex mb-5">
      <input  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block grow me-3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
        <button className='bg-main text-white rounded-md p-2'>Share app Link</button>
      </div>

      <div className="partner flex justify-between py-6 border-y-2">
        <div className="payment">
          <h2>Payment Partners</h2>
        </div>
        <div className="app">
          <p>get with freshCart</p>
        </div>
      </div>
      </div>
      </footer>
  )
}
