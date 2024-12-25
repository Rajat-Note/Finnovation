import Image from "next/image";

interface serviceProps {
    service : {
        source: string,
        title: string,
        desc: string,
        animDirection: string,
    }
}

export const RectCard = ({ service }: serviceProps) => {
    const { source, title, desc, animDirection } = service;
    return ( 
        <div className={`rounded-2xl w-full h-full flex gap-4 justify-center items-center px-2 py-2 ${animDirection === 'right' ?  "animeRight" : "animeLeft"}`}>
            <div className="rounded-full bg-[#f3ffd9] overflow-hidden">
                <Image
                    src={source}
                    alt="Service One"
                    width={120}
                    height={120}
                    className="scale-[0.6]"
                />
            </div>
            <div className="flex flex-col gap-2 justify-center items-start">
                <h1 className="text-[#8ec21e] font-bold text-2xl">{title}</h1>
                <p className="text-gray-500 font-semibold">{desc}</p>
            </div>
        </div>
     );
}