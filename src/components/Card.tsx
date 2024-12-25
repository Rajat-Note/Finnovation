import Image from "next/image";

interface serviceProps {
    service: {
        source: string,
        title: string,
        desc: string,
    }
}

export const Card = ({ service }: serviceProps) => {
    const { source, title, desc } = service;
    return ( 
        <div className="rounded-2xl shadow shadow-[#f5f8fc] hover:shadow-[#c0bebe] transition duration-700 hover:-translate-y-2 bg-white w-[100%] lg:w-[30%] md:w-[45%] h-full flex flex-col gap-8 justify-center items-center px-2 py-8">
            <div className="rounded-full bg-[#f5f8fc] overflow-hidden">
                <Image
                    src={source}
                    alt="Service One"
                    width={100}
                    height={100}
                    className="scale-[0.6]"
                />
            </div>
            <h1 className="text-[#8ec21e] font-bold text-2xl text-center">{title}</h1>
            <p className="text-gray-500 font-semibold text-center">{desc}</p>
        </div>
     );
}