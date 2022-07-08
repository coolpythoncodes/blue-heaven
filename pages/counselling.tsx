import { SetStateAction, useEffect, useRef, useState } from "react"
import Layout from "../components/layout"
import Image from "next/image"
import { bookingUrl, counsellingProcess, services } from "../utils/data"
import Button from "../components/input/button"
import Review from "../components/review"
import Contact from "../components/sections/Contact"
import Clinicians from "../components/sections/Clinicians"

// css styles
import styles from '../styles/Home.module.css'

// images
// import women from "../public/assets/services/women.png"
import clip from "../public/assets/navbar/clip.svg"
import coaching from "../public/assets/images/coaching.gif"
import starShape from "../public/assets/images/star-shape.svg"
import twoWomen from "../public/assets/images/two-women.gif"
import three from "../public/assets/hero/3.svg"




const Counselling = () => {

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
        <Layout title="Services - Counselling">
            {/* hero  */}
            <section className="layout-container pt-[65px] md:pt-[70px]">
                <h1 className={`text-center mob-h1 text-textColor mb-3 xxs:w-[327px] xxs:mx-auto xs:w-full md:heading-1 md:mb-[42px] lg:w-[900px] lg:pt-5 ${styles.jeko_regular}`}>Counselling for your self, family and partners</h1>
                <div className="relative mb-10 h-[177px] w-[280px] mx-auto md:h-[351px] md:w-[380px] md:mb-[50px]">
                    <Image src={twoWomen} alt="" layout="fill" className="object-contain" />
                </div>


                <section ref={rootElement} className="mb-[65px] md:mt-[137px] md:layout-container">
                    <h1 className={`mob-h2  text-center text-textColor mb-[53px] md:font-inter font-extrabold md:text-left md:text-[40px] md:leading-[48px] md:mb-[59px] ${styles.jeko_regular}`}>Understanding the Counselling Process</h1>
                    <div className="md:grid md:grid-cols-[1fr_2fr]">
                        <div className="hidden md:block xl:w-[420px]">
                            <div className="flex flex-col space-y-[19px] sticky top-[140px]">
                                {
                                    counsellingProcess.map((value, index) => (
                                        <div key={index} className="h-[43px] w:[200px]  border border-black rounded-t-[20px] pt-[10px] pb-1 px-[21px] flex justify-between items-center md:h-[61px]">
                                            <p className={`text-sm text-black lg:text-lg xl:heading-3 ${styles.jeko_regular}`}>{value.heading}</p>
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
                                        counsellingProcess.map((value, index) => (
                                            <div key={index}>
                                                <div
                                                    id={value.id}
                                                    className="right-header h-[43px] border border-black rounded-t-[20px] bg-blueBg pt-[10px] pb-1 px-[21px] flex justify-between items-center mb-6 md:h-12 md:p-0 md:flex md:justify-center md:w-fit md:px-8">
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
                                                                <p className={`body-text font-inter text-textColor md:heading-3 md:${styles.jeko_regular}`} dangerouslySetInnerHTML={{ __html: value.text }} />
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

                <h2 className={`mob-h2 text-center text-textColor mb-[27px] md:heading-2 md:mb-[50px] ${styles.jeko_regular}`}>All Counselling Services</h2>
                <div className="flex flex-col items-center space-y-[62px] lg:flex-row lg:flex-wrap lg:justify-around lg:space-y-0 lg:gap-y-[132px]">
                    {
                        services.map((value, index) => (
                            <div key={index} className="border border-black w-[327px] h-[481px] rounded-t-[100px] pt-[29px] text-center text-textColor md:w-[530px] md:h-[600px] md:pt-[42px]">
                                <h4 className="body-text relative font-inter mb-10 md:heading-3 md:mb-[72px]">
                                    {value.heading}
                                    <div className="absolute top-6 left-[120px] w-[65px] md:top-10 md:left-[220px] md:w-[110px]">
                                        <Image src={clip} alt='' layout='responsive' />
                                    </div>
                                </h4>
                                <p className="font-inter font-normal text-[15px] leading-[23px] px-5 md:body-text md:px-8 md:mb-[54px]">{value.description}</p>
                                <h2 className={`heading-2 mt-[11px] mb-[6px] md:heading-1 md:mb-8 ${styles.jeko_regular}`}>{value.price}</h2>
                                <Button
                                    href={bookingUrl}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    title="Book Now"
                                    className="w-[133px] h-[50px] bg-lightBlueTertiary border border-textColor body-text font-inter flex items-center justify-center mx-auto rounded-t-[20px] md:w-[211px] md:button-text hover:bg-transparent"
                                    arrowStyle="h-[10px] w-[10px] ml-1 md:h-5 md:w-5 md:ml-[15px]"
                                />
                            </div>
                        ))
                    }
                </div>
            </section>
            {/* end of hero */}

            <Clinicians />
            <Review />

            {/* Other services */}
            <section className="layout-container mt-20">
                <h2 className={`mob-h2 text-textColor text-center md:heading-2 ${styles.jeko_regular}`}>Other Services</h2>

                <div className="flex flex-col items-center mt-[34px] space-y-[39px] md:mt-[61px] md:space-y-[80px] lg:space-y-0 lg:flex-row lg:space-x-[62px] lg:justify-center">
                    {/* Coaching */}
                    <div className="relative w-[205px] h-[262px] border border-black rounded-t-[100px] pt-[35px] xs:w-[360px] xs:h-[420px] md:w-[370px]">
                        <div className="absolute w-[68px] h-[70px] -right-3 -top-[14px] xs:w-[81px] xs:h-[83px] xs:-top-7">
                            <Image src={starShape} alt="" layout="responsive" />
                        </div>
                        <div className="w-[203px] h-[124px] relative xs:w-[358px] xs:h-[219px] mx-auto">
                            <Image src={coaching} alt="" layout="fill" className="object-contain" />
                        </div>
                        <h4 className={`body-text font-inter text-center mt-[6px] mb-2  xs:heading-3 xs:mt-[17px] xs:mb-[9px] xs:${styles.jeko_regular}`}>Coaching</h4>
                        <Button
                            href="/coaching"
                            title="Learn More"
                            className="w-[134px] h-[40px] font-inter font-bold text-base text-black leading-6 flex justify-center items-center mx-auto border border-textColor rounded-t-[20px] xs:w-[240px] xs:button-text xs:h-[50px]"
                            arrowStyle='w-2 h-2 ml-[3px] xs:w-5 xs:h-5 xs:ml-7'
                        />
                    </div>
                    {/* end of coaching */}


                    {/* WorkShops */}
                    <div className="relative w-[205px] h-[262px] border border-black rounded-t-[100px]  pt-[35px] xs:w-[360px] xs:h-[420px] md:w-[370px]">
                        <div className="absolute w-[34px] h-[38px] -right-3 bottom-4 xs:-bottom-4 xs:w-16 xs:h-[72px]">
                            <Image src={three} alt="" layout="responsive" />
                        </div>
                        <div className="w-[203px] h-[124px] relative xs:w-[358px] xs:h-[219px] mx-auto">
                            <Image src={twoWomen} alt="" layout="fill" className="object-contain" />
                        </div>
                        <h4 className={`body-text font-inter text-center mt-[6px] mb-2 xs:heading-3 xs:mt-[17px] xs:mb-[9px] xs:${styles.jeko_regular}`}>Blog</h4>
                        <Button
                            href="/blog"
                            title="Learn More"
                            className="w-[134px] h-[40px] font-inter font-bold text-base text-black leading-6  flex justify-center items-center mx-auto border border-textColor rounded-t-[20px] xs:mb-7 xs:w-[240px] xs:button-text xs:h-[50px]"
                            arrowStyle='w-2 h-2 ml-[3px] xs:w-5 xs:h-5 xs:ml-7'
                        />
                    </div>
                    {/* end of workshops */}
                </div>
            </section>

            <Contact />
        </Layout >
    )
}

export default Counselling
