import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";

export const Header = () => {
    return ( 
        <div className="h-screen w-full bg-[#282727] flex flex-col justify-end items-center">
            <Navbar />
            <Banner />
        </div>
    );
}