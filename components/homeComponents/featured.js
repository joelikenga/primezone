import { faCirclePlus, faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {

    const tabs = [
        {names: "featured"},
        {names: "featured"},
        {names: "featured"},
        {names: "featured"},
    ]

    const featureContent =[
        {image:"/istockphoto-1027015824-170667a.jpg", pBrand:"Nivea", pName:"Nivea Men"},
        {image:"/istockphoto-1323443590-170667a.jpg", pBrand:"Nivea", pName:"Nivea Dog"},
        {image:"/istockphoto-1341449215-612x612.jpg", pBrand:"Nivea", pName:"Nivea Banana"},
        {image:"/istockphoto-1027015824-170667a.jpg", pBrand:"Nivea", pName:"Nivea Children"},
        {image:"/istockphoto-1386010022-170667a.jpg", pBrand:"Nivea", pName:"Nivea Men"},
        {image:"/istockphoto-1386010022-170667a.jpg", pBrand:"Nivea", pName:"Nivea Men"},
        {image:"/istockphoto-1386010022-170667a.jpg", pBrand:"Nivea", pName:"Nivea Men"},
        {image:"/istockphoto-1386010022-170667a.jpg", pBrand:"Nivea", pName:"Nivea Men"},
        ]


    return ( 
        <div className="font-primeFont bg-gray-100 mt-10">
                <div>
                    <div className="flex over justify-center item-center ">
                        <h2 className="uppercase  text-3xl font-bold px-3 text-black  border-x-8 border-primeRed mt-10">Featured Products</h2>
                    </div>
                        <div className=" capitalize flex items-center justify-center  mt-4 text-xl font-bold">
                                { tabs.map((tab,index) => (
                                                    <p className="mx-3 mt-3" key={index} >{tab.names}</p>
                                ))}
                        </div>
                    </div>


                            <div className="  justify-items-center mx-2 mt-6 flex flex-nowrap  overflow-x-scroll gap-3">
                            { featureContent.map((content,index) => (
                                        <Link href="/" className=" ">
                                                                <div key={index} className="  shadow max-w-[20rem] bg-white rounded">
                                                                <Image className="object-cover" src={content.image} width={"500"} height={"450"} alt="" />
                                                                <div className="m-1 mx-2">
                                                                        <p className="">{content.pBrand}</p>
                                                                        <h2 className="my-3 font-bold text-2xl border-l-4 pl-2 border-primeRed">{content.pName}</h2>
                                                                </div>
                                                        </div>
                                                        
                                        </Link>
                                ))}
                            </div>
        </div>

        
     )
}
 
export default Featured;