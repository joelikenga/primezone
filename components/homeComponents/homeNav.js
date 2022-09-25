import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faShoppingCart, faUserCircle, faBarsStaggered  } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const HomeNav = () => {

    const navigation =  [
        {name: "Home", href:"/", title: "Home"},
        {name:"Categories", href:"/categories", title: "Categories"},
        {name:"About", href:"/about", title: "About"},
        {name:"Classes", href:"/classes", title: "Classes"},
        {name:"Contacts", href:"/contact", title: "Contact"}
    ]

    return ( 
        <nav className={"hidden sm:flex justify-between px-64   w-screen  mt-16  font-primeFont  fixed z-50 "}>

                {/* navigations */}
                <div className="bg-black text-gray-200 px-4 py-3 font-black text-xl rounded-full text-center">
                    <FontAwesomeIcon className=" text-primeRed" icon={faBarsStaggered} />
                    <span className="ml-4">Menu</span>
                    </div>

                        

                            {/* logo */}
                     <div className=" mx-4 text-3xl">
                          Primezone
                       </div>

                {/* left icons */}
                <div className="text-xl  bg-black text-gray-200 py-3 rounded-full">
                 <FontAwesomeIcon className={"px-5 text-2xl border-r-2 border-primeRed"} icon={faShoppingCart} />
                 <FontAwesomeIcon className={"px-5 text-2xl"} icon={faUserCircle} />
                </div>
        </nav>
     );
}
 
export default HomeNav;