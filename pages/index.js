import homeStyle from '.././styles/Home.module.css';
import Discount from '../components/homeComponents/discount';
import Hero from '../components/homeComponents/hero';
import Featured from '../components/homeComponents/featured';
import Testimonial from '../components/homeComponents/testimonial';
import HomeNav from '../components/homeComponents/homeNav';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
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
                    <div className="w-screen h-screen bg-black flex text-primeRed text-5xl text-bold justify-center py-[45vh]">Primezone</div>
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