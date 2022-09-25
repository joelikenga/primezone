import { faQuoteLeftAlt, faQuoteRightAlt }  from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Testimonial = () => {

    const customerReport =  [
        {name: "Joel Ikenga", status : "customer",location:"North Cyprus",image:"/passport-1.jpg",report: "Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design,and the build size is tiny."},
        {name: "Joel Ikenga", status : "customer",location:"North Cyprus",image:"/passport-2.jpg",report: "Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design,and the build size is tiny."},
        {name: "Joel Ikenga", status : "customer",location:"North Cyprus",image:"/passport-3.jpg",report: "Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design,and the build size is tiny."},
        {name: "Joel Ikenga", status : "customer",location:"North Cyprus",image:"/passport-4.jpg",report: "Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design,and the build size is tiny."},
        {name: "Joel Ikenga", status : "customer",location:"North Cyprus",image:"/passport-5.jpg",report: "Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design,and the build size is tiny."},
    ]

    return ( 
            <>
                {/* <div className="bg-cover bg-center w-full bg-no-repeat font-primeFont bg-primeDark mt-8  ">
                        <div className="flex justify-center">
                            <h2 className="text-5xl font-bold  mt-8 text-white">Testimonial</h2>
                        </div>
                        <div className=" container  mx-auto ">
                    <div className=" mt-10 flex flex-nowrap gap-2 overflow-x-scroll">
                            {customerReport.map((testimony, index) => (
                               
                                <div  key={index} className=" bg-black flex flex-none  scale-95 max-w-lg border-l-8 rounded   container mx-auto  overflow-hidden   border-primeRed">
                                <div className=" flex border-y-[1px] border-r-[1px]  border-gray-400">
                                            <div className="px-5 text-start md:block  my-6">
                                                 <p className="text-white text-md font-medium">
                                                 “{testimony.report}”
                                                    </p>
                                                    <div className="">
                                                            <div class="capitalize text-primeRed font-bold">{testimony.name}</div>
                                                            <div class="capitalize text-slate-500">
                                                                {testimony.status}, {testimony.location}
                                                            </div>
                                                    </div>
                                            </div>
                                            <Image className="h-auto w-auto object-cover " layout="" src={testimony.image} alt="primezone"  width="550" height="200"/>
                                   </div>
                                   </div> 
                            ))}
                           </div>

                    </div>
 
            </div> */}
            </>
     );
}
 
export default Testimonial;
