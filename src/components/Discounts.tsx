import Image from "next/image";
import vowcha from '../../public/vowcha.svg';
import { RectCard } from "./RectCard";

export const Discounts = () => {
    const discounts = [
        {
            source: "/discountOne.png",
            title: "Amazing discounts",
            desc: "At Vowcha you can make huge savings on gift cards for big brands including Amazon, Nike, and Ikea."
        },
        {
            source: "/discountTwo.png",
            title: "Reliable and secure",
            desc: "Make your purchase with complete peace of mind using our reliable and secure platform where you can shop safely."
        },
        {
            source: "/discountThree.png",
            title: "Loyalty Card Services",
            desc: "All gift cards traded on Vowcha are digital, so you’ll be sent them instantly via email to start shopping straight away."
        },
    ];

    return ( 
        <div className="min-h-screen h-[150%] w-full bg-[#f5f8fc] py-24">
            <div className="h-full w-[80%] mx-auto flex justify-center items-center gap-8">
                <div className="w-[50%] flex flex-col gap-2 justify-center items-start">
                    <h1 className="font-bold text-4xl">Save Money On <span className="text-[#8ec21e]">Discounted Gift Cards</span> Form Hundreds Of Brands</h1>
                    <p className="text-lg text-gray-400">Get as much as 30% off gift cards for hundreds of amazing brands when you buy them through Vowcha.</p>
                    <div className="w-full flex flex-col justify-center items-center py-8 gap-4">
                        {discounts.map((discount, index) => {
                            return <RectCard service={discount} key={index} />;
                        })}
                    </div>
                    <button className="px-7 py-3 rounded-md bg-[#8ec21e] text-white font-bold">Learn More</button>
                </div>
                <div className="w-[40%] relative">
                    <Image
                        src={vowcha}
                        alt="Vowcha Image"
                        className="rounded-2xl"
                    />
                </div>
            </div>
        </div>
     );
}