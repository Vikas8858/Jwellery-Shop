import {
  ArrowBigRight,
  ArrowDownRightIcon,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Heart,
  MapPin,
  Search,
  ShoppingCart,
  Store,
  User,
} from "lucide-react";
import { useState } from "react";
const Navbar = () => {
  const [searchfocus, setSearchfocus] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex bg-white flex-col w-[100wh] shadow-xl">
      {/* Fist section */}
                      <div className="flex justify-between">
                      <div className="flex flex-col w-full gap-4 p-4 lg:flex-row lg:items-center md:ps-8 sm:ps-3 lg:ps-20 xl:ps-32">
                        <div className="text-5xl font-semibold">GIVA</div>

                        <div className="flex items-center h-12 gap-1 p-2 border-2 border-pink-400 text-nowrap md:h-16 md:border-2 md:border-pink-200 rounded-xl min-w-fit">
                          <MapPin color="#EB949C" />
                          <div className="flex flex-col items-center px-2">
                            <h1 className="hidden font-bold sm:block">Where to Deliver?</h1>
                            <div className="flex ">
                              <p className="hidden sm:block">Update Delivery Pincode</p>
                              <ChevronDown />
                            </div>
                          </div>
                        </div>
                          {/* Search */}
                        <div
                          className={`md:flex hidden items-center justify-between w-full h-16 px-4 border-2 ${
                            searchfocus ? "" : "hover:border-gray-400"
                          }  rounded-xl  ${
                            searchfocus ? "border-gray-700" : "border-gray-300"
                          }`}
                        >
                          <input
                            type="text"
                            onFocus={() => setSearchfocus(true)}
                            onBlur={() => setSearchfocus(false)}
                            placeholder="Search Gifts For Her"
                            className="w-11/12 h-full px-3 py-2 text-xl rounded-md outline-none placeholder:text-xl "
                          />
                          <Search color="gray" />
                        </div>
                          </div>

                          
                        <div className="flex items-start justify-between text-lg lg:items-center ps-4 lg:ps-9 pe-8 lg:pe-20">
                          <div className="flex-col items-center justify-center hidden p-2 sm:flex">
                            <Store className="size-6 md:size-7 lg:size-8 " />
                            <span>Stores</span>
                          </div>

                          <div className="flex flex-col items-center justify-center p-2">
                            <User className="size-6 md:size-7 lg:size-8 " />
                            <span>Account</span>
                          </div>

                          <div className="flex flex-col items-center justify-center p-2">
                            <Heart className="size-6 md:size-7 lg:size-8 " />
                            <span>WishList</span>
                          </div>

                          <div className="flex-col items-center justify-center hidden p-2 sm:flex">
                            <ShoppingCart className="size-6 md:size-7 lg:size-8 "/>
                            <span>Cart</span>
                          </div>
                        </div>
                      </div>

                      
        {/* Navbar 2nd Sections */}

        <div className="flex-wrap items-center justify-center hidden w-full gap-10 p-3 text-lg font-medium text-gray-600 bg-white lg:flex text-nowrap justify-items-center xl:ps-32 xl:pe-20">
          <div className="relative group ">
                <div className="flex items-center gap-1 p-1 m-1 justify-evenly">
                  <span className="m-1 text-xl font-normal text-slate-900">
                    Shop by Category
                  </span>
                  <ChevronDown />
                </div>

                  {/* Shop By Category */}

                  <div className="absolute hidden px-4 py-2 mt-0 text-xl font-semibold bg-white border border-gray-200 rounded-sm text-nowrap text-slate-500 group-hover:block">
                      <ul>
                        <li className="px-4 py-2 hover:bg-pink-100">All</li> 
                        <li className="flex justify-between px-4 py-4 hover:bg-pink-100">Rings <ChevronRight/> </li>
                        <li className="flex justify-between px-4 py-4 hover:bg-pink-100">Necklaces & Pendants<ChevronRight/></li>
                        <li className="flex justify-between px-4 py-4 hover:bg-pink-100">Bracelets <ChevronRight/></li>
                        <li className="flex justify-between px-4 py-4 hover:bg-pink-100">Earrings <ChevronRight/></li>
                        <li className="flex justify-between px-4 py-4 hover:bg-pink-100">Anklets <ChevronRight/></li>
                        <li className="flex justify-between px-4 py-4 hover:bg-pink-100">Other Categories <ChevronRight/></li>
                      </ul>
                  </div>


          </div>

          <div className="flex items-center justify-center ">
            <span className="text-xl font-normal text-slate-900">
              Gold With Lab Diamonds
            </span>
            {/* <ChevronDown /> */}
          </div>

          <div className="flex items-center justify-center ">
            <span className="text-xl font-normal text-slate-900">
              GIVA GIFT Card
            </span>
            {/* <ChevronDown /> */}
          </div>
          

         <div className="relative group rounded-xl ">
            <div className="flex items-center gap-1 p-1 m-1 justify-evenly">
              <span className="m-1 text-xl font-normal text-slate-900">
                Gift Store
              </span>
              <ChevronDown />
            </div>
            <div className="absolute hidden py-2 mt-0 text-xl font-semibold bg-white border border-gray-200 rounded-sm text-nowrap text-slate-500 group-hover:block">
                <ul>
                  <li className="flex justify-between px-4 py-4 hover:bg-pink-100">Giva Gift Store </li>
                  <li className="flex justify-between px-4 py-4 hover:bg-pink-100">Shop By Occassion<ChevronRight /></li>
                  <li className="flex justify-between px-4 py-4 hover:bg-pink-100">Shop By Theme <ChevronRight/></li>
                  <li className="flex justify-between px-4 py-4 hover:bg-pink-100">Shop By Recipient <ChevronRight/></li>
                  <li className="flex justify-between px-4 py-4 hover:bg-pink-100">Shop By Price <ChevronRight/></li>
                
                </ul>
             </div>
          </div>


          
         <div className="relative group rounded-xl">
            <div className="flex items-center gap-1 p-1 m-1 justify-evenly">
              <span className="m-1 text-xl font-normal text-slate-900">
                Men's Jewellery
              </span>
              <ChevronDown />
            </div>

             <div className="absolute hidden w-full py-2 mt-0 text-xl font-semibold bg-white border border-gray-200 rounded-sm text-nowrap text-slate-500 group-hover:block">
                  <ul>
                    <li className="flex justify-between px-4 py-4 hover:bg-pink-100">All </li>
                    <li className="flex justify-between px-4 py-4 hover:bg-pink-100">Rings</li>
                    <li className="flex justify-between px-4 py-4 hover:bg-pink-100">Pendants</li>
                    <li className="flex justify-between px-4 py-4 hover:bg-pink-100">Bracelets</li>
                    <li className="flex justify-between px-4 py-4 hover:bg-pink-100">Earrings</li>
                    <li className="flex justify-between px-4 py-4 hover:bg-pink-100">Chains</li>
                    <li className="flex justify-between px-4 py-4 hover:bg-pink-100">Sets </li>
                  </ul>   
              </div>

          </div>



          <div className="relative group rounded-xl ">
            <div className="flex items-center gap-1 p-1 m-1 justify-evenly">
              <span className="m-1 text-xl font-normal text-slate-900">
                Latest Collections
              </span>
              <ChevronDown />
            </div>
              <div className="absolute hidden py-2 mt-0 text-xl font-semibold bg-white border border-gray-200 rounded-sm text-nowrap text-slate-500 group-hover:block">
                    <ul>
                      <li className="flex justify-between px-4 py-4 hover:bg-pink-100">GemStone Collections </li>
                      <li className="flex justify-between px-4 py-4 hover:bg-pink-100">Piercing Collections </li>
                      <li className="flex justify-between px-4 py-4 hover:bg-pink-100">Diva Collections </li>
                      <li className="flex justify-between px-4 py-4 hover:bg-pink-100">Valentine's Collections</li>
                      <li className="flex justify-between px-4 py-4 hover:bg-pink-100">Sky High </li>
                      <li className="flex justify-between px-4 py-4 hover:bg-pink-100">Wings of Wonder </li>
                      <li className="flex justify-between px-4 py-4 hover:bg-pink-100">Cherry Pop Collections </li>
                      <li className="flex justify-between px-4 py-4 hover:bg-pink-100">Love in Paris </li>
                      <li className="flex justify-between px-4 py-4 hover:bg-pink-100">Convertible Collections </li>
                      <li className="flex justify-between px-4 py-4 hover:bg-pink-100">Just Arrived </li>
                    </ul>
              </div>

            </div>
          





                    <div className="relative group rounded-xl ">
                        <div className="flex items-center gap-1 p-1 m-1 justify-evenly">
                          <span className="m-1 text-xl font-normal text-slate-900">
                            More at GIVA
                          </span>
                          <ChevronDown />
                        </div>

                        <div className="absolute hidden py-2 mt-0 text-xl font-semibold bg-white border border-gray-200 rounded-sm text-nowrap text-slate-500 group-hover:block">
                              <ul>
                                <li className="flex justify-between px-4 py-4 pe-2 hover:bg-pink-100">Media Mentions</li>
                                <li className="flex justify-between px-4 py-4 hover:bg-pink-100">Corporate Partnerships </li>
                                <li className="flex justify-start px-4 py-4 hover:bg-pink-100">Jwellery Care</li>
                                <li className="flex justify-between px-4 py-4 hover:bg-pink-100">GIVA Care </li>
                                <li className="flex justify-between px-4 py-4 hover:bg-pink-100">GIVA Blogs </li>
                                <li className="flex justify-between px-4 py-4 hover:bg-pink-100">Supports & FAQS </li>
                                
                              </ul>
                        </div>
                  </div>
          </div>



      

    </nav>
  );
};

export default Navbar;

