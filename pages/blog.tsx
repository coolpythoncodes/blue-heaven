import Image from "next/image"
import Layout from "../components/layout"

// css styles
import styles from '../styles/Home.module.css'

// images
import comingSoon from "../public/assets/images/coming-soon.png"
import arrow from "../public/assets/arrows/top-right-arrow.svg"
import one from "../public/assets/hero/1.svg"
import three from "../public/assets/hero/3.svg"



const Blog = () => {
    return (
        <Layout title="Blog">
            <section className="layout-container pt-[65px] pb-[247px] md:pb-[508px] md:pt-10">
                <div className="relative w-[194px] mx-auto h-[229px] md:w-[240px] md:h-[300px]">
                    <Image src={comingSoon} alt="" layout="fill" className="object-contain" />
                    <div className="absolute w-[58px] h-[60px] -left-[50px] md:w-[109px] md:h-[103px] md:-left-[100px] md:top-10">
                        <Image src={one} alt="" layout="responsive" />
                    </div>
                    <div className="absolute bottom-3 -right-[50px] w-[45px] h-[51px] md:w-[66px] md:h-[74px] md:-right-[72px] md:bottom-[130px]">
                        <Image src={three} alt="" layout="responsive" />
                    </div>
                </div>
                <h1 className={`mob-h1 text-textColor text-center md:heading-1 ${styles.jeko_regular}`}>Coming Soon</h1>
                <form className="mt-[29px] md:mt-[50px] md:grid md:grid-cols-[2fr_1fr] md:gap-x-[22px] md:items-center md:w-11/12 md:mx-auto lg:w-[819px]">
                    <div className="border border-black rounded-t-[20px] h-[49px] w-[234px] mx-auto px-5 py-[15px] md:h-[50px] md:w-full">
                        <input type="text" placeholder="Your email address" className="text-gray3 bg-transparent block pl-4 w-full focus:outline-none font-inter text-base leading-[19px] font-medium md:button-text" />
                    </div>
                    <button className="mt-[15px] flex items-center justify-center mx-auto rounded-t-[20px] w-[133px] h-[50px] border border-textColor bg-lightBlueTertiary body-text font-inter text-textColor hover:bg-transparent md:mt-0 md:w-[211px] md:button-text">
                        Notify me
                        <div className="relative w-[10px] h-[10px] ml-[10px] md:ml-5 md:h-5 md:w-5">
                            <Image src={arrow} alt="" layout="fill" className="object-contain" />
                        </div>
                    </button>
                </form>
            </section>
        </Layout>
    )
}

export default Blog