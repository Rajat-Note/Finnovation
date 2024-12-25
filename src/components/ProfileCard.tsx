import Image from "next/image";

interface serviceProps {
    service : {
        source: string,
        name: string,
        flag: string,
        desc: string,
    }
}
export const ProfileCard = ({ service }: serviceProps) => {
    const { source, name, flag, desc } = service;
    return ( 
        <div className="min-w-[100%] md:min-w-[30%] h-full bg-[#f3ffd9] rounded-2xl flex flex-col gap-6 justify-center items-start px-8 py-8">
            <p className="text-gray-500 font-semibold">&quot;${desc}&quot;</p>
            <div className="flex justify-center items-center gap-2">
                <div className="rounded-full  overflow-hidden">
                    <Image
                        src={source}
                        alt="Service One"
                        width={100}
                        height={100}
                        className="scale-[0.6]"
                    />
                </div>
                <div className="flex flex-col gap-2 justify-center items-start">
                    <h1 className="font-bold text-lg">{name}</h1>
                    <p className="text-gray-500">{flag}</p>
                </div>
            </div>
        </div>
     );
}