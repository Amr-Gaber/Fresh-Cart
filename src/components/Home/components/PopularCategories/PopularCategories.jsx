import React, { useEffect, useState } from 'react'
import styles from './PopularCategories.module.css'
import Slider from 'react-slick';
import axios from 'axios';
export default function PopularCategory() {
    let[count,setCount]=useState(0)
    const[categories,setCategories]=useState( [] )

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      arrows:false,
    };

    async function getCategories(){
   try {
    const {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  
    setCategories(data.data)
   } catch (error) {
 
   }
    }
    useEffect(()=>{
      getCategories()
    })
  return (
    <div className='py-20'>
      <h2 className='mb-5 text-3xl'>Shop Popular Categories</h2>
       
<Slider {...settings}>
    {categories.map(category =><div>
      <img src = {category.image} className={styles.categoryImage} alt="" />
    <h4>{category.name}</h4>
    </div>
    )}
    </Slider>


    </div>
  )
}
