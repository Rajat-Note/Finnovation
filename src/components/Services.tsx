import { Card } from "@/components/Card";

export const Services = () => {
    const services = [
        {
          source: "/serviceOne.png",
          title: "Commercial Brokerage",
          desc: "Finnovation offers a comprehensive suite of commercial brokerage services designed to facilitate business growth and financial management."
        },
        {
          source: "/serviceTwo.png",
          title: "Discount Card Services",
          desc: "Our discount card services are designed to help consumers save significantly on their everyday purchases."
        },
        {
          source: "/serviceThree.png",
          title: "Loyalty Card Services",
          desc: "Enhance your customer loyalty with Finnovation's innovative loyalty card programs."
        },
      ];

    return ( 
        <div className="min-h-screen h-full w-full bg-[#f5f8fc] flex flex-col justify-center items-center gap-8 py-14">
            <h1 className="font-bold text-4xl"><span className="text-[#8ec21e]">Services</span> We Offer</h1>
            <p className="w-[80%] lg:w-[35%] md:w-[70%] text-center text-gray-500 font-semibold">We strive to offer solutions that are not only innovative but also sustainable and reliable, enhancing the overall financial well-being of our clients.</p>
            <div className="w-[80%] flex flex-wrap justify-center items-center gap-8 animeDown">
                {services.map((service, index) => {
                    return <Card service={service} key={index} />;
                })}
            </div>
      </div>
    );
}
