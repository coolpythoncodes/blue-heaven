import { useState } from "react";
import Image from "next/image"
import { navLinks } from "../../utils/data"
import close from "../../public/assets/icon/close.svg"
import Link from "next/link"


// images
import arrowDown from "../../public/assets/arrows/bottom-left-arrow.svg";
import clip from "../../public/assets/navbar/clip.svg";


// css
import styles from "../../styles/Home.module.css"
import { useRouter } from "next/router";


type Props = {
    isOpen: boolean
    toggleMenu: () => void
}

const SideBar = ({ isOpen, toggleMenu }: Props) => {
    const [showServicesCategories, setShowServicesCategories] = useState(false)
    const { pathname } = useRouter()

    return isOpen ? (
        <div className="bg-creamSecondaryBg h-full w-full fixed top-0 left-0 z-[999] overflow-y-hidden lg-hidden">
            <div className="flex justify-end pr-8 mt-[58px] mb-20">
                <Image src={close} alt="" className="" onClick={toggleMenu} />
            </div>
            <ul className={`flex flex-col h-full items-center space-y-12 font-normal text-2xl leading-[41px] tracking-[0.02em] text-textColor ${styles.jeko_regular}`}>
                {
                    navLinks.map((value, index) => (
                        <li key={index} className="text-center">
                            {
                                value.text.toLowerCase() === 'services' ?
                                    <>
                                        <div className="flex items-center relative" onClick={() => setShowServicesCategories(!showServicesCategories)}>
                                            <span className="mr-1">{value.text}</span>
                                            <div className="flex mt-[10px] w-[11px] h-[11px]">
                                                <Image src={arrowDown} alt="" />
                                            </div>
                                            {
                                                showServicesCategories &&
                                                <div className="absolute top-[15px] left-8">
                                                    <Image src={clip} alt="" className="" />
                                                </div>
                                            }
                                        </div>
                                        {
                                            showServicesCategories &&
                                            <ul className="mt-4">
                                                {
                                                    value?.categories?.map((value, index) => (
                                                        <li key={index}>
                                                            <Link href={value.to}>
                                                                <a className="body-text font-inter">{pathname.toLowerCase() === `/${value.text.toLowerCase()}` ? null : value.text}</a>
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        }
                                    </> :
                                    <Link href={value.to!}>
                                        <a>{value.text}</a>
                                    </Link>
                            }

                        </li>
                    ))
                }
            </ul>
        </div>
    ) : null
}

export default SideBar