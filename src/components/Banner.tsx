import Image from "next/image";
import banner from '../../public/1.png';

export const Banner = () => {
    return ( 
        <div className="min-h-screen h-full w-[80%] md:w-[70%] mx-auto flex flex-col md:flex-row justify-around md:justify-between items-center gap-16 md:gap-8 py-24 md:py-0">
          <div className="w-[80%] md:w-[60%]">
            <Image
                src={banner}
                alt="banner"
            />
          </div>
          <div className="w-[80%] md:w-[45%] h-full flex flex-col gap-4 justify-center items-start text-white">
            <h1 className="font-bold text-6xl">Finnovation</h1>
            <h1 className="font-bold text-6xl">At the Edge of Innovation!</h1>
            <p>Our vision is to establish Finnovation as a trusted partner in the financial ecosystem, known for innovation, quality, and customer-centric solutions.</p>
          </div>
        </div>
    );
}