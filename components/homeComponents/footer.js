const Footer = () => {
    return ( 
        <div className="font-primeFont h-screen bg-primeDark p-16">
                    <div className="sm:mx-32 grid  grid-cols-2 sm:flex justify-between text-white">

                                <div className="mt-2">
                                        <h1 className="text-3xl font-bold mb-3 text-primeRed">Quick Links</h1>
                                            <div className="text-xl text-gray-300 font-medium capitalize">
                                                <p>Home</p>
                                                <p>Categories</p>
                                                <p>About</p>
                                                <p>Classes</p>
                                                <p>Contact</p>
                                            </div>
                                </div>

                                <div className="mt-2">
                                        <h1 className="text-3xl font-bold mb-3 text-primeRed">Community</h1>
                                            <div className="text-xl text-gray-300 font-medium capitalize">
                                                <p>saftey hub</p>
                                                <p>Community Guidelines</p>
                                            </div>
                                </div>

                                <div className="mt-2">
                                        <h1 className="text-3xl font-bold mb-3 text-primeRed">Legal</h1>
                                            <div className="text-xl text-gray-300 font-medium capitalize">
                                                <p>Terms of service</p>
                                                <p>Privacy Policy</p>
                                            </div>
                                </div>

                    </div>

                <div className="flex  justify-end mt-[8rem] ">

                            <div className="capitalize text-lg text-white  ">
                                        <p>made with 🤍 by #<strong className="text-primeRed">joelikenga</strong> 🇳🇬</p>
                            </div>
                </div>

        </div>
     );
}
 
export default Footer;