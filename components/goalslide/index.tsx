import { useRef } from 'react';
import Image from 'next/image'
import Slider from 'react-slick';
import { goals } from '../../utils/data'

// images
import leftArrow from "../../public/assets/arrows/left-arrow.svg"
import rightArrow from "../../public/assets/arrows/right-arrow.svg"

const GoalsSlide = () => {
    const sliderRef = useRef<Slider | null>(null);
    const settings = {
        className: "center",
        // centerPadding: "40px",
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        arrows: false,
        responsive: [
            {
                breakpoint: 767,
            },
            {
                breakpoint: 10000, // a unrealistically big number to cover up greatest screen resolution
                settings: 'unslick'
            }
        ]
    };

    const next = () => sliderRef?.current?.slickNext();
    const prev = () => sliderRef?.current?.slickPrev();
    return (
        <section className="mt-[82px] md:mt-[194px]">
            <h2 className="layout-container mob-h2 text-textColor mb-2 md:hidden">Goals</h2>
            <div className="md:mx-auto md:w-4/5  xl:w-[1083px]">
                <Slider {...settings} ref={sliderRef}>
                    {
                        goals.map((value, index) => (
                            <div key={index} className="md:flex md:items-center md:my-[37px] md:space-x-[38px]">
                                <div className="relative mx-auto mb-5 w-[58px] h-[67px] md:mb-0 md:mx-0 md:w-[150px] md:h-[103px] xl:w-[81px] xl:h-[93px]">
                                    <Image src={value.icon} alt="" layout="fill" className="object-contain" />
                                </div>
                                <p className="caption px-2 font-inter text-center text-textColor md:text-left md:px-0 md:heading-3">{value.goal}</p>
                            </div>
                        ))
                    }

                </Slider>
            </div>
            <div className="layout-container flex items-center space-x-5 mt-5 md:hidden">
                <div className="w-5 h-4" onClick={prev}>
                    <Image src={leftArrow} alt="" layout="responsive" />
                </div>
                <div className="w-5 h-4" onClick={next}>
                    <Image src={rightArrow} alt="" layout="responsive" />
                </div>
            </div>
        </section>
    )
}

export default GoalsSlide

{/* <div className="flex space-x-3 md:space-x-0 md:space-y-[50px] md:mx-auto md:w-4/5 xl:w-[1083px] error">
{
    goals.map((value, index) => (
        <div key={index} className="md:flex md:items-center md:space-x-[38px]">
            <div className="relative w-[58px] h-[67px] md:w-[150px] md:h-[103px] xl:w-[81px] xl:h-[93px] error">
                <Image src={value.icon} alt="" layout="fill" className="object-contain" />
            </div>
            <p className="caption font-inter text-center text-textColor md:text-left md:heading-3">{value.goal}</p>
        </div>
    ))
}
</div> */}