import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Layout from "../components/layout"
import Appointment from "../components/sections/Appointment"
import { faq } from "../utils/data"

// css styles
import styles from '../styles/Home.module.css'

// images
import open from "../public/assets/faq/open.svg"
import close from "../public/assets/faq/close.svg"

const Faq = () => {
    const [activeSection] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isElementVisible, setIsElementVisible] = useState<boolean>()

    const faqAnswerElement = useRef<HTMLDivElement>(null);
    const faqHeaderElement = useRef<HTMLDivElement>(null);


    const _handleToggle = (id: number) => {
        setActiveIndex(id === activeIndex ? -1 : id);
    };

    const isActive = (id: number, activeIndex: number) => {
        if (id === activeIndex) return true
        else return false
    }

    useEffect(() => {
        setActiveIndex(1);

    }, [activeSection]);
    console.log('is visible', isElementVisible)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsElementVisible(entry.isIntersecting);
        })
        if (faqHeaderElement.current) {
            observer.observe(faqHeaderElement.current);
        }

    }, [])

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         const entry = entries[0];
    //         console.log('entry', entry)
    //         observer.observe(faqHeaderElement?.current);
    //     }
    //         //     entries.forEach((entry) => {
    //         //         if (entry.isIntersecting) {
    //         //             setActiveIndex(1);
    //         //         }
    //         //     });
    //         // }, { threshold: 0.5 });

    //     }, [])
    return (
        <Layout title="FAQ">
            <div className="md:layout-container md:grid md:grid-cols-2 md:pt-10 lg:pt-[65px] lg:mb-[164px]">
                <div className="hidden w-full md:block lg:w-[420px]">
                    <div className="flex flex-col space-y-[19px] sticky top-10">
                        {
                            faq.map((value, index) => (
                                <div key={index} className="h-[43px] w:[200px]  border border-black rounded-t-[20px] pt-[10px] pb-1 px-[21px] flex justify-between items-center md:h-[61px]">
                                    <p className={`text-xl text-black lg:heading-3 ${styles.jeko_regular}`}>{value.heading}</p>
                                    <div className="h-[25px] w-[25px] rounded-t-[10px] border border-black"></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* FAQ section */}
                <div className="flex justify-end">
                    <div className="w-[297px] mx-auto md:mx-0 ml-auto lg:w-[750px]">
                        <h1 className={`text-black text-center mob-h1 mb-[35px] md:text-left md:mb-5 lg:heading-1 ${styles.jeko_regular}`}>FAQs</h1>
                        <div className="flex flex-col space-y-[49px]">
                            {
                                faq.map((value, index) => (
                                    <div key={index} className="">
                                        {/* faq heading */}
                                        <div ref={faqHeaderElement} className={`h-[43px] border border-black rounded-t-[20px] bg-blueBg pt-[10px] pb-1 px-[21px] flex justify-between items-center mb-[31px] md:h-12 md:p-0 md:flex md:justify-center  ${value.heading.toLowerCase() === 'payments & services' ? 'lg:w-[260px]' : 'lg:w-[201px]'}`}>
                                            <p className="body-text text-white font-inter md:text-xl lg:heading-3">{value.heading}</p>
                                            <div className="h-[25px] w-[25px] rounded-t-[10px] border border-black md:hidden"></div>
                                        </div>

                                        {/* question and answer */}
                                        <div className="border border-black rounded-t-[20px] faq">
                                            {
                                                value.faq.map((faq, index) => (
                                                    <div key={index} className="border-t border-black first:border-t-0">
                                                        {/* Question */}
                                                        <div className="pl-[18px] pr-2 flex justify-between items-center pt-1 pb-2 lg:pt-[14px] lg:px-5 lg:pb-[21px]" onClick={() => _handleToggle(faq.id)}>
                                                            <p className="text-black font-inter text-sm leading-[21px] md:body-text">{faq.question}</p>
                                                            <div className="relative w-[17px] h-[17px] cursor-pointer lg:w-[42px] lg:h-[42px]">
                                                                <Image src={isActive(faq.id, activeIndex) ? close : open} alt="" layout="fill" className="object-contain" />
                                                            </div>
                                                        </div>
                                                        {/* Answer */}
                                                        <div
                                                            ref={faqAnswerElement}
                                                            className={`transition-all ease-in-out duration-[700ms] overflow-hidden ${isActive(faq.id, activeIndex) ? "opacity-100" : "opacity-0"}`}
                                                            style={
                                                                isActive(faq.id, activeIndex)
                                                                    ? {
                                                                        height: faqAnswerElement.current?.scrollHeight,
                                                                    }
                                                                    : {
                                                                        height: 0,
                                                                    }


                                                            }
                                                        >
                                                            <p className="font-inter text-gray2 text-xs leading-[18px] pl-[18px] pr-9 pb-5 md:text-sm lg:leading-[27px] lg:pr-[60px]">{faq.answer}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Appointment />
            <div className="pb-[232px] md:pb-[455px]" />
        </Layout >
    )
}

export default Faq