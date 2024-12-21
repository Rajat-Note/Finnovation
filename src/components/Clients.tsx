import { ProfileCard } from "./ProfileCard";

export const Clients = () => {
    const profiles = [
        {
            source: "/flag1.png",
            name: "Mohammed Khan",
            flag: "UAE",
            desc: "The discount card services from Finnovation are fantastic. They offer great deals and discounts on a wide range of products. I've saved so much using their cards!"
        },
        {
            source: '/flag2.png',
            name: 'John Smith',
            flag: "United States",
            desc: "The DTH services provided by Finnovation are excellent. They offer great packages at competitive prices. I've been a satisfied customer for over a year now."
        },
        {
            source: "/flag2.png",
            name: "Sophie Muller",
            flag: "United States",
            desc: "The gaming gift cards from Finnovation are a hit with my kids. They offer a wide variety of options, and the purchasing process is hassle-free. Excellent service!"
        },
        // {
        //     source: "/flag3.png",
        //     name: "Rohit Sharma",
        //     flag: "India",
        //     desc: "Finnovation has transformed the way I manage my finances. Their gift card services are incredibly convenient and have helped me save a lot on my purchases. Highly recommended!"
        // },
        // {
        //     source: "/flag4.png",
        //     name: "Anna Svensson",
        //     flag: "Cannada",
        //     desc: "Finnovation's loyalty card services have helped my business grow. The rewards program is well-designed, and my customers love it. Their team is very professional and supportive."
        // }
    ];

    return ( 
        <div className="min-h-screen h-screen w-full flex justify-center items-center">
            <div className="w-[75%] mx-auto flex flex-col justify-center items-center gap-8">
                <div className="w-full flex justify-between items-center">
                    <h1 className="font-bold text-4xl">Meet Our <span className="text-[#8ec21e]">Clients</span></h1>
                    <button className="px-7 py-3 rounded-md bg-[#8ec21e] text-white font-bold">View All</button>
                </div>
                <div className="w-full flex justify-center items-center gap-8">
                    {profiles.map((profile, index) => {
                        return <ProfileCard service={profile} key={index} />;
                    })}
                </div>
            </div>
        </div>
     );
}