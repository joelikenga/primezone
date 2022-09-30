import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faShoppingCart, faUserCircle, faBarsStaggered, faBasketShopping, faGripHorizontal, faEquals, faTimes} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";
import { useState } from "react";


const HomeNav = () => {

    const [clickApp, SetclickApp] = useState(false);
    const [clickNav, SetclickNav] = useState(false);


    const navigation =  [
        {name: "Home", href:"/", title: "Home"},
        {name:"Categories", href:"/categories", title: "Categories"},
        {name:"About", href:"/about", title: "About"},
        {name:"Classes", href:"/classes", title: "Classes"},
        {name:"Contacts", href:"/contact", title: "Contact"}
    ]

        const appMenuVariant = {
            open:{
                width:"100vw", 
                height:"100vh", 
                borderRadius:"0px",
                 bottom:"0px",
                 marginLeft:"0px",
                 backgroundColor:"#141516"
            },

            closed:{
                width:"0vw", 
                height:"0vh", 
                borderRadius:"0px",
                 bottom:"0px",
                 marginLeft:"0px",

            }
        }

        const navMenuVariant = {

            open:{
                opacity:1,
                backgroundColor:"#141516"
            },

            closed:{
                borderRadius:"0px",
                 bottom:"0px",
                 x:-720,
                 opacity:0

            }
        }

    return ( 
        <motion.div   initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.3, duration:0.5}}>

            {/* navbar */}
            <motion.div
                    variants={navMenuVariant}
                    transition={{duration:0.5}}
                    animate={clickNav ? "open" : "closed"}
                    className=" font-primeFont  fixed z-50 w-[40vw] h-full "
                    >
                        <motion.div
                              className=" flex justify-center mt-14">
                                    <div 
                                        onClick={()=>{SetclickNav(!clickNav)}}
                                        className="cursor-pointer hidden sm:block bg-black text-gray-200 px-4 py-3 font-black text-xl rounded-full text-center">
                                                <FontAwesomeIcon className=" text-primeRed text-2xl" icon={faTimes} />
                                                <span className="ml-3">Close</span>
                                    </div>
                         </motion.div>
                         {/* nav contents */}
                         <div > 
                                {navigation.map((navs,index) => (
                                    <div key={index} className=" flex justify-center my-10 text-2xl font-bold text-white">
                                            <p>{navs.name}</p>
                                    </div>
                                ))}
                         </div>
            </motion.div>

        <motion.nav 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.3, duration:0.5}}
        className="flex sm:justify-between justify-center sm:px-64  md:px-32   w-screen  sm:mt-14 mt-8  font-primeFont absolute sm:fixed z-40 ">

                {/* navigations */}

               
                <div onClick={()=>{SetclickNav(!clickNav)}} className="cursor-pointer hidden sm:block bg-black text-gray-200 px-4 py-3 font-black text-xl rounded-full text-center">
                    <FontAwesomeIcon className=" text-primeRed" icon={faBarsStaggered} />
                    <span className="ml-4">Menu</span>
                    </div>

                        

                            {/* logo */}
                     <div className="cursor-pointer text-primeRed  font-bold mx-4 text-3xl">
                          Primezone
                       </div>

                {/* left icons */}
                <div className="hidden sm:block text-xl  bg-black text-gray-200 py-3 rounded-full">
                 <FontAwesomeIcon className={"cursor-pointer px-5 text-2xl border-r-2 border-primeRed"} icon={faShoppingCart} />
                 <FontAwesomeIcon className={"cursor-pointer px-5 text-2xl"} icon={faUserCircle} />
                </div>
        </motion.nav>

        {/* appbar */}
            <motion.div 
                    variants={appMenuVariant}
                    transition={{duration:0.5}}
                    animate={clickApp ? "open" : "closed"}
                    className="sm:hidden   fixed z-40  b-10 bg-transperent h-10  w-[2rem] h-[2rem] container  rounded-full bottom-10 mx-auto">
                                    {/* app content */}
                                    <div className="cursor-pointer text-primeRed  font-bold mx-4 text-3xl mt-10 text-center">
                                              Primezone
                                    </div>
                                    <div className="mt-20 overflow-y-scroll"> 
                                {navigation.map((navs,index) => (
                                    <div key={index} className=" flex justify-center my-10 text-2xl font-bold text-white">
                                            <p>{navs.name}</p>
                                            
                                    </div>
                                ))}
                         </div>
            <footer 
            onClick={()=>{SetclickApp(!clickApp)}}
            className="sm:hidden  fixed z-40  b-10 bg-[rgba(0,0,0,1)] h-10  w-[4.5rem] h-[4.5rem] container ml-2  rounded-full bottom-10 mx-auto">

                <div className="  flex justify-center  text-center px-6 font-black text-primeDark">

                        <motion.span 
                        className="font-black text-3xl mt-[1.18rem]">
                               <FontAwesomeIcon className=" text-primeRed" icon={clickApp ? faTimes : faEquals} />
                         </motion.span>



                </div>

            </footer>

            </motion.div>

        </motion.div>
     );
}
 
export default HomeNav;