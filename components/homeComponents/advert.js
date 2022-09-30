import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";

const Advert = () => {

    const salesInfo = [
        {image:"/transperent.jpg", class: "Vegetable",name:"fruits",discount:"70"},
        {image:"/drinks.jpeg", class: "Drinks",name:"wiskey",discount:"20"},
        {image:"/headphone.jpg", class: "Gadget",name:"jbl",discount:"40"},
    ]

    return ( 
        <>
                <div className="text-primeFont px-4 py-8 ">

                <div className="flex over justify-center item-center ">
                              <h2 className="uppercase text-xl sm:text-3xl font-bold px-3 text-black border-x-4 sm:border-x-8 border-primeRed mb-5">Flash Sales    </h2>
                        </div>

                        <div className="grid grid-cols- gap-4 rounded-2xl overflow-hidden sm:grid-cols-3">

                                    {salesInfo.map((info,index) => (
                                                                                <div  key={index} className="relative  ">
                                                                                <div className="  rounded-tr-2xl rounded-tl-2xl absolute flex justify-between px-4 py-2  z-20 bg-[rgba(0,0,0,0.9)] w-full">
                                                                                    <div>
                                                                                            <h1 className="border-l-4  border-primeRed text-white text-xl pl-1">{info.class}</h1>
                                                                                            <p className="text-primeRed">{info.discount}% OFF</p>
                                                                                    </div>

                                                                                        {/* <div className="text-white text-xl mt-4 px-2 capitalize border-primeRed border-x-4">
                                                                                            <p>{info.name}</p>
                                                                                        </div> */}
                                        
                                                                                    <div>
                                                                                        <button className="flex px-4 py-2 bg-gray-300  mt-2 rounded">
                                                                                            <AiOutlinePlus className="mt-1 text-primeRed font-black" />
                                                                                             Shop</button>
                                                                                    </div>
                                        
                                                                                </div>
                                                                                    <Image className="rounded-2xl  z-10 " src={info.image} height="300" width="500" />
                                                                            </div>
                                    ))}

                        </div>


                </div>
        </>
     );
}
 
export default Advert;