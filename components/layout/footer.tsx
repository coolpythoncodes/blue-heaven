import { bookingUrl, footer_contact, footer_links } from "../../utils/data"
import Link from "next/link"
import Image from "next/image";

// images
import logo from "../../public/assets/logo/logo.svg"
import people from "../../public/assets/footer/people.svg"
import Button from "../input/button";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="relative flex-shrink-0 bg-creamSecondaryBg">
            <div className="absolute -top-[110px] right-[65px] w-[198px] h-[127px] md:w-[499px] md:h-[320px] md:-top-[280px] md:right-[130px] lg:right-[180px]">
                <Image src={people} alt="" layout="responsive" />
            </div>
            <div className="bg-blueBg text-white pt-[21px] pb-[98px] border rounded-t-[100px] md:rounded-t-[200px] md:pb-[33px] md:pt-[53px]">
                <div className="mx-auto w-11/12">
                    <div className="md:flex md:items-center md:w-11/12 md:mx-auto md:justify-evenly lg:justify-between">
                        <div className="w-12 h-[71px] mx-auto mb-[21px] md:w-[71px] md:h-[71px] md:mx-0">
                            <Image src={logo} alt="blue heaven logo" layout="responsive" />
                        </div>
                        <div className="md:flex md:space-x-12  lg:space-x-[60px] xl:space-x-[100px]">
                            <div className="flex justify-center space-x-12 mb-[31px] md:mb-0 xl:space-x-[100px]">
                                {
                                    footer_links.map((value, index) => (
                                        <div key={index} className="text-center">
                                            <h3 className="font-inter text-base font-semibold md:button-text md:mb-[15px]">{value.header}</h3>
                                            <ul className="md:space-y-2">
                                                {value.links.map((value, index) => (
                                                    <li key={index} className="font-inter caption">
                                                        <Link href={value.to}>
                                                            <a className="font-inter caption md:body-text">{value.text}</a>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))
                                }
                            </div>
                            {/* contact */}
                            <div className="text-center">
                                <h3 className="font-inter body-text md:button-text md:mb-[15px]">{footer_contact.header}</h3>
                                <ul className="md:space-y-2">
                                    {
                                        footer_contact.text.map((value, index) => (
                                            <li key={index} className="font-inter caption md:body-text">{value}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <Button
                                href={bookingUrl}
                                target="_blank"
                                rel="noreferrer noopener"
                                title="Book Now"
                            />
                        </div>
                    </div>
                    <div className="mt-[14px] md:mt-[45px] lg:flex lg:justify-between">
                        <p className="text-center  font-inter font-normal text-[13px] leading-5 md:body-text">@{year} Blue Haven - All rights reserved.</p>
                        <p className="hidden body-text lg:block"> 13856 232 Street Maple Ridge V4R2G5 British Columbia, CANADA</p>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
