import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faShoppingCart, faUserCircle, faBarsStaggered, faBasketShopping, faGripHorizontal, faEquals, faTimes} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";
import { useState } from "react";


const HomeNav = () => {

    const [clickApp, SetclickApp] = useState(false);

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
                 backgroundColor:"#ff0000"
            },
            closed:{
                width:"0vw", 
                height:"0vh", 
                borderRadius:"0px",
                 bottom:"0px",
                 marginLeft:"0px",
                 backgroundColor:"rgba(0,0,0,0,)"
            }
        }

    return ( 
        <motion.div   initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.3, duration:0.5}}>
        <motion.nav 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.3, duration:0.5}}
        className="flex sm:justify-between justify-center sm:px-64  md:px-32   w-screen  sm:mt-14 mt-8  font-primeFont absolute sm:fixed z-50 ">

                {/* navigations */}
                <div className="hidden sm:block bg-black text-gray-200 px-4 py-3 font-black text-xl rounded-full text-center">
                    <FontAwesomeIcon className=" text-primeRed" icon={faBarsStaggered} />
                    <span className="ml-4">Menu</span>
                    </div>

                        

                            {/* logo */}
                     <div className="text-primeRed  font-bold mx-4 text-3xl">
                          Primezone
                       </div>

                {/* left icons */}
                <div className="hidden sm:block text-xl  bg-black text-gray-200 py-3 rounded-full">
                 <FontAwesomeIcon className={"px-5 text-2xl border-r-2 border-primeRed"} icon={faShoppingCart} />
                 <FontAwesomeIcon className={"px-5 text-2xl"} icon={faUserCircle} />
                </div>
        </motion.nav>

        {/* appbar */}
<motion.div 
                    variants={appMenuVariant}
                    transition={{duration:0.5}}
                    whileHover={SetclickApp ? "open" : "closed"}
                    className="sm:hidden  fixed z-40  b-10 bg-transperent h-10  w-[2rem] h-[2rem] container ml-2  rounded-full bottom-10 mx-auto">

            <footer 
            // onClick={SetclickApp(!clickApp)}
            className="sm:hidden  fixed z-40  b-10 bg-[rgba(0,0,0,1)] h-10  w-[4.5rem] h-[4.5rem] container ml-2  rounded-full bottom-10 mx-auto">

                <div className=" flex justify-center container text-center px-6 font-black text-primeRed">

                        <motion.span 
                        className="font-black text-3xl mt-[1.18rem]">
                               <FontAwesomeIcon className=" text-primeRed" icon={SetclickApp ? faTimes : faEquals} />
                         </motion.span>

                </div>

            </footer>

            </motion.div>

        </motion.div>
     );
}
 
export default HomeNav;