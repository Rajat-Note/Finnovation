import Image from "next/image";

interface serviceProps {
    service: {
        source: string,
        title: string
    }
}
export const SmallCard = ({ service }: serviceProps) => {
    const { source, title } = service;
    return ( 
        <div className="rounded-2xl shadow-md shadow-[#f5f8fc] hover:shadow-[#333131] bg-white border-2 border-white hover:border-[#8ec21e] w-[100%] md:w-[30%] h-full flex flex-col gap-4 justify-center items-center py-4">
            <div className="rounded-full bg-[#f5f8fc] overflow-hidden">
                <Image
                    src={source}
                    alt="Perk One"
                    width={100}
                    height={100}
                    className="scale-[0.6]"
                />
            </div>
            <h1 className="font-bold text-xl text-center text-black">{title}</h1>
        </div>
     );
}