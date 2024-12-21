import { SmallCard } from "./SmallCard";

export const Perks = () => {
    const perks = [
        {
          source: "/perkOne.png",
          title: "Transparency"
        },
        {
          source: "/perkTwo.png",
          title: "Expertise"
        },
        {
          source: "/perkThree.png",
          title: "Customer Focus"
        },
        {
            source: "/perkFour.png",
            title: "Realiability"
        },
        {
            source: "/perkFive.png",
            title: "Innovation"
        },
    ];

    return ( 
        <div className="min-h-screen h-screen w-full bg-[#f5f8fc] flex justify-center items-center">
            <div className="w-[80%] mx-auto flex flex-col justify-center items-center gap-8">
                <h1 className="font-bold text-4xl"><span className="text-[#8ec21e]">Why</span> Choose Us</h1>
                <p className="w-[40%] text-center text-gray-500">By choosing Finnovation, you&apos;re partnering with a trusted leader in the industry, known for reliability, integrity, and a steadfast commitment to quality.</p>
                <div className="w-[90%] flex flex-wrap justify-center items-center gap-8">
                    {perks.map((perk, index) => {
                        return <SmallCard service={perk} key={index} />;
                    })}
                </div>
            </div>   
        </div>
    );
}