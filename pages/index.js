import homeStyle from '.././styles/Home.module.css';
import Discount from '../components/homeComponents/discount';
import Hero from '../components/homeComponents/hero';
import Featured from '../components/homeComponents/featured';
import Testimonial from '../components/homeComponents/testimonial';
const Home = () => {
    return ( 
        <>
            <header>
                    <title>primezone | Home</title>
            </header>

            <div className="">
                    <Hero />
                    <Discount />
                    <Featured />
                    <Testimonial />
            </div>

        </>
     );
}
 
export default Home;