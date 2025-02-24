import React, { useContext, useEffect, useState } from 'react'
import styles from "./Login.module.css"
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import *  as Yup from 'yup'
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader";
import { tokenContext } from '../../Context/tokenContext'
export default function Login() {
    const[counr,useCount]=useState(0)

    
    let[isCallingApI,setIsCallingApI]=useState(false);
    let[apiError,setApiError]=useState(null);

    let{setToken}=useContext(tokenContext)
    let navigate=useNavigate()



    const initialValues={
  
      email:'',
      password:'',
    }
const validationSchema= Yup.object().shape({
  
  email:Yup.string().email("Inavalid Email").required("Reqiured"),
  password:Yup.string().matches(new RegExp('^[A-Z][a-z0-9]{3,8}$'),'invalid password').required("Reqiured"),
  
})

 async function callLogin(values){
try {

  setIsCallingApI(true) 
  setApiError(null)
 let {data}=await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,values)
 console.log(data);
 localStorage.setItem("userToken",data.token)

 setToken(data.token)
 setIsCallingApI(false)
navigate("/")
 } catch (error) {
  setApiError(error.response.data.message,"Error")
  setIsCallingApI(false)
  
 }


}

    const loginForm =useFormik ({
  initialValues,
  validationSchema,
  onSubmit:callLogin

    })

    return (
   
      <form onSubmit={loginForm.handleSubmit}  className="w-[50%] mx-auto my-5 h-screen pt-20">
     <h1 className='text-4xl text-gray-600 py-5'>Login Now:</h1>
   
     {apiError ? <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
     {apiError}
   </div>:''
   }
   
   
   
   {/* alert Name*/}
    {loginForm.errors.name && loginForm.touched.name? <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
     {loginForm.errors.name}
   </div>:''
   }
   
   
   
   {/* Label Email */}
     <div className="relative z-0 w-full mb-5 group">
       <input type="email" name="email"  onBlur={loginForm.handleBlur}     value={loginForm.values.email } onChange={loginForm.handleChange}   id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
       <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Email</label>
     </div>
    
    
   {/* alert Email*/}
   {loginForm.errors.email && loginForm.touched.email? <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 " role="alert">
     {loginForm.errors.email}
   </div>:''
   }
   
   
   
   
    {/* Label Password */}
   
     <div className="relative z-0 w-full mb-5 group">
       <input type="password" name="password"  onBlur={loginForm.handleBlur}      value={loginForm.values.password } onChange={loginForm.handleChange}     id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
       <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Password</label>
     </div>
   
   
   {/* alert Password*/}
   {loginForm.errors.password && loginForm.touched.password? <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
     {loginForm.errors.password}
   </div>:''
   }
   
   {isCallingApI ? <div className='w-auto flex justify-end'>
     <div className='bg-main p-2 rounded-md'>
     <ClipLoader className='text-main' size={20} />
     </div>
   
   </div> 
   : <button type="submit" className="text-white bg-main bg-opacity-70 hover:bg-main block ml-auto focus:ring-4 focus:outline-none focus:ring-main font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-main dark:hover:bg-main dark:focus:ring-main">Login</button>}
   
   
   </form>
     
     )
}
