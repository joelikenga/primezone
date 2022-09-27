import homeStyle from '.././styles/Home.module.css';
import Discount from '../components/homeComponents/discount';
import Hero from '../components/homeComponents/hero';
import Featured from '../components/homeComponents/featured';
import Testimonial from '../components/homeComponents/testimonial';
import HomeNav from '../components/homeComponents/homeNav';
import { useEffect, useState } from 'react';
import {motion} from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
const Home = () => {

    const  loadup = {
        start:{y:-50, color:"gray"},
        stop:{y:0, color:"red",
        transition:{
            duration:3,
            repeatType: "reverse",
            type:"spring",
            stiffness:150,
        }
    },
    }
    const  loaddown = {
        start:{y:50, color:"gray"},
        stop:{y:0, color:"red",
        transition:{
            duration:3,
            repeatType: "reverse",
            type:"spring",
            stiffness:150,


        }
    },
    }


    const [loading, setLoading] = useState(false);

    useEffect(() => {
        
        setLoading(true)
        
        setTimeout(() => {
            setLoading(false)
        }, 6000);
    },[])

    return ( 
        <>
            <header>
                    <title>primezone | Home</title>
            </header>
            {
                loading ? 
                    <motion.div 
                    className="w-screen h-screen bg-black flex text-primeRed text-5xl font-bold justify-center py-[45vh]"
                    >{<>
                        <motion.span
                        variants={loadup}
                        initial="start"
                        animate="stop"
                            >P
                        </motion.span>
                        <motion.span
                        variants={loaddown}
                        initial="start"
                        animate="stop"
                            >r
                        </motion.span>
                        <motion.span
                        variants={loadup}
                        initial="start"
                        animate="stop"
                            >i
                        </motion.span>
                        <motion.span
                        variants={loaddown}
                        initial="start"
                        animate="stop"
                            >m
                        </motion.span>
                        <motion.span
                        variants={loadup}
                        initial="start"
                        animate="stop"
                            >e
                        </motion.span>
                        <motion.span
                        variants={loaddown}
                        initial="start"
                        animate="stop"
                            >z
                        </motion.span>
                        <motion.span
                        variants={loadup}
                        initial="start"
                        animate="stop"
                            >o
                        </motion.span>
                        <motion.span
                        variants={loaddown}
                        initial="start"
                        animate="stop"
                            >n
                        </motion.span>

                      <motion.span
                        variants={loadup}
                        initial="start"
                        animate="stop"
                            >e
                        </motion.span>
                        

      </>
}

                    </motion.div>
                    :

                <div className="">
                        <HomeNav />
                        <Hero />
                        <Discount />
                        <Featured />
                        <Testimonial />
                </div>
            }

        </>
     );
}
 
export default Home;