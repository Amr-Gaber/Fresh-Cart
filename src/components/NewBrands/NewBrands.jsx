// import React, { useEffect, useState } from 'react'
// import styles from './NewBrands.module.css'
// import axios from 'axios';
// export default function NewBrands() {
//     let[count,setCount]=useState(0)
//     const[brands,setBrands]=useState( [] )

 
//     async function getBrands(){
//    try {
//     const {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
//     console.log(data);
//     setBrands(data.data)
//    } catch (error) {
 
//    }
//     }
//     useEffect(()=>{
//       getBrands()
//     })
//   return (
// <>
// <h2 className='mb-5 text-4xl text-main flex justify-center'>All Brands</h2>
       
 
// <div className='flex flex-wrap gap-y-5 py-3 '>
     
//      {brands.map(brand =><div className=' w-1/4 px-3 mb-2 border-r-2 rounded-sm font-medium hover:bg-main  transition-transform '>
//        <img src = {brand.image} className={styles.brandImage} alt="" />
//      <h4 className='text-2xl'>{brand.name}</h4>
//      </div>
//      )}
  


//      </div>
 



// {/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
  
//     <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt />

// </div> */}

// </>


// /* <div className="p-5">
   
// <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>

// </div> */











//     // <div className='py-20'>
//     //   <h2 className='mb-5 text-3xl'>Shop Popular Categories</h2>
       

//     // {categories.map(category =><div>
//     //   <img src = {category.image} className={styles.categoryImage} alt="" />
//     // <h4>{category.name}</h4>
//     // </div>
//     // )}
  


//     // </div>
//   )
// }





import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function NewBrands() {
  const [brands, setBrands] = useState([]);

  async function getBrands() {
    try {
      const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`);
      setBrands(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getBrands();
  }, []);

  
return (
  <>
    <h2 className="mb-5 text-4xl text-main flex justify-center">All Brands</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-3 ">
      {brands.map((brand) => (
        <div key={brand._id} className="border p-2 rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300 w-3/4 mx-auto md:w-72 ">
          <img src={brand.image} alt={brand.name} className="w-full h-40 object-cover rounded" />
          <h4 className="text-lg font-semibold mt-3 text-center">{brand.name}</h4>
        </div>
      ))}
    </div>
  </>
);
}
