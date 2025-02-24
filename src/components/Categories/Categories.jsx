import React, { useEffect, useState } from 'react'
import styles from "./Categories.module.css"
import NewCategories from '../Home/components/NewCategories/NewCategories'

export default function Categories() {
    const[count,useCount]=useState(0)
  return (
    <>
    <NewCategories/>
    </>
  )
}
