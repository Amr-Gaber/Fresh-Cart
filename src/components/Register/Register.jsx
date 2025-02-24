import React, { useEffect, useState } from 'react'
import styles from "./Register.module.css"
import { useFormik } from 'formik'
import *  as Yup from 'yup'
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from 'react-router-dom'
export default function Register() {
    let[count,useCount]=useState(0)
let[isCallingApI,setIsCallingApI]=useState(false);
let[apiError,setApiError]=useState(null);

let navigate=useNavigate()

    const initialValues={
      name:'Treka',
      email:'',
      password:'',
      rePassword:'', 
      phone:'',
    }
const validationSchema= Yup.object().shape({
  name:Yup.string().min(3,"min length is 3").max(15,"max length is 15").required("Required"),
  email:Yup.string().email("Inavalid Email").required("Reqiured"),
  password:Yup.string().matches(new RegExp('^[A-Z][a-z0-9]{3,8}$'),'invalid password').required("Reqiured"),
  rePassword:Yup.string().oneOf([Yup.ref('password')],'repassword should match password').required("Required"), 
  phone:Yup.string().matches(new RegExp('^01[0125][0-9]{8}$'),'invalid phone').required("Required"),
})

 async function callRegister(values){
try {

  setIsCallingApI(true)
  setApiError(null)
 let {data}=await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,values)
 console.log(data);
 setIsCallingApI(false)
navigate("/login")
 } catch (error) {
  setApiError(error.response.data.message,"Error")
  setIsCallingApI(false)
  
 }


}

    const registerFormik =useFormik ({
  initialValues,
  validationSchema,

  onSubmit:callRegister

    })
  return (
    
<form onSubmit={registerFormik.handleSubmit}  className="w-[50%] mx-auto my-5 ">
  <h1 className='text-4xl text-gray-600'>Register Now:</h1>

  {apiError ? <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {apiError}
</div>:''
}

{/* Label Name */}
  <div className="relative z-0 w-full mb-5 group">
    <input type="text" name="name"  onBlur={registerFormik.handleBlur}      value={registerFormik.values.name } onChange={registerFormik.handleChange}   id="floating_name" className="block mb-1 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
    <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Name</label>
  </div>

{/* alert Name*/}
 {registerFormik.errors.name && registerFormik.touched.name? <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {registerFormik.errors.name}
</div>:''
}



{/* Label Email */}
  <div className="relative z-0 w-full mb-5 group">
    <input type="email" name="email"  onBlur={registerFormik.handleBlur}     value={registerFormik.values.email } onChange={registerFormik.handleChange}   id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Email</label>
  </div>
 
 
{/* alert Email*/}
{registerFormik.errors.email && registerFormik.touched.email? <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {registerFormik.errors.email}
</div>:''
}




 {/* Label Password */}

  <div className="relative z-0 w-full mb-5 group">
    <input type="password" name="password"  onBlur={registerFormik.handleBlur}      value={registerFormik.values.password } onChange={registerFormik.handleChange}     id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Password</label>
  </div>


{/* alert Password*/}
{registerFormik.errors.password && registerFormik.touched.password? <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {registerFormik.errors.password}
</div>:''
}


{/* Label rePassword */}
  <div className="relative z-0 w-full mb-5 group">
    <input type="password" name="rePassword"  onBlur={registerFormik.handleBlur}     value={registerFormik.values.rePassword } onChange={registerFormik.handleChange} id="floating_repassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
    <label htmlFor="floating_repassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">RePassword</label>
  </div>


{/* alert repassword*/}
{registerFormik.errors.rePassword && registerFormik.touched.rePassword? <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {registerFormik.errors.rePassword}
</div>:''
}



{/* Label Phone */}
  <div className="relative z-0 w-full mb-5 group">
    <input type="tel" name="phone" onBlur={registerFormik.handleBlur}      id="floating_phone" value={registerFormik.values.phone } onChange={registerFormik.handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
    <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Phone</label>
  </div>
    

{/* alert phone*/}
{registerFormik.errors.phone && registerFormik.touched.phone? <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {registerFormik.errors.phone}
</div>:''
}

{isCallingApI ? <div className='w-auto flex justify-end'>
  <div className='bg-main p-2 rounded-md'>
  <ClipLoader className='text-main' size={20} />
  </div>

</div> 
: <button type="submit" className="text-white bg-main bg-opacity-70 hover:bg-main block ml-auto focus:ring-4 focus:outline-none focus:ring-main font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-main dark:hover:bg-main dark:focus:ring-main">Submit</button>}
 

 
</form>

  )
}
