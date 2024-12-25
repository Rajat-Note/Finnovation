"use client";

import { useEffect, useState } from "react";
import { ProfileCard } from "./ProfileCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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
        {
            source: "/flag3.png",
            name: "Rohit Sharma",
            flag: "India",
            desc: "Finnovation has transformed the way I manage my finances. Their gift card services are incredibly convenient and have helped me save a lot on my purchases. Highly recommended!"
        },
        {
            source: "/flag4.png",
            name: "Anna Svensson",
            flag: "Cannada",
            desc: "Finnovation's loyalty card services have helped my business grow. The rewards program is well-designed, and my customers love it. Their team is very professional and supportive."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        nextSlide();
        }, 2000);

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex === profiles.length - 3 ? 0 : (prevIndex + 1) % profiles.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? profiles.length - 3 : prevIndex - 1
        );
    };

    return ( 
        <div className="min-h-screen h-full w-full flex justify-center items-center py-14">
            <div className="relative w-[90%] md:w-[75%] mx-auto flex flex-col justify-center items-center gap-8">
                <div className="w-full flex justify-between items-center">
                    <h1 className="font-bold text-4xl">Meet Our <span className="text-[#8ec21e]">Clients</span></h1>
                    <button className="px-7 py-3 rounded-md bg-[#8ec21e] text-white font-bold">View All</button>
                </div>
                <div className="relative w-full overflow-hidden">
                    <div
                        className="w-full flex justify-start items-start transition-transform duration-700 gap-8"
                        style={{
                            transform: `translateX(-${currentIndex * 33}%)`
                          }}
                    >
                        {profiles.map((profile, index) => {
                            return <ProfileCard service={profile} key={index} />;
                        })}
                    </div>
                </div>
                <button
                    className="absolute size-12 top-[50%] -left-6 flex justify-center items-center bg-[#ffe1d8] hover:bg-[#8ec21e] rounded-full px-2 py-2"
                    onClick={prevSlide}
                >
                    <IoIosArrowBack size={18} />
                </button>
                <button
                    className="absolute size-12 top-[50%] -right-6 flex justify-center items-center bg-[#ffe1d8] hover:bg-[#8ec21e] rounded-full px-2 py-2"
                    onClick={nextSlide}
                >
                    <IoIosArrowForward size={18} />
                </button>
            </div>
        </div>
     );
}