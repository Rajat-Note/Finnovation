import Image from "next/image";
import logo from "../../public/logo.png";
import visa from "../../public/visa-card.png";
import masterCard from "../../public/mastercard.png";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export const Footer = () => {
    return ( 
        <div className="max-h-screen h-full w-full bg-[#121111] border-4 border-t-[#8ec21e]">
            <div className="w-[80%] mx-auto flex flex-col gap-12 justify-center items-center py-12">
                <div className="w-full flex justify-around items-start gap-8">
                    <div className=" w-[25%] flex flex-col gap-4 justify-center items-start">
                        <div>
                            <Image
                                src={logo}
                                alt="logo"
                            />
                        </div>
                        <p className="text-[#9f9f9f]">We are committed to providing expert business knowledge and extensive consumer-oriented services to organizations and entrepreneurs in the UAE.</p>
                        <p className="text-white mt-4">We Accept:</p>
                        <div className="flex gap-2 justify-center items-center">
                            <div>
                                <Image
                                    src={visa}
                                    alt="visa"
                                />
                            </div>
                            <div>
                                <Image
                                    src={masterCard}
                                    alt="master card"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-[25%] flex flex-col gap-4 justify-center items-start">
                        <h1 className="text-white text-lg font-semibold">Quick links</h1>
                        <p className="text-[#9f9f9f]">About Us</p>
                        <p className="text-[#9f9f9f]">Commercial Brokerage</p>
                        <p className="text-[#9f9f9f]">Discount Card Services</p>
                        <p className="text-[#9f9f9f]">Loyalty Card Services</p>
                    </div>
                    <div className="w-[25%] flex flex-col gap-4 justify-center items-start">
                        <h1 className="text-white text-lg font-semibold">Important links</h1>
                        <p className="text-[#9f9f9f]">Terms & Conditions</p>
                        <p className="text-[#9f9f9f]">Privacy Policy</p>
                        <p className="text-[#9f9f9f]">Refund/Return Policy</p>
                        <p className="text-[#9f9f9f]">Cancellation & Replacement Policy</p>
                    </div>
                    <div className="w-[25%] flex flex-col gap-2 justify-center items-start">
                        <h1 className="text-white text-lg font-semibold">Finnovation Commercial Brokers LLC</h1>
                        <div className="flex justify-center items-center gap-2">
                            <IoCallOutline className="text-[#8ec21e]" />
                            <p className="text-[#9f9f9f]"> +971 56 256 6887</p>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <IoCallOutline className="text-[#8ec21e]" />
                            <p className="text-[#9f9f9f]"> +971 4 388 8082</p>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <MdOutlineEmail className="text-[#8ec21e]" />
                            <p className="text-[#9f9f9f]"> enquiry@finnovationuae.com</p>
                        </div>
                        <div className="flex flex-col justify-center text-[#9f9f9f]">
                            <div className="flex justify-start items-center gap-2">
                                <IoLocationOutline className="text-[#8ec21e]" />
                                <p className="text-[#9f9f9f]"> Dubai (Head Office)</p>
                            </div>
                            <p className="text-[#9f9f9f]">Office #312 Makateb Building, Port Saeed, Airport Road, Dubai, UAE</p>
                        </div>
                        <p className="text-[#9f9f9f]">Flat No: 644, Building No.: 33, Road NO.:1802, Block no.: 318, Town: Manama/Alhoora , Bahrain.
</p>
                    </div>
                </div>
                <div className="w-full border-t-[1px] border-[#9f9f9f]"></div>
                <div className=" w-full flex justify-between items-center">
                    <p className="text-[#9f9f9f]">© finnovation.com 2024. All Rights Reserved.</p>
                    <div className="flex justify-center items-center gap-4">
                        <div className="size-10 bg-[#201f1f] text-white rounded-full flex justify-center items-center">
                            <TiSocialFacebook size={24} />
                        </div>
                        <div className="size-10 bg-[#201f1f] text-white rounded-full flex justify-center items-center">
                            <FaInstagram size={20} />
                        </div>
                        <div className="size-10 bg-[#201f1f] text-white rounded-full flex justify-center items-center">
                            <FaLinkedinIn size={20} />
                        </div>
                        <div className="size-10 bg-[#201f1f] text-white rounded-full flex justify-center items-center">
                            <FaWhatsapp size={20} />
                        </div>
                        <div className="size-10 bg-[#201f1f] text-white rounded-full flex justify-center items-center">
                            <FaTwitter size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}