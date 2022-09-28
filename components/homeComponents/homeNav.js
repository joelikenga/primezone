import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faShoppingCart, faUserCircle, faBarsStaggered, faBasketShopping, faGripHorizontal, faChevronUp  } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {motion} from "framer-motion";
import Image from "next/image";
import { MdHorizontalRule } from "react-icons/md";


const HomeNav = () => {

    const navigation =  [
        {name: "Home", href:"/", title: "Home"},
        {name:"Categories", href:"/categories", title: "Categories"},
        {name:"About", href:"/about", title: "About"},
        {name:"Classes", href:"/classes", title: "Classes"},
        {name:"Contacts", href:"/contact", title: "Contact"}
    ]

    return ( 
        <>
        <motion.nav 
        initial={{opacity:0}}
        animate={{opacity:1,}}
        transition={{delay:0.3, duration:0.5}}
        className={"flex sm:justify-between justify-center sm:px-64  md:px-32   w-screen  sm:mt-14 mt-8  font-primeFont absolute sm:fixed z-50 "}>

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

            <motion.footer 
                    initial={{opacity:0}}
                    animate={{opacity:1,}}
                    transition={{delay:0.5, duration:0.5}}
            className="sm:hidden  fixed z-40  b-10 bg-[rgba(0,0,0,0.8)] h-10  w-full container   rounded-tr-xl rounded-tl-xl -bottom-0 mx-auto">
                <div className=" flex justify-center container text-center px-6 text-3xl font-black text-primeRed">
                        {/* <div className="mt-1">
                                <FontAwesomeIcon icon={faBarsStaggered} />
                        </div> */}

                        <span className="font-[900] w-">
                            <FontAwesomeIcon icon={faChevronUp} />
                         </span>
{/* 
                         <div className="">
                         <Image className="rounded-full" src={"/passport-1.jpg"} width="40" height="40" alt="" />
                        </div> */}

                </div>

            </motion.footer>
        </>
     );
}
 
export default HomeNav;