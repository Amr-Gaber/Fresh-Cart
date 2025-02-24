
import { createContext, useContext, useEffect, useState } from "react";


export const WishListContext = createContext();





export default function WishListProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
  
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    return savedWishlist;
  });

  
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
  const toggleWishlist = (product) => {
    if (!product || !product.id) {
      console.error( product);
      return;
    }

    setWishlist((prevWishlist) => {
      const isProductInWishlist = prevWishlist.some((item) => item.id === product.id);

      if (isProductInWishlist) {
        return prevWishlist.filter((item) => item.id !== product.id);
      } else {
        return [...prevWishlist, product];
      }
    });
  };

  return (
    <WishListContext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </WishListContext.Provider>
  );
}


export const useWishlist = () => useContext(WishListContext);
