import React, { useContext, useEffect, useState } from 'react'
import styles from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'              
import RelatedProducts from './components/RelatedProducts/RelatedProducts';
import Slider from "react-slick";
import axios from 'axios';
import Loader from '../Shared/Loader/Loader';
import  { cartContext } from '../../Context/CartContext';
import { toast } from 'react-toastify';




export default function ProductDetails() {
let[count,setCount]=useState()
const [details,setDetails]=useState(null)
  const {id,categoryId}= useParams()
  let{addToCart}=useContext(cartContext)
console.log(id);


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

   async function addProductToCart(id){
     let data= await addToCart(id)
     console.log(data);
    
     if(data.status == "success"){
           toast("Product Added sucessfully!",{ theme:"dark" , type:"success"});
        }
    
  }


  async function addWishToCart(id){
    let data= await addToWish(id)
    console.log(data);
   
    if(data.status == "success"){
          toast("Product Added sucessfully!",{ theme:"dark" , type:"success"});
       }
   
 }




function getProductsDetails(){
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    .then (({ data })=>{
      console.log(data);
      setDetails(data.data)
      
    })
    .catch(err=>{
      console.log(err)
    })
    }

    useEffect(()=>{
        getProductsDetails()
    },[id   ])

  return (
    <>


{details && <div className='main-layout items-center py-16'>
     

       <div className="w-4/12">
       
<Slider {...settings}>
    {details?.images.map(src => <img src={src} alt="" />)}
    </Slider>

      
       </div>
       <div className="w-8/12">
      <h1>{details?.title}</h1>
      <p>{details?.description}</p>
      <span>{details?.category?.name}</span>
      <div className="flex justify-between mb-4"> 
        <p>{details?.price} EGP</p>
        <p> <i className='fa fa-star rating-color'></i>
        {details?.ratingsAverage}</p>
       
        
    </div>
    <button onClick = {()=>addProductToCart(details.id)}   className=' bg-main w-full p-2 text-center text-white rounded-md'>Add to Cart</button>

       </div>
        </div>}

        
        {!details && <Loader/> }

        <h2 className='text-4xl font-bold '>Related Products</h2>
        <RelatedProducts categoryId={categoryId}/>
    </>
  )           
}








