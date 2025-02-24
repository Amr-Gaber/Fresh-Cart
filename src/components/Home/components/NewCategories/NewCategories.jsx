
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function NewCategories() {
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    try {
      const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
      setCategories(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <h2 className="mb-5 text-4xl  text-main flex justify-center">All Categories</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-3">
        {categories.map((category) => (
          <div key={category._id} className="border p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition duration-200">
            <img src={category.image} alt={category.name} className="w-full h-40 object-cover rounded" />
            <h4 className="text-lg font-semibold mt-3 text-center">{category.name}</h4>
          </div>
        ))}
      </div>
    </>
  );
}
