
import { Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ image, id, title, sellingPrice, mrp, rating, reviewCount, wishlist }) => {
  return (
    <Link to={`/products/${id}`}>
    <div className="overflow-hidden rounded-lg group">
      {/* Image section */}
      <div className="relative w-full overflow-hidden ">
        {/* Wishlist */}
        {
          <div className="absolute z-20 p-2 bg-white rounded-full right-2 top-2">
            <Heart stroke="red" strokeWidth={1} size={20} fill={wishlist ? "red" : "none"} />
          </div>
        }
        {/* Image */}
        <img className="border group-hover:scale-125 " src={image} alt={title} />
        {/* Rating */}
        <div className="flex bg-[#ececec] px-3 left-0 py-1 rounded-tr-2xl items-center gap-1 font-normal absolute text-sm font-sans bottom-0">{rating}<Star size={14} fill="#FFAF24" stroke="none" /> | {reviewCount}</div>
      </div>
      {/* price */}
      <div className="flex gap-2 px-2 py-3 ">
        <span className="text-xl font-bold">₹{sellingPrice}</span>
        <span className="font-normal text-gray-500 line-through text-md">₹{mrp}&nbsp;</span>
      </div>
      <span className="font-sans text-lg font-normal text-gray-500 hover:underline">{title}</span>
      <button className=" bg-gradient-to-r hover:from-[#fc81a6] hover:text-white hover:via-[#f884a7] hover:to-[#fe85a9]  from-[#fea7b3] via-[#fdc0c7] to-white p-4  mt-5 text-black font-normal text-lg w-full h-10 rounded-lg inline-flex items-center justify-center">Add to Cart</button>
    </div>
    </Link>
  );
};

export default ProductCard;

