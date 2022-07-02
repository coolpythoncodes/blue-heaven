import Image from "next/image";
import Slider from "react-slick";
import { whoWeArDetails } from "../../utils/data";
import Button from "../input/button";
import SideArrow from "../slideArrow";

// css
import styles from "../../styles/Home.module.css";

// images
import whoOne from "../../public/assets/images/who1.svg"
import whoStar from "../../public/assets/images/who-star.svg"

const WhoWeAreSlide = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SideArrow direction="right" />,
        prevArrow: <SideArrow direction="left" />,
    };
    return (
        <div className="relative text-textColor w-[280px] xxs:w-[311px] mx-auto xs:w-[436px]">
            <div className="hidden w-[209px] h-[71px] lg:block lg:absolute lg:-left-[250px] lg:top-[380px]">
                <Image src={whoOne} alt="" layout="responsive" />
            </div>
            <div className="hidden w-[132px] h-[135px] lg:block lg:absolute lg:-right-[250px] lg:top-[400px]">
                <Image src={whoStar} alt="" layout="responsive" />
            </div>
            <Slider {...settings}>
                {
                    whoWeArDetails.map((value, index) => (
                        <div key={index} className=''>
                            <div className="relative w-[280px] h-[194px] xs:w-[436px] xxs:w-[311px] md:h-[250px]">
                                <Image src={value.image} alt="" layout="fill" className="object-contain" />
                            </div>
                            <div className="mt-[54px] text-center">
                                <h2 className={`mob-h2 xs:heading-2 xs:mb-[14px] ${styles.jeko_regular}`}>{value.heading}</h2>
                                <p className="body-text font-inter mb-[29px]">{value.description}</p>
                                <Button
                                    href={value.href}
                                    title="Book Now"
                                    className="w-[133px] h-[50px] bg-lightBlueTertiary border border-textColor body-text font-inter flex items-center justify-center mx-auto rounded-t-[20px] hover:bg-creamSecondaryBg xs:w-[211px] xs:button-text"
                                    arrowStyle="h-[10px] w-[10px] ml-1 xs:h-5 xs:w-5 xs:ml-[15px]"
                                />
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default WhoWeAreSlide