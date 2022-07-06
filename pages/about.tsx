import Image from 'next/image'
import Button from '../components/input/button'
import Layout from '../components/layout'
import Clinicians from '../components/sections/Clinicians'
import Appointment from '../components/sections/Appointment'
import GoalsSlide from '../components/goalslide'
import { statement } from '../utils/data'

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
// import people from "../public/assets/about/about-people-group.png"
import people from "../public/assets/about/people.gif"




const About = () => {
    return (
        <Layout title="About us">
            <section className="layout-container pt-[65px] lg:pt-[100px]">
                <div className="relative border border-black rounded-t-[100px] w-[325px] h-[255px] pt-[71px] pr-6 pl-[31px] mx-auto md:h-[185px] md:w-4/5 lg:px-[40px] lg:rounded-t-[200px] lg:h-[310px] lg:pt-[123px] xl:px-[68px] xl:w-[1080px]">
                    <div className="absolute w-[68px] h-[70px] -right-3 -top-[14px] xs:w-[81px] xs:h-[83px] xs:-top-7 lg:w-[132px] lg:h-[135px] lg:right-10 lg:-top-[70px]">
                        <Image src={starShape} alt="" layout="responsive" />
                    </div>
                    <div className="hidden w-[150px] h-[71px] md:block md:absolute -top-5 -left-5 lg:w-[215px] lg:-left-1">
                        <Image src={whoOne} alt="" layout="responsive" />
                    </div>
                    <h2 className={`mob-h2 text-center lg:text-4xl xl:heading-2 ${styles.jeko_regular}`}> <span className="text-lightBlueTertiary">Our Brand</span>: Discover resilience, discover yourself and Connect to the world </h2>
                </div>
            </section>

            <div className="layout-container mt-[41px] mb-[6px] w-[322px] md:w-4/5 lg:w-[800px]">
                <Image src={people} alt="" layout="responsive" />
            </div>

            {/* mission and vision */}
            <section className="layout-container lg:mt-[69px]">
                <div className="lg:flex lg:flex-col lg:space-y-[100px]">
                    {
                        statement.map((item, index) => (
                            <div key={index} className={`w-[322px] mx-auto md:w-4/5 lg:w-11/12 lg:flex lg:justify-between lg:items-start xl:w-[1081] xl:h-[450px] ${index === 1 ? 'xl:items-center' : ''}`}>
                                <div className="text-center lg:w-[500px] xl:w-[635px]">
                                    <h2 className={`mob-h2 text-lightBlueTertiary md:heading-1 ${styles.jeko_regular}`}>{item.name}</h2>
                                    <p className="body-text font-inter md:heading-3">{item.description}</p>
                                </div>
                                <div className={`w-[181px] mx-auto mt-[55px] md:w-[314px] lg:mx-0  ${index === 1 ? 'hidden lg:block -order-1 lg:self-start lg:ml-12' : 'mb-[53px] self-end lg:mr-10'}`}>
                                    <Image src={item.image} alt="" layout="responsive" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

            {/* Goals */}
            <GoalsSlide />
            <Clinicians />
            <section className="layout-container">
                <h2 className={`mob-h2 text-center mt-10 mb-8 md:heading-2 lg:mt-[168px] ${styles.jeko_regular}`}>
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
                            href="/counselling"
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
                            href="/coaching"
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
                        <h4 className={`body-text font-inter text-center mt-[6px] mb-2  xs:heading-3 xs:mt-[17px] xs:mb-[9px] xs:${styles.jeko_regular}`}>Blog</h4>
                        <Button
                            href="/blog"
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