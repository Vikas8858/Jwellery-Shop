import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { data as DummyData } from "./DummyData";
import {
  CalendarSync,
  ChevronLeft,
  ChevronRight,
  Forward,
  Gem,
  MessageSquare,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";
import { Heart, Star } from "lucide-react";

const ProductPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const product = DummyData.find((item) => item.id === Number(id));
    setProducts(product);
  }, [id]);

  return (
    <div className="flex flex-col items-center w-full ">
      <Navbar />

      {/* Floating message box */}
      <div className="fixed bottom-5 right-5  z-20 p-5 bg-[#E9718B] rounded-full">
        <MessageSquare stroke="white" size={24} />
      </div>

      {products && (
        <div className="flex flex-col justify-center w-full gap-10 p-5 mt-12 lg:flex-row max-w-7xl">
          {/* Left Section - Images */}
          <div className="flex flex-col w-full gap-8 p-4 overflow-hidden shadow-xl rounded-2xl lg:w-1/2">
            <div className="relative w-full overflow-hidden border rounded-2xl">
              <img
                className="object-cover w-full border rounded-2xl"
                src={products.image}
                alt={products.title}
              />
              <div className="absolute flex items-center gap-1 px-3 py-2 font-sans text-sm font-semibold bg-white rounded-full left-2 bottom-2 sm:text-md">
                <Star size={18} fill="#FFAF24" stroke="none" />
                &nbsp;{products.rating} | {products.reviewCount}
              </div>
            </div>

            {/* Thumbnail Carousel */}
            <div className="flex items-center justify-between gap-2 px-2 overflow-x-auto sm:gap-3">
              <ChevronLeft className="p-1 rounded-full shadow-lg shrink-0" size={28} />
              {[...Array(4)].map((_, idx) => (
                <img
                  key={idx}
                  className="object-cover w-20 border-2 sm:w-24 rounded-xl aspect-square shrink-0"
                  src={products.image}
                  alt=""
                />
              ))}
              <ChevronRight className="p-1 rounded-full shadow-lg shrink-0" size={28} />
            </div>
          </div>

          {/* Right Section - Details */}
          <div className="relative flex flex-col justify-between w-full p-4 pt-6 lg:w-1/2">
            <div>
              {/* Price */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-3xl sm:text-5xl">₹{products.mrp}</span>
                <span className="text-lg text-gray-500 line-through sm:text-2xl">
                  ₹{products.sellingPrice}
                </span>

                <div className="absolute flex gap-4 right-6 top-6">
                  <Heart size={28} strokeWidth={1} />
                  <Forward size={28} strokeWidth={1} />
                </div>
              </div>
              <p className="text-sm text-gray-600 sm:text-md">MRP incl. of all taxes</p>

              {/* Title */}
              <h1 className="mt-6 text-xl text-gray-600 sm:text-2xl">{products.title}</h1>
              <h1 className="mt-6 text-lg sm:text-2xl">Made With Pure 925 Silver</h1>

              {/* Choose Finish */}
              <div className="flex flex-col mt-6">
                <h1 className="text-lg sm:text-2xl">Choose your finish</h1>
                <div className="flex gap-4 p-2 mt-3 sm:gap-6 h-36 sm:h-44">
                  <div className="flex flex-col items-center h-full p-3 text-sm font-semibold shadow rounded-2xl">
                    <img src={products.image} alt="" className="h-[75%] object-cover aspect-square" />
                    <p>Silver</p>
                  </div>
                  <div className="flex flex-col items-center h-full p-3 text-sm font-semibold shadow rounded-2xl">
                    <img src={products.image} alt="" className="h-[75%] object-cover aspect-square" />
                    <p>Rose Gold</p>
                  </div>
                </div>
              </div>

              {/* Delivery */}
              <h1 className="pt-8 pb-4 text-lg text-gray-700 sm:text-2xl">
                Estimated Delivery Time
              </h1>

              {/* Pincode */}
              <div className="flex flex-col sm:flex-row w-full mb-4 border-2 border-[#fbbed2] rounded-xl overflow-hidden">
                <input
                  type="text"
                  placeholder="Enter 6 digit pincode"
                  className="flex-1 h-12 px-4 text-base outline-none sm:text-lg"
                />
                <button className="px-6 sm:px-10 py-3 text-base sm:text-lg text-black bg-gradient-to-r from-[#ed92a6] via-[#f1afbd] to-[#fddfe6] hover:bg-pink-600">
                  Check
                </button>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-4 text-sm text-gray-600 sm:text-lg">
                <li className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <CalendarSync size={22} color="purple" strokeWidth={1} /> Easy 30 Day Return
                  </div>
                  <div className="flex items-center gap-2">
                    <Gem size={22} color="purple" strokeWidth={1} /> 6-Month Warranty
                  </div>
                </li>
                <li className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={22} color="purple" strokeWidth={1} /> Lifetime Plating
                  </div>
                  <div className="flex items-center gap-2">
                    <RefreshCcw size={22} color="purple" strokeWidth={1} /> Fine 925 Silver
                  </div>
                </li>
              </ul>
            </div>

            {/* Gift */}
            <div className="flex items-center gap-2 mt-6">
              <input type="checkbox" className="size-4" />
              <h1 className="text-base sm:text-lg">
                Is this a <span className="font-semibold text-pink-400">Gift?</span> 🎁 Wrap it for just ₹50
              </h1>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 mt-6 sm:flex-row">
              <button className="flex-1 py-3 text-[#E9718B] text-lg sm:text-2xl transition border-2 sm:border-4 border-[#E9718B] bg-white rounded-xl hover:shadow-lg">
                Buy Now
              </button>
              <button className="flex-1 py-3 text-white text-lg sm:text-2xl transition bg-[#E9718B] rounded-xl hover:shadow-lg">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
