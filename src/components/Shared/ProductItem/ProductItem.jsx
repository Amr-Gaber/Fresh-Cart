import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../../../Context/wishlistContext";

export default function ProductItem(props) {
  const { wishlist, toggleWishlist } = useWishlist();
  const product = props.product; 
  const { imageCover, title, category, price, ratingsAverage, id } = product;

  
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  return (
    <div className="md:w-1/3 lg:w-1/4 xl:w-1/5 w-full px-3 mb-3">
      <div className="product">
        <Link to={`/productDetails/${id}/${category._id}`}>
          <img src={imageCover} className="mb-2" alt={title} />
          <span className="text-main">{category.name}</span>
          <h2 className="mb-4 font-medium">{title.split(" ").splice(0, 2).join(" ")}</h2>
          <div className="flex justify-between mb-4">
            <p>{price} EGP</p>
            <p>
              <i className="fa fa-star rating-color"></i>
              {ratingsAverage}
            </p>
          </div>
        </Link>

        <button onClick={() => props.addProductToCart(id)} className="btn bg-main w-full p-2 text-center text-white rounded-md">
          Add to Cart
        </button>

        
        <button onClick={() => toggleWishlist(product)} className="w-full p-2 text-center">
          {isInWishlist ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}
