
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import BannerFooter from "./BannerFooter";
// import BannerFooter from "./BannerFooter.jsx";

const Banner = () => {
  const banners = [
    {
      image:
        "https://www.giva.co/cdn/shop/files/collection_banner-web_3_-min_e8730ea0-35cd-43dc-9046-aa8b4a57be49.jpg?v=1755496566&width=1780",
      title: "",
      description: "",
    },
    {
      image:
        "https://www.giva.co/cdn/shop/files/Men_s_Jewellery_collection_Banner-min_c7e8bab6-1a6c-44b9-9c73-1bf8f50c8bbb.jpg?v=1755493013&width=1780",
      title: "",
      description: "",
    },
    {
      image:
        "https://www.giva.co/cdn/shop/files/Pendants_collection_banner-min.jpg?v=1755493624&width=1780",
      title: "",
      description: "",
    },
    {
      image:
        "https://www.giva.co/cdn/shop/files/106_rakhi_gold_jewellery__offer_collection_banner_1_-min.jpg?v=1755493013&width=1780",
      title: "",
      description: "",
    },
    {
      image:
        "https://www.giva.co/cdn/shop/files/Personalised_collection_Banner.jpg?v=1755493241&width=1780",
      title: "",
      description: "",
    },
    {
      image:
        "https://www.giva.co/cdn/shop/files/All_Jewellery_collection_banner-min.jpg?v=1755493624&width=1780",
      title: "",
      description: "",
    },
    {
      image:
        "https://giftbig.s3.amazonaws.com/microsite/homebanner/slidebanner/slidebanner_4299_filename.jpg",
      title: "",
      description: "",
    },
  ];

  return (

      <div className="w-full    2xl:h-[700px] sm:h-[361px] md:h-[450px] lg:h-[550px] xl:h-[650px] overflow-hidden relative h-auto">
      
        {banners && (
          <Carousel
            dynamicHeight={false}
            emulateTouch={true}
            interval={3000}
            autoPlay={true}
            infiniteLoop={true}
            stopOnHover={false}
            showThumbs={false}
            showStatus={false}
            labels={{
              leftArrow: "previous slide / item",
              rightArrow: "next slide / item",
              item: "slide item",
            }}
          >
            {banners.map((banner, index) => (
              <div key={index} className="relative">
                <img
                  src={banner.image}
                  alt="Fashion Sale"
                  className="w-full  sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px] object-cover h-auto "
                />

                {/* Gradient overlay */}
                <div
                  className="absolute bottom-0 left-0 z-10 w-full h-full"
                  style={{
                    background:
                      "radial-gradient(ellipse at bottom left, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, transparent 70%)",
                  }}
                ></div>

                {/* Banner text */}
                <div className="absolute left-4 sm:left-6 md:left-10 bottom-4 sm:bottom-8 z-20 text-white max-w-[90%] sm:max-w-[70%] md:max-w-[60%]">
                  <h2 className="mb-2 text-lg font-bold sm:text-2xl md:text-4xl lg:text-5xl">
                    {banner.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                    {banner.description}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        )}

        <BannerFooter/>
      </div>    
);
};

export default Banner;
