import React, { useContext, useEffect, useState } from 'react'
import styles from './RecentProducts.module.css'
import axios from 'axios'
import ProductItem from '../../../Shared/ProductItem/ProductItem'
import Loader from '../../../Shared/Loader/Loader'
import { cartContext } from '../../../../Context/CartContext'
import { toast } from 'react-toastify'


export default function RecentProducts() {
    let[products,setProducts]=useState( [])
let {addToCart}=useContext(cartContext)


    function getProducts(){
        axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
        .then (({ data })=>{
          console.log(data);
          setProducts(data.data)
        })
        .catch(err=>{
          console.log(err)
        })
        }

async function addProductToCart(id){
    let data = await addToCart(id)
    console.log(data);

    if(data.status =="success"){
       toast("Product Added sucessfully!",{theme:"dark",type:"success"});
    }

    
}
async function addWishToCart(id){
    let data= await addToWish(id)
    console.log(data);
   
    if(data.status == "success"){
          toast("Product Added sucessfully!",{ theme:"dark" , type:"success"});
       }
   
 }
        useEffect(()=>{
          getProducts()
        },[])

    
  return (
    <>
      {products.length!=0 && <div className='main-layout  mb-8' >
      
     
{ products.map(product => <ProductItem  key={product.id} addWish={addWishToCart} addProductToCart={addProductToCart}  product={product}/>)}
  
        </div>}
        {products.length==0 && <Loader/> }
        
    </>
  
  )
}
