import { faQuoteLeftAlt, faQuoteRightAlt,faChevronLeft,faChevronRight }  from "@fortawesome/free-solid-svg-icons";
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
            
                <div className="bg-cover bg-center  bg-no-repeat font-primeFont bg-[url('/wallpaper-2.jpg')]  py-5 z-0">

                    {/* <div className="bg-black absolute w-full h-screen text-white z-10">jjhhh</div> */}

                        <div className="flex justify-center py-3">
                            <h2 className="text-3xl sm:text-4xl font-bold uppercase first-letter:text-primeRed first-letter:text-6xl  text-white">Testimonial</h2>
                        </div>

                        <div className="flex justify-center mt-2 container mx-auto">
                                <h2 className="text-sm sm:text-lg font-bold   text-black text-center">
                                    Eiusmod esse enim velit ullamco dolore aliquip. 
                                    Culpa ex quis laborum amet magna eiusmod proident excepteur et.
                                    Ea nulla nisi aliquip reprehenderit.laborum mollit adipisicing eu ex voluptate.
                                    non veniam elit aliquip deserunt. Ea ut nulla mollit officia pariatur.
                                        Ipsum amet id incididunt pariatur dolor nostrud aliquip qui ad non nostrud elit laborum.
                                        Sit aliquip eu enim consequat cupidatat mollit.
                                </h2>
                        </div>

                        <div className=" flex justify-center pt-7">
                                <button className="py-2 px-10 rounded-full bg-gray-300 text-xl text-black font-bold">View</button>
                        </div>
            </div>
          
     );
}
 
export default Testimonial;
