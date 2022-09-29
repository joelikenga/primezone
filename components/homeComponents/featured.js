import { faCirclePlus, faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import Homecss from "../../styles/Home.module.css"; 




const Featured = () => {


const featureContent =[
        {
    
        tabs : [
            {names: "drinks"},
            {names: "Toiletries"},
            {names: "cereals"},
            {names: "More"},
        ],
        tabContents:[ 
                {image:"/istockphoto-1027015824-170667a.jpg", pBrand:"Nivea", pName:"Nivea Men"},
                {image:"/istockphoto-1323443590-170667a.jpg", pBrand:"Nivea", pName:"Nivea Dog"},
                {image:"/istockphoto-1341449215-612x612.jpg", pBrand:"Nivea", pName:"Nivea Banana"},
                {image:"/istockphoto-1027015824-170667a.jpg", pBrand:"Nivea", pName:"Nivea Children"},
                {image:"/istockphoto-1341449215-612x612.jpg", pBrand:"Nivea", pName:"Nivea Banana"},
                {image:"/istockphoto-1386010022-170667a.jpg", pBrand:"Nivea", pName:"Nivea Men"},
         ],
    }]

    return ( 
        <div className="font-primeFont  py-6">
                <div>
                        <div className="flex over justify-center item-center ">
                              <h2 className="uppercase text-xl sm:text-3xl font-bold px-3 text-black border-x-4 sm:border-x-8 border-primeRed mt-10">Featured Products</h2>
                        </div>
                </div>

                         <div>
                                 { featureContent.map((content,index) => {
                                           return(
                                                      <div key={index}>
                                                                    <div   className=" capitalize flex items-center justify-center  mt-4 text-lg sm:text-xl font-bold">
                                                                                {content.tabs.map((tabsDetails, index) => (
                                                                                        <div key={index}>
                                                                                                <p  className="mx-3 mt-3" >{tabsDetails.names}</p>
                                                                                        </div>
                                                                                ))}
                                                                    </div>

                                                                    <div className="hiddenScroll  justify-items-center mx-auto container mt-6 flex flex-nowrap  overflow-x-scroll gap-2 snap-x">
                                                                            {content.tabContents.map((tabCards, index) =>(

                                                                                        <Link key={index} href="" className="">
                                                                                                    <div  className=" scale-95 cursor-pointer snap-center snap-mandatory overflow-hidden flex-none shadow max-w-[20rem] bg-white rounded hover:scale-100 hover:duration-300">
                                                                                                   
                                                                                                            <Image 
                                                                                                                className="object-cover"
                                                                                                                src={tabCards.image}
                                                                                                                width={"500"}
                                                                                                                height={"450"}
                                                                                                                alt=""
                                                                                                            />

                                                                                                            <div className="m-1 mx-2">
                                                                                                                    <p className="">{tabCards.pBrand}</p>
                                                                                                                    <h2 className="my-3 font-bold text-xl border-l-4 pl-2 border-primeRed">{tabCards.pName}</h2>
                                                                                                            </div>
                                                                                                    </div>
                                                                                        </Link>
                                                                            ))}
                                                                    </div>
                                        
                                                    </div>
                                ) } ) }
                         </div>
        </div>

        
     )
}
 
export default Featured;