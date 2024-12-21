import Image from "next/image";
import finImg from "../../public/financePhoto.jpg"

export const Finance = () => {
    return ( 
        <div className="min-h-screen h-screen w-[80%] mx-auto flex justify-center items-center gap-8">
            <div className="w-[45%] flex flex-col gap-8 justify-center items-start">
                <h1 className="font-bold text-4xl"><span className="text-[#8ec21e]">Financial</span> Ecosystem, Known For Innovation, Quality, And Customer-Centric Solutions.</h1>
                <p className="text-lg text-gray-400">At Finnovation, we are dedicated to revolutionizing the financial services industry by offering innovative solutions that empower our clients to take control of their business and personal finances.</p>
                <p className="text-lg text-gray-400">Established in Dubai, our company is built on a foundation of transparency, autonomy, and customer-centricity. Our mission is to bridge the gap between sellers and consumers through our advanced and decentralized platform, ensuring efficient and secure financial transactions.</p>
                <button className="px-7 py-3 rounded-md bg-[#8ec21e] text-white font-bold">Learn More</button>
            </div>
            <div className="w-[45%] relative">
                <Image
                    src={finImg}
                    alt="Finance Image"
                    className="rounded-2xl"
                />
                <div className="absolute bg-white -top-[3rem] right-0 rounded-2xl flex flex-col gap-4 px-6 py-2 opacity-90">
                    <h1 className="font-bold text-4xl text-[#8ec21e]">10 + Years</h1>
                    <p className="text-2xl text-gray-400">Working Experince</p>
                </div>
            </div>
        </div>
    );
}