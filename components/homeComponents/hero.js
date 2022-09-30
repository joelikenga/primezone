import Image from "next/image";
import {motion} from "framer-motion";
import { FcInTransit,FcMoneyTransfer, FcSalesPerformance,FcHeadset} from "react-icons/fc";

const Hero = () => {

    const appSvg = {

    }

    const heroScrollLeftVariants = {
        start:{},
        stop:{
            x:-3000,
            transition : {
                duration:70,
                repeat: Infinity,
                repeatType: "mirror",
                type:"tween"
            }
        }
    }
    const heroScrollRightVariants = {
        start:{x:-3000},
        stop:{
            x:0,
            transition : {
                duration:70,
                repeat: Infinity,
                repeatType: "mirror",
                type:"tween"
            }
        }
    }

    const heroImages =  [
        {Image: "/passport-3.jpg", width: "220", height:"300"},
        {Image: "/passport-5.jpg", width: "220", height:"300"},
        {Image: "/passport-4.jpg", width: "220", height:"300"},
        {Image: "/passport-2.jpg", width: "220", height:"300"},
        {Image: "/passport-1.jpg", width: "220", height:"300"},
        {Image: "/passport-4.jpg", width: "220", height:"300"},
        {Image: "/passport-3.jpg", width: "220", height:"300"},
        {Image: "/passport-3.jpg", width: "220", height:"300"},
        {Image: "/passport-5.jpg", width: "220", height:"300"},
        {Image: "/passport-4.jpg", width: "220", height:"300"},
        {Image: "/passport-2.jpg", width: "220", height:"300"},
        {Image: "/passport-1.jpg", width: "220", height:"300"},
        {Image: "/passport-4.jpg", width: "220", height:"300"},
        {Image: "/passport-3.jpg", width: "220", height:"300"},
        {Image: "/passport-3.jpg", width: "220", height:"300"},
        {Image: "/passport-5.jpg", width: "220", height:"300"},
        {Image: "/passport-4.jpg", width: "220", height:"300"},
        {Image: "/passport-2.jpg", width: "220", height:"300"},
        {Image: "/passport-1.jpg", width: "220", height:"300"},
        {Image: "/passport-4.jpg", width: "220", height:"300"},
        {Image: "/passport-3.jpg", width: "220", height:"300"},
    ]
    return(
        <div className="text-prime-font bg-primeDark  h-[58rem] overflow-hidden">
            < div className="grid m-auto  grid-rows-4 gap-2  relative">

                <div className="absolute z-20 bg-[rgba(0,0,0,0.7)] w-screen h-full ">
                            <div className="relative">

                                    <div className="absolute text-center top-40 sm:top-72 w-screen px-10">
                                        <div className="sm:mx-20">
                                            <motion.h1 
                                                initial={{opacity:0}}
                                                animate={{opacity:1,}}
                                                transition={{delay:1, duration:0.5}}
                                                className="text-4xl  md:text-5xl md:m-0 font-medium text-white"
                                                >Primezone simplifies shopping to the easiest means of getting what you want...</motion.h1>
                                        </div>
                                            <motion.div 
                                                initial={{opacity:0}}
                                                animate={{opacity:1,}}
                                                transition={{delay:1, duration:1}}
                                                className= " flex-row text-white font-semibold text-xl sm:flex sm:justify-between  px-10 text-center container mx-auto mt-20  sm:mt-60"
                                                >
                                                    <div className=" justify-center flex my-8">
                                                        <FcMoneyTransfer  className="text-5xl "/>
                                                         Secure Payment
                                                         </div>

                                                         <div>
                                                        <div className="flex justify-center my-8 ">
                                                                 <FcInTransit  className=" text-5xl mx-1 "/>
                                                                 Free Shipping
                                                        </div>

                                                        </div>

                                                        <div className=" justify-center flex my-8">
                                                                <FcHeadset  className="text-5xl"/> Online Support 24/7
                                                        </div> 
                                            </motion.div>
                                    </div>

                            </div>
                </div>

                {/* <div className="absolute z-40 fixed bg-primeRed h-[100%] w-2/5 h-full">
                        hfhfh
                </div> */}

                {/* sliders */}
<div className="brightness-50">

                            <div   className="flex flex-nowrap gap-5  overflow-hidden">
                                    {heroImages.map((images,index) => {
                                        return(
                                            <motion.div  
                                                variants={heroScrollLeftVariants}
                                                initial="start"
                                                animate="stop"
                                                 key={index } 
                                                 className=" overflow-hidden flex-none shadow ">

                                                    <Image 
                                                        src={images.Image} 
                                                        className="  rounded-lg object-cover"
                                                         width={images.width } 
                                                         height={images.height}
                                                     />

                                             </motion.div>
                                        )                              
                                    })}
                            </div>

                            <div   className="flex flex-nowrap gap-5  overflow-hidden">
                                    {heroImages.map((images,index) => {
                                        return(
                                            <motion.div  
                                                variants={heroScrollRightVariants}
                                                initial="start"
                                                animate="stop"
                                                 key={index } 
                                                 className=" flex-none shadow ">

                                                    <Image 
                                                        src={images.Image} 
                                                        className=" rounded-lg object-cover"
                                                         width={images.width } 
                                                         height={images.height}
                                                     />

                                             </motion.div>
                                        )                              
                                    })}
                            </div>

                            <div   className="flex flex-nowrap gap-5  overflow-hidden">
                                    {heroImages.map((images,index) => {
                                        return(
                                            <motion.div  
                                                variants={heroScrollLeftVariants}
                                                initial="start"
                                                animate="stop"
                                                 key={index } 
                                                 className=" flex-none shadow ">

                                                    <Image 
                                                        src={images.Image} 
                                                        className=" rounded-lg object-cover"
                                                         width={images.width } 
                                                         height={images.height}
                                                     />

                                             </motion.div>
                                        )                              
                                    })}
                            </div>
                            </div>
                            {/* <div   className="flex flex-nowrap gap-5  overflow-hidden">
                                    {heroImages.map((images,index) => {
                                        return(
                                            <motion.div  
                                                variants={heroScrollRightVariants}
                                                initial="start"
                                                animate="stop"
                                                 key={index } 
                                                 className=" flex-none shadow ">

                                                    <Image 
                                                        src={images.Image} 
                                                        className=" rounded-lg object-cover"
                                                         width={images.width } 
                                                         height={images.height}
                                                     />

                                             </motion.div>
                                        )                              
                                    })}
                            </div> */}



                    {/*  */}
                 
            </div >
  </div>
    )
}
export default Hero;