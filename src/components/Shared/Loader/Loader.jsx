import React, { useEffect, useState } from 'react'
import styles from './Loader.module.css'
import loader from '../../../assets/images/e1d70bd22f94d825cf2e1ad2fd8e9544.gif'
export default function Loader() {
    
  return (
    <div className='flex justify-center'>
      
      <img src={loader} alt="" />
    </div>
  )
}
