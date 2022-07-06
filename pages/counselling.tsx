import Layout from "../components/layout"
import Image from "next/image"
import { services } from "../utils/data"
import Button from "../components/input/button"
import Review from "../components/review"
import Contact from "../components/sections/Contact"
import Clinicians from "../components/sections/Clinicians"

// css styles
import styles from '../styles/Home.module.css'

// images
import women from "../public/assets/services/women.png"
import clip from "../public/assets/navbar/clip.svg"
import coaching from "../public/assets/images/coaching.png"
import starShape from "../public/assets/images/star-shape.svg"
import twoWomen from "../public/assets/images/two-women.png"
import three from "../public/assets/hero/3.svg"




const Counselling = () => {
    return (
        <Layout title="Services - Counselling">
            {/* hero  */}
            <section className="layout-container pt-[65px] md:pt-[70px]">
                <h1 className={`text-center mob-h1 text-textColor mb-3 xxs:w-[327px] xxs:mx-auto xs:w-full md:heading-1 md:mb-[42px] lg:w-[900px] lg:pt-5 ${styles.jeko_regular}`}>Counselling for your self, family and partners</h1>
                <div className="relative mb-10 h-[177px] w-[280px] mx-auto md:h-[351px] md:w-[380px] md:mb-[50px]">
                    <Image src={women} alt="" layout="fill" className="object-contain" />
                </div>
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
                                <h2 className="heading-2 mt-[11px] mb-[6px] md:heading-1 md:mb-8">{value.price}</h2>
                                <Button
                                    href=""
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
                        <div>
                            <Image src={twoWomen} alt="" layout="responsive" />
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
