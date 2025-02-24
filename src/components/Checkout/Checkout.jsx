import React, { useContext, useEffect, useState } from 'react'
import styles from './Checkout.module.css'
import { useFormik } from 'formik';
import *  as Yup from 'yup'
import ClipLoader from 'react-spinners/ClipLoader';
import { cartContext } from '../../Context/CartContext';


export default function Checkout() {
const[count,setCount]=useState(0)

 
let[isCallingApI,setIsCallingApI]=useState(false);
let[apiError,setApiError]=useState(null);
let[isOnline,setIsOnline]=useState(false);

let{cashOnDelivery,onlinePayment}=useContext(cartContext)






const initialValues={

details:'',
phone:'',
city:'',
}
const validationSchema= Yup.object().shape({

 details:Yup.string().required("Reqiured"),
 phone:Yup.string().required("Reqiured"),
 city:Yup.string().required("Reqiured"),


})


const shippingForm =useFormik({
    initialValues,
    validationSchema,
    onSubmit:callPayment
})

async function callPayment(values){
    console.log(isOnline);
    
try {
    setIsCallingApI(true);
    if(isOnline){

        let x = await onlinePayment(values)
        console.log(x);
        window.location.href = x.session.url

    }else{
     
        let x = await cashOnDelivery(values)
        console.log(x);
        
    }
   
 
} catch (error) {
setIsCallingApI(false)


}


}






useEffect(()=>{

})


  return (
    <>

<form onSubmit={shippingForm.handleSubmit}  className="w-[50%] mx-auto my-5 ">
  <h1 className='text-4xl text-gray-600'> Shipping Info:</h1>

   {apiError ? <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {apiError}
</div>:''
} 




{/* Label details */}
  <div className="relative z-0 w-full mb-5 group">
    <input type="text" name="details"  onBlur={shippingForm.handleBlur}     value={shippingForm.values.details } onChange={shippingForm.handleChange}   id="details" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
    <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Details</label>
 
{/* alert details*/}
{shippingForm.errors.details && shippingForm.touched.details? <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {shippingForm.errors.details}
</div>:''
}
  </div>
 
{/* Label phone */}
<div className="relative z-0 w-full mb-5 group">

    <input type="tel" name="phone"  onBlur={shippingForm.handleBlur}     value={shippingForm.values.phone } onChange={shippingForm.handleChange}   id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
    <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>

{/* alert phone*/}
{shippingForm.errors.phone && shippingForm.touched.phone? <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {shippingForm.errors.phone}
</div>:''
}
  </div>
 
{/* Label city */}
<div className="relative z-0 w-full mb-5 group">
    <input type="text" name="city"  onBlur={shippingForm.handleBlur}     value={shippingForm.values.city } onChange={shippingForm.handleChange}   id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
    <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
    
 
{/* alert city*/}
{shippingForm.errors.city && shippingForm.touched.city? <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {shippingForm.errors.city}
</div>:''
}


  </div>
 


  <div className="relative z-0 w-full mb-5 group">
<input type="checkbox" value={'online'} onChange={()=>setIsOnline(true)} />
<label htmlFor="" className='mx-3 '>Online</label>
</div>





  
 










{isCallingApI ? <div className='w-auto flex justify-end'>
  <div className='bg-main p-2 rounded-md'>
  <ClipLoader className='text-main' size={20} />
  </div>

</div> 
: <button type="submit" className="text-white bg-main bg-opacity-70 hover:bg-main block ml-auto focus:ring-4 focus:outline-none focus:ring-main font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-main dark:hover:bg-main dark:focus:ring-main">Pay now</button>}
 

 
</form>


    </>
  )
}
