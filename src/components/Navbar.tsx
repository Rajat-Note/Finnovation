import Image from "next/image";
import logo from "../../public/logo.png";

export const Navbar = () => {
    // fixed top-0 px-24 py-6
    // bg-[#282727]
    return ( 
        <div className="absolute w-[75%] mx-auto top-6">
            <div className="flex justify-between items-center gap-4 z-50">
                <div>
                    <Image
                        src={logo}
                        alt="logo"
                    />
                </div>
                <ul className="flex justify-center items-center gap-14">
                    <li className="text-white font-semibold">Home</li>
                    <li className="text-white font-semibold">About Us</li>
                    <li className="text-white font-semibold">Why Choose Us</li>
                    <li className="text-white font-semibold">Our Services</li>
                    <button className="px-7 py-3 rounded-md bg-[#8ec21e] text-white font-bold">Contact us</button>
                </ul>
            </div>
        </div>
    );
}
 
