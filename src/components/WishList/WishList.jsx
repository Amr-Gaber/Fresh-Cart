
import { useWishlist } from "../../Context/wishlistContext";

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <div>
      <h2 className="text-2xl font-bold">My wish List</h2>

      {wishlist.length === 0 ? (
        <p className="text-gray-500 mt-4"> My wish List is Empty</p>
      ) : (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 py-5">
          {wishlist.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md   hover:shadow-lg transition duration-300 w-3/4 mx-auto md:w-80 ">
              <img src={product.imageCover}  alt={product.title} className="w-full  object-cover rounded   " />
              <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
              <p className="text-main">{product.price} EGP</p>

              <button onClick={() => toggleWishlist(product)} className="mt-2 text-red-500">
                Remove<i _ngcontent-kbp-c24 className="fa fa-trash p-4" />

              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
