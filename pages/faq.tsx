import { SetStateAction, useEffect, useRef, useState } from "react"
import Layout from "../components/layout"
import Appointment from "../components/sections/Appointment"
import { faq } from "../utils/data"
import FaqWidget from "../components/faqWidget"

// css styles
import styles from '../styles/Home.module.css'



const Faq = () => {
    const [activeSection] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeFaq, setActiveFaq] = useState('100')
    const faqSections = useRef<HTMLDivElement>(null);

    const rootElement = useRef<HTMLDivElement>(null);
    const options = {
        root: rootElement.current,
        rootMargin: "0px 0px -70% 0px",
        // threshold: 0
    }

    // const currentSection = useRef('')

    const callback = (entries: any[]) => {
        entries.forEach((entry: { intersectionRatio: number; target: { getAttribute: (arg0: string) => SetStateAction<string> } }) => {
            if (entry.intersectionRatio > 0) {
                setActiveFaq(entry.target.getAttribute('id'))
            }
        })
    }


    const _handleToggle = (id: number) => {
        setActiveIndex(id === activeIndex ? -1 : id);
    };

    const isActive = (id: number, activeIndex: number) => {
        if (id === activeIndex) return true
        else return false
    }

    useEffect(() => {
        const _faqSections = faqSections.current?.querySelectorAll(".faq-header");

        const observer = new IntersectionObserver(callback, options);
        _faqSections?.forEach(section => observer.observe(section))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setActiveIndex(1);

    }, [activeSection]);


    return (
        <Layout title="FAQ">
            <div ref={rootElement} className="md:layout-container md:grid md:grid-cols-2 pt-10 lg:pt-[65px] lg:mb-[164px]">
                <div className="hidden w-full md:block lg:w-[420px]">
                    <div className="flex flex-col space-y-[19px] sticky top-[140px]">
                        {
                            faq.map((value, index) => (
                                <div key={index} className="h-[43px] w:[200px]  border border-black rounded-t-[20px] pt-[10px] pb-1 px-[21px] flex justify-between items-center md:h-[61px]">
                                    <p className={`text-xl text-black lg:heading-3 ${styles.jeko_regular}`}>{value.heading}</p>
                                    <div className={`h-[25px] w-[25px] rounded-t-[10px] border border-black ${value.id === activeFaq && 'bg-lightBlueTertiary'}`}></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* FAQ section */}
                <div className="flex justify-end" >
                    <div className="w-[297px] mx-auto md:mx-0 ml-auto lg:w-[750px]">
                        <h1 className={`text-black text-center mob-h1 mb-[35px] md:text-left md:mb-5 lg:heading-1 ${styles.jeko_regular}`}>FAQs</h1>
                        <div className="flex flex-col space-y-[49px]" ref={faqSections}>
                            {
                                faq.map((value, index) => (
                                    <div
                                        key={index}
                                        className="">
                                        {/* faq heading */}
                                        <div
                                            id={value.id}
                                            className="faq-header h-[43px] border border-black rounded-t-[20px] bg-blueBg pt-[10px] pb-1 px-[21px] flex justify-between items-center mb-[31px] md:h-12 md:p-0 md:flex md:justify-center md:w-[201px]">
                                            <p className="body-text text-white font-inter md:text-xl lg:heading-3">{value.heading}</p>
                                            <div className={`h-[25px] w-[25px] rounded-t-[10px] border border-black ${value.id === activeFaq && 'bg-lightBlueTertiary'} md:hidden`}></div>
                                        </div>

                                        {/* question and answer */}
                                        <div className="border border-black rounded-t-[20px] faq">
                                            {
                                                value.faq.map((faq, index) => (
                                                    <FaqWidget  
                                                        key={index}
                                                        active={isActive(faq.id, activeIndex)}
                                                        onToggle={() => _handleToggle(faq.id)}
                                                        faq={faq}
                                                    />
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
