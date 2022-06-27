import { useState } from "react";
import Image from "next/image";
import HamburgerMenu from "../misc/hamburgerMenu";
import Link from "next/link";
import { navLinks } from "../../utils/data";
import Button from "../input/button";
import SideBar from "./sidebar";

// Images
import logo from "../../public/assets/logo/logo_with_text.svg";
import logoSecondary from "../../public/assets/logo/logo_with_text_secondary.svg";
import clip from "../../public/assets/navbar/clip.svg";

type Props = {
    navBarColor?: string
}

const NavBar = ({ navBarColor }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showServicesCategories, setShowServicesCategories] = useState(false)
    const [hover, setHover] = useState(-1)
    const toggleMenu = () => setIsOpen(!isOpen);
    const handleMouseLeave = () => {
        setShowServicesCategories(false)
        setHover(-1)
    };
    return (
        <>
            <SideBar
                isOpen={isOpen}
                toggleMenu={toggleMenu}
            />
            <nav className={`${navBarColor ? `${navBarColor}` : 'bg-creamSecondaryBg'} pt-5 pb-2`}>
                <div className="layout-container flex items-center justify-between border-creamSecondaryBg md:pb-3 lg:border-b">
                    {/* Logo */}
                    <div className="">
                        <Image src={navBarColor ? logo : logoSecondary} alt="" />
                    </div>

                    {/* nav links */}
                    <ul className={`hidden lg:flex body-text space-x-10 font-inter ${navBarColor ? 'text-white' : 'text-textColor'}`}>
                        {
                            navLinks.map((value, index) => (
                                <li key={index}>
                                    {
                                        value.text.toLowerCase() === 'services' ?
                                            <div className="relative" onMouseEnter={() => setShowServicesCategories(true)}>
                                                <span className="cursor-pointer" >
                                                    {value.text}
                                                </span>
                                                {
                                                    showServicesCategories &&
                                                    <div onMouseLeave={handleMouseLeave} className={`absolute top-8 -left-12 h-[180px] w-[163px] rounded-t-[50px] grid place-items-center z-50 text-textColor body-text ${navBarColor ? 'bg-creamSecondaryBg' : 'bg-lightBlueTertiary'}`}>
                                                        <ul className="space-y-6">
                                                            {
                                                                value?.categories?.map((category, index) => (
                                                                    <li key={index} className="relative text-center">
                                                                        <Link href={category.to}>
                                                                            <a
                                                                                onMouseEnter={() => {
                                                                                    setHover(index)
                                                                                }}
                                                                            >{category.text}</a>
                                                                        </Link>
                                                                        {
                                                                            hover === index &&
                                                                            <div className="absolute top-[15px] left-5">
                                                                                <Image src={clip} alt="" className="" />
                                                                            </div>
                                                                        }
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                }

                                            </div> :
                                            <>
                                                <Link href={value.to!}>
                                                    <a>{value.text}</a>
                                                </Link>
                                            </>
                                    }
                                </li>
                            ))
                        }
                    </ul>

                    {/* Book now  */}
                    <div className="hidden lg:block">
                        <Button href="/" title="Book Now" />
                    </div>

                    {/* Hamburger menu */}
                    <div className="lg:hidden" onClick={() => setIsOpen(true)}>
                        <HamburgerMenu fill={navBarColor ? '#EAE5D9' : '#295562'} />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar