import {  faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const discountCard = [
    { pbrand: "Bimes", pname:"Orange Juice", image:"/istockphoto-1027015824-170667a.jpg",newPrice:150, oldPrice:200},
    { pbrand: "Bimes", pname:"Egg Juice", image:"/istockphoto-1055554214-170667a.jpg",newPrice:150, oldPrice:200},
    { pbrand: "Bimes", pname:"Goat Juice", image:"/istockphoto-1216828053-612x612.jpg",newPrice:150, oldPrice:200},
]

const Discount = () => {
    return ( 
        <div className=" container  overflow-x-visible mx-auto mt-6  font-primeFont grid grid-cols-1 gap-10  md:grid-cols-3">

                {discountCard.map((items, index) => (
                                    <Link href={"/"} key={index} className=" cursor-pointer">
                                    <div className="     max-w-md  rounded overflow-hidden bordered border-gray-100 border-2 bg-white  ">
                                            <Image className="  object-cover" src={items.image} alt={"Discounted"} width={"500"} height={"300"} />
                                                <div className="  m-3 text-start  ">
                                                    <p className="text-md text-gray-500">{items.pbrand}</p>
                                                        <h4 className=" border-l-4 pl-2 border-primeRed mt-1 text-gray-900 font-bold text-xl top-3">{items.pname}</h4>
                                                            <div className="flex mt-1 text-lg">
                                                                    <span className=" text-primeRed font-bold">₦ {items.newPrice}</span>
                                                                    <p className=" ml-3 text-gray-500">
                                                                           ₦ <del >  {items.oldPrice}</del>
                                                                     </p>
                                                                     <Link href={"#"}>
                                                                        <span  className="ml-auto text-primeBlack rounded-full   text-4xl">
                                                                               <FontAwesomeIcon icon={faCartPlus} />
                                                                        </span>
                                                                    </Link>
                                                            </div>
                                                </div>
                                        </div>
                                </Link>
                                ))}
                                
                            </div>
     );
}
 
export default Discount;