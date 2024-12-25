import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";

export const Header = () => {
    return ( 
        <div className="min-h-screen h-full w-full bg-[#282727] flex flex-col justify-end items-center">
            <Navbar />
            <Banner />
        </div>
    );
}