import { Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const CarouselMod = () => {

return(
    <div className="bg-[#05010e] mb-28 py-10 flex items-center justify-center flex-col">

   <h2 className="text-slate-300 text-3xl md:text-6xl py-6 font-Chivo">Comanies we worked for</h2>


  <Carousel responsive={responsive} 
  className="w-full flex-1"
>
  <div className="text-[#757579] w-full bg-transparent h-32 md:m-7 rounded-xl flex items-center justify-center   transition-opacity cursor-pointer   hover:backdrop-blur-lg hover:brightness-200">
    <img src="ABG.png" alt="img.png" className="w-28 object-contain"/>
  </div>
  <div className="text-[#757579] w-full bg-transparent h-32 md:m-7 rounded-xl flex items-center justify-center  transition-opacity cursor-pointer    hover:backdrop-blur-lg hover:brightness-200">
    <img src="Allen.png" alt="img.png" className="w-28 object-contain"/>
  </div>
  <div className="text-[#757579] w-full bg-transparent h-32 md:m-7 rounded-xl flex items-center justify-center   transition-opacity cursor-pointer   hover:backdrop-blur-lg hover:brightness-200">
    <img src="Bosch.png" alt="img.png" className="w-28 object-contain"/>
  </div>
  <div className="text-[#757579] w-full bg-transparent h-32 md:m-7 rounded-xl flex items-center justify-center transition-opacity cursor-pointer   hover:backdrop-blur-lg hover:brightness-200">
    <img src="Linfox.png" alt="img.png" className="w-28 object-contain"/>
  </div>
  <div className="text-[#757579] w-full bg-transparent h-32 md:m-7 rounded-xl flex items-center justify-center  transition-opacity cursor-pointer hover:backdrop-blur-lg hover:brightness-200">
    <img src="Mirafra.png" alt="img.png" className="w-28 object-contain"/>
  </div>
  <div className="text-[#757579] w-full bg-transparent h-32 md:m-7 rounded-xl flex items-center justify-center  transition-opacity cursor-pointer  hover:backdrop-blur-lg hover:brightness-200">
    <img src="Sanskruti.png" alt="img.png" className="w-28 object-contain"/>
  </div>
 
</Carousel>

</div>)

}
export default CarouselMod;

