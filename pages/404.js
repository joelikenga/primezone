import Image from "next/image";
import errorImage from '../public/istockphoto-1055554214-170667a.jpg';

const PageError = () => {
    return ( 
        <div className="">
            <Image width={1000} height={500} src={errorImage} alt="cart image" />
        </div>
     );
}
 
export default PageError;