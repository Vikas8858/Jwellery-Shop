import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
   const [searchfocus, setSearchfocus] = useState(false);
 
   const[input,setInput]=useState("");

   

  return (
    <footer className="border-t bg-neutral-100">
      <div className="grid grid-cols-1 gap-8 px-6 py-10 mx-auto max-w-7xl md:grid-cols-3">
        {/* Quick Links */}
      
        <div>
          <h3 className="mb-4 text-2xl font-bold text-gray-800">Quick links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
             <li><a  className='text-base text-gray-900 hover:underline'>Customer Reviews</a></li>
            <li><a  className='text-base text-gray-900 hover:underline'>Our Blogs</a></li>
            <li><a  className='text-base text-gray-900 hover:underline'>Store Locator</a></li>
            <li><a  className='text-base text-gray-900 hover:underline'>About Us</a></li>
            <li><a  className='text-base text-gray-900 hover:underline'>Join Us</a></li>
            <li><a  className='text-base text-gray-900 hover:underline'>GIVA Gift Cards</a></li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="mb-4 text-2xl font-bold text-gray-800">Info</h3>
          <ul className="space-y-2 text-sm text-gray-600">
             <li><a  className='text-base text-gray-900 hover:underline'>Shipping & Returns</a></li>
            <li><a  className='text-base text-gray-900 hover:underline'>Privacy Policy</a></li>
            <li><a  className='text-base text-gray-900 hover:underline '>International Shipping</a></li>
            <li><a  className='text-base text-gray-900 hover:underline'>FAQs & Support</a></li>
            <li><a  className='text-base text-gray-900 hover:underline'>Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="mb-4 text-2xl font-bold text-gray-800">Contact us</h3>
          <p className="mb-2 text-base text-gray-900">
            BIS : HMC/C - 62900313216
          </p>
          <p className="mb-2 text-base text-gray-900 ">
            For any suggestions, queries or complaints: please contact us:
          </p>
          <p className="mb-2 text-base text-gray-900">
            Indiejewel Fashions Pvt Ltd 
           
           
          </p>
          <p className="mb-2 text-base text-gray-900">
             Third Floor, Magnum Vista, Bangalore 560062 <br />
          </p>
          <p className="mb-2 text-base text-gray-900">
             -care@giva.co
          </p>
          
          <p className="mb-2 text-base text-gray-900"> -9228837724(10Am to 6:30PM)</p>
  
</div>
        {/* Newsletter Subscription */}


               
                <div className="mb-4 md:mb-0">
                                  <p className="mb-2 text-xl font-semibold text-gray-950">
                                    Subscribe for exclusive offers and updates!
                                  </p>

                                  <div
                                        className={`flex items-center justify-between w-full h-16 px-0 border-2 rounded-none ${
                                          searchfocus ? "" : "hover:border-gray-400"
                                        }  rounded-lg  ${
                                          searchfocus ? "border-gray-700" : "border-gray-300"
                                        }`}
                                      >
                                        <input
                                          type="text"
                                          value={input}
                                          onChange={(e)=>{setInput(e.target.value)}}

                                          onFocus={() => setSearchfocus(true)}
                                          onBlur={() => setSearchfocus(false)}
                                          placeholder="Enter your email"
                                          className="w-11/12 h-full px-3 py-2 text-xl rounded-md outline-none placeholder:text-xl bg-neutral-100"
                                        />
                                      <ArrowRight color={"gray"}/>     
                                  </div>

              </div>


          

               
                                  
                    <div className="px-6 py-6 mx-auto max-w-7xl">
                        <div className="flex space-x-3">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                            alt="Google Play"
                            className="h-10"
                            href="https://play.google.com/store/games?hl=en_IN&pli=1"
                          />
                          <img
                            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                            alt="App Store"
                            className="h-10"
                            href="https://www.apple.com/in/app-store/"
                          />
                        </div>
                    </div> 

              {/* social icons */}

           <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          
            <div className="flex mt-4 space-x-6 text-gray-600 ju px-14">
            <FaFacebookF className="cursor-pointer hover:text-blue-600 size-8" />
            <FaInstagram className="cursor-pointer hover:text-pink-500 size-8" />
            <FaYoutube className="cursor-pointer hover:text-red-500 size-8" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-700 size-8" />
          </div>
         

        </div>
             
          
       

     

      </div>

    

       {/* Bottom */}
      <div className="flex justify-center px-6 py-4 mx-auto text-base text-center text-gray-900 border-t max-w-7xl">
        © 2025 GIVA Jewellery | Channel Partners: AJIO, Myntra, Nykaa, Shoppers Stop
      </div>
  

    </footer>
);
}

