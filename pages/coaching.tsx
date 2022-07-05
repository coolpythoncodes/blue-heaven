import { SetStateAction, useEffect, useRef, useState } from "react"
import Image from "next/image"
import Layout from "../components/layout"
import Review from "../components/review"
import Clinicians from "../components/sections/Clinicians"
import Contact from "../components/sections/Contact"


// css styles
import styles from '../styles/Home.module.css'

// Images
import coaching from "../public/assets/images/coaching.png"
import starShape from "../public/assets/images/star-shape.svg"
import { coachingProgramFunction } from "../utils/data"


const Coaching = () => {
    const [activeSection, setActiveSection] = useState('100')

    const rightSection = useRef<HTMLDivElement>(null)

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
                setActiveSection(entry.target.getAttribute('id'))
            }
        })
    }


    useEffect(() => {
        const _rightSection = rightSection.current?.querySelectorAll(".right-header");

        const observer = new IntersectionObserver(callback, options);
        _rightSection?.forEach(section => observer.observe(section))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Layout title="Services - Coaching">
            <section className="layout-container pt-[65px] md:pt-[100px] mb-[77px] md:mb-[215px]">
                <h1 className={`text-center mob-h1 text-textColor mb-8 xxs:w-[327px] xxs:mx-auto xs:w-full md:heading-1 md:mb-[55px] lg:w-[900px] lg:pt-5 ${styles.jeko_regular}`}>Coaching for yourself, family and partners</h1>
                <div className="relative mx-auto w-[241px] h-[197px] border border-black rounded-t-[100px] md:w-[370px] md:h-[302px]">
                    <div className="absolute w-[53px] h-[54px] -right-2 -top-[14px] xs:w-[81px] xs:h-[83px] xs:-top-7">
                        <Image src={starShape} alt="" layout="responsive" />
                    </div>
                    <div className="mt-5 relative h-[157px] w-4/5 mx-auto md:mt-[31px] md:h-[240px]">
                        <Image src={coaching} alt="" layout="fill" className="object-contain" />

                    </div>

                </div>
            </section>

            <section ref={rootElement} className="mb-[3px] md:layout-container">
                <h1 className={`mob-h2  text-center text-textColor mb-[53px] md:font-inter font-medium md:text-left md:text-[40px] md:leading-[48px] md:mb-[59px] ${styles.jeko_regular}`}>How does BHCC’s coaching program function?</h1>
                <div className="md:grid md:grid-cols-[1fr_2fr]">
                    <div className="hidden md:block lg:w-[420px]">
                        <div className="flex flex-col space-y-[19px] sticky top-[140px]">
                            {
                                coachingProgramFunction.map((value, index) => (
                                    <div key={index} className="h-[43px] w:[200px]  border border-black rounded-t-[20px] pt-[10px] pb-1 px-[21px] flex justify-between items-center md:h-[61px]">
                                        <p className={`text-xl text-black lg:heading-3 ${styles.jeko_regular}`}>{value.heading}</p>
                                        <div className={`h-[25px] w-[25px] rounded-t-[10px] border border-black  ${value.id === activeSection && 'bg-lightBlueTertiary'}`}></div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="w-[297px] mx-auto md:mx-0 md:ml-auto md:w-[400px] lg:w-[450px] xl:w-[551px]">
                            <div className="flex flex-col space-y-[52px] md:space-y-[64px]" ref={rightSection}>
                                {
                                    coachingProgramFunction.map((value, index) => (
                                        <div key={index}>
                                            <div
                                                id={value.id}
                                                className="right-header h-[43px] border border-black rounded-t-[20px] bg-blueBg pt-[10px] pb-1 px-[21px] flex justify-between items-center mb-6 md:h-12 md:p-0 md:flex md:justify-center md:w-[201px]">
                                                <p className="body-text text-white font-inter md:text-xl lg:heading-3">{value.heading}</p>
                                                <div className={`h-[25px] w-[25px] rounded-t-[10px] border border-black  ${value.id === activeSection && 'bg-lightBlueTertiary'} md:hidden`}></div>
                                            </div>

                                            <div className="">
                                                {
                                                    value.more.map((value, index) => (
                                                        <div key={index}>
                                                            <div className="relative h-[148px] border border-black mb-4 md:w-[350px] lg:mb-9 lg:w-[400px] xl:w-[500px] lg:h-[248px]">
                                                                <Image src={value.image} alt="" layout="fill" className="object-contain" />
                                                            </div>
                                                            <p className={`body-text font-inter text-textColor md:heading-3 md:${styles.jeko_regular}`}>{value.text}</p>
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
            </section>
            <Clinicians />
            <Review />
            <Contact />

        </Layout>
    )
}

export default Coaching