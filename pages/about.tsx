import Image from 'next/image'
import Button from '../components/input/button'
import Layout from '../components/layout'
import Clinicians from '../components/sections/Clinicians'
import Appointment from '../components/sections/Appointment'

// css styles
import styles from '../styles/Home.module.css'

// images
import clip from "../public/assets/hero/clip.svg"
import three from "../public/assets/hero/3.svg"
import twoWomen from "../public/assets/images/two-women.png"
import coaching from "../public/assets/images/coaching.png"
import coloredCircle from "../public/assets/images/colored-circles.svg"
import starShape from "../public/assets/images/star-shape.svg"
import whoOne from "../public/assets/images/who1.svg"
import { goals } from '../utils/data'




const About = () => {
    return (
        <Layout>
            <section className="layout-container pt-[65px] lg:pt-[100px]">
                <div className="relative border border-black rounded-t-[100px] w-[325px] h-[255px] pt-[71px] pr-6 pl-[31px] mx-auto md:h-[185px] md:w-4/5 lg:px-[40px] lg:rounded-t-[200px] lg:h-[310px] lg:pt-[123px] xl:px-[68px] xl:w-[1080px]">
                    <div className="absolute w-[68px] h-[70px] -right-3 -top-[14px] xs:w-[81px] xs:h-[83px] xs:-top-7 lg:w-[132px] lg:h-[135px] lg:right-10 lg:-top-[70px]">
                        <Image src={starShape} alt="" layout="responsive" />
                    </div>
                    <div className="hidden w-[150px] h-[71px] md:block md:absolute -top-5 -left-5 lg:w-[215px] lg:-left-1">
                        <Image src={whoOne} alt="" layout="responsive" />
                    </div>
                    <h2 className={`mob-h2 text-center lg:text-4xl ${styles.jeko_regular}`}> <span className="text-lightBlueTertiary">Our Brand</span>: Discover resilience, discover yourself and Connect to the world </h2>
                </div>
            </section>

            {/* Goals */}
            <section className="layout-container mt-[194px]">
                <div className="space-y-[50px] md:mx-auto md:w-4/5 xl:w-[1083px] error">
                    {
                        goals.map((value, index) => (
                            <div key={index} className="flex items-center space-x-[38px]">
                                <div className="relative w-[150px] h-[103px] xl:w-[81px] xl:h-[93px] error">
                                    <Image src={value.icon} alt="" layout="fill" className="object-contain"/>
                                </div>
                                <p className="heading-3 text-textColor">{value.goal}</p>
                            </div>
                        ))
                    }
                </div>
            </section>
            <Clinicians />
            <section className="layout-container">
                <h2 className={`mob-h2 text-center mt-10 mb-8 md:heading-2 lg:mt-20 ${styles.jeko_regular}`}>
                    Our personalized approach to {" "}
                    <span className="relative">
                        Care
                        <div className="hidden absolute top-[55px] left-2 w-[110px] lg:block">
                            <Image src={clip} alt='' layout='responsive' />
                        </div>
                    </span>
                </h2>

                <div className="flex flex-col items-center space-y-10 mt-[33px] xs:mt-[50px] xs:space-y-20 xl:flex-row xl:space-y-0 xl:justify-between">
                    {/* Counselling */}
                    <div className="relative w-[205px] h-[262px] border border-black rounded-t-[100px] pt-[35px] xs:w-[360px] xs:h-[420px]">
                        <div className="absolute w-[45px] h-[43px] -left-[22px] bottom-2 xs:w-[82px] xs:h-[77px] xs:-bottom-10 xs:-left-10">
                            <Image src={coloredCircle} alt="" layout="responsive" />
                        </div>
                        <div>
                            <Image src={twoWomen} alt="" layout="responsive" />
                        </div>
                        <h4 className={`body-text font-inter text-center mt-[6px] mb-2 xs:heading-3 xs:mt-[17px] xs:mb-[9px] xs:${styles.jeko_regular}`}>Counselling</h4>
                        <Button
                            href="/"
                            title="Learn More"
                            className="w-[134px] h-[40px] font-inter font-bold text-base text-black leading-6  flex justify-center items-center mx-auto border border-textColor rounded-t-[20px] xs:w-[240px] xs:button-text xs:h-[50px]"
                            arrowStyle='w-2 h-2 ml-[3px] xs:w-5 xs:h-5 xs:ml-7'
                        />
                    </div>
                    {/* end of counselling */}


                    {/* Coaching */}
                    <div className="relative w-[205px] h-[262px] border border-black rounded-t-[100px] pt-[35px] xs:w-[360px] xs:h-[420px]">
                        <div className="absolute w-[68px] h-[70px] -right-3 -top-[14px] xs:w-[81px] xs:h-[83px] xs:-top-7">
                            <Image src={starShape} alt="" layout="responsive" />
                        </div>
                        <div className="w-[203px] h-[124px] relative xs:w-[358px] xs:h-[219px]">
                            <Image src={coaching} alt="" layout="fill" className="object-contain" />
                        </div>
                        <h4 className={`body-text font-inter text-center mt-[6px] mb-2  xs:heading-3 xs:mt-[17px] xs:mb-[9px] xs:${styles.jeko_regular}`}>Coaching</h4>
                        <Button
                            href="/"
                            title="Learn More"
                            className="w-[134px] h-[40px] font-inter font-bold text-base text-black leading-6  flex justify-center items-center mx-auto border border-textColor rounded-t-[20px] xs:w-[240px] xs:button-text xs:h-[50px]"
                            arrowStyle='w-2 h-2 ml-[3px] xs:w-5 xs:h-5 xs:ml-7'
                        />
                    </div>
                    {/* end of coaching */}


                    {/* WorkShops */}
                    <div className="relative w-[205px] h-[262px] border border-black rounded-t-[100px] pt-[35px] xs:w-[360px] xs:h-[420px]">
                        <div className="absolute w-[34px] h-[38px] -right-3 bottom-4 xs:w-16 xs:h-[72px] xs:-bottom-4">
                            <Image src={three} alt="" layout="responsive" />
                        </div>
                        <div>
                            <Image src={twoWomen} alt="" layout="responsive" />
                        </div>
                        <h4 className={`body-text font-inter text-center mt-[6px] mb-2  xs:heading-3 xs:mt-[17px] xs:mb-[9px] xs:${styles.jeko_regular}`}>Workshops</h4>
                        <Button
                            href="/"
                            title="Learn More"
                            className="w-[134px] h-[40px] font-inter font-bold text-base text-black leading-6  flex justify-center items-center mx-auto border border-textColor rounded-t-[20px] xs:w-[240px] xs:button-text xs:h-[50px]"
                            arrowStyle='w-2 h-2 ml-[3px] xs:w-5 xs:h-5 xs:ml-7'
                        />
                    </div>
                    {/* end of workshops */}
                </div>
            </section>
            <Appointment />
            <div className="pb-[232px] md:pb-[455px]" />
        </Layout>
    )
}

export default About