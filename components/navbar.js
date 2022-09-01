import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faShoppingCart, faUserCircle,faBars  } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Navbar = () => {

    const navigation =  [
        {name: "Home", href:"/", title: "Home"},
        {name:"Categories", href:"/categories", title: "Categories"},
        {name:"About", href:"/about", title: "About"},
        {name:"Classes", href:"/classes", title: "Classes"},
        {name:"Contacts", href:"/contact", title: "Contact"}
    ]

    return ( 
        <nav className={" text-gray-300   bg-primeDark  flex justify-between  pt-3  font-primeFont "}>
            {/* logo */}
                <div className=" mx-4 text-3xl">
                        {/* <FontAwesomeIcon icon={faBars} /> */}
                        Primezone
                </div>

                {/* navigations */}
                <ul className="text-base flex ">
                    {navigation.map((nav, index) =>(
                        <li  title={nav.title} key={index} className={" mx-3"} >
                              <Link href={nav.href}><a >{nav.name}</a></Link>
                        </li>
                    ))}

                </ul>

                {/* left icons */}
                <div className="text-xl ">
                 <FontAwesomeIcon className={"mx-5 text-2xl"} icon={faShoppingCart} />
                 <FontAwesomeIcon className={"mx-5 text-2xl"} icon={faUserCircle} />
                </div>
        </nav>
     );
}
 
export default Navbar;