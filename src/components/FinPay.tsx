import Image from "next/image";
import finpay from '../../public/finpay.png';
import { RectCard } from "./RectCard";

export const FinPay = () => {
    const finServices = [
        {
            source: "/finOne.png",
            title: "Reliable Service",
            desc: "Our robust infrastructure ensures that your transactions are secure and reliable.",
            animDirection: "right"
        },
        {
            source: "/finTwo.png",
            title: "Competitive Rates",
            desc: "We offer competitive rates for all our services, providing value for money.",
            animDirection: "right"
        },
        {
            source: "/finThree.png",
            title: "Customer Satisfaction",
            desc: "We are committed to ensuring our customers have the best experience possible.",
            animDirection: "right"
        },
    ];

    return ( 
        <div className="min-h-screen h-full w-full bg-white py-14">
            <div className="h-full w-[80%] mx-auto flex flex-col md:flex-row justify-center items-center gap-16 md:gap-8">
                <div className="w-[80%] md:w-[40%] relative animeLeft">
                    <Image
                        src={finpay}
                        alt="Vowcha Image"
                        className="rounded-2xl"
                    />
                </div>
                <div className="w-[80%] md:w-[50%] flex flex-col gap-4 justify-center items-start text-black">
                    <h1 className="font-bold text-4xl">The Fastest Way To Send <span className="text-[#8ec21e]">Mobile Top-Up</span> Worldwide</h1>
                    <p className="text-lg text-gray-500">99% of mobile recharges sent online with Finpaynow arrive in 3 seconds.</p>
                    <p className="text-lg text-gray-500">Finpaynow is one of the best and most secure platforms for Prepaid Mobile Recharge. It provides excellent customer support on calls, emails, and WhatsApp. The main benefit to transact through Finpaynow is that it never stores payment details with them.</p>
                    <div className="w-full flex flex-col justify-center items-center py-8 gap-4">
                        {finServices.map((finService, index) => {
                            return <RectCard service={finService} key={index} />;
                        })}
                    </div>
                    <button className="px-7 py-3 rounded-md bg-[#8ec21e] text-white font-bold">Learn More</button>
                </div>  
            </div>
        </div>
    );
}