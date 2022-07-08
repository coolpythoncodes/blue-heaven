import { useEffect, useRef, useState } from "react";
import Image from "next/image"
import { reviews } from "../../utils/data"
import useWindowDimensions from "../../hooks/useWindowDimensions";

// css
import styles from "../../styles/Home.module.css";

// images
import quote from "../../public/assets/review/quote.svg"
import girl from "../../public/assets/review/girl.svg"
import leftArrow from "../../public/assets/arrows/left-arrow.svg"
import rightArrow from "../../public/assets/arrows/right-arrow.svg"

const Review = () => {
    const reviewRef = useRef(null as HTMLElement | null)
    const [sliderOffSet, setSliderOffSet] = useState(0)
    const { width } = useWindowDimensions();

    useEffect(() => {
        if (width) {
            if (width < 992) {
                setSliderOffSet(-21)
            } else {
                setSliderOffSet(0)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width])

    useEffect(() => {
        let slideWidth: number
        let currentNumber: number
        let currentSlide: HTMLElement | Element | null | undefined

        const reviewBoxElementArray = reviewRef?.current?.querySelectorAll(".review-box");
        const arrowElements = reviewRef?.current?.querySelectorAll(".slide_arrow");

        if (reviewBoxElementArray) {
            reviewBoxElementArray[0].classList.add("is--current");
            slideWidth = reviewBoxElementArray[0].clientWidth - sliderOffSet;
            currentSlide = reviewRef?.current?.querySelector<HTMLElement>(".is--current");
        }


        if (arrowElements) {
            for (let i = 0; i < arrowElements.length; i++) {
                const element = arrowElements[i];
                // on arrow click
                element.addEventListener("click", () => {
                    // update current slide
                    currentSlide?.classList.remove("is--current");
                    if (element.classList.contains("left_arrow")) {
                        // update current slide if left
                        if (currentSlide?.previousElementSibling) {
                            currentSlide = currentSlide?.previousElementSibling;
                            currentSlide?.classList.add("is--current");
                        }
                    } else {
                        // update current slide if left
                        if (currentSlide?.nextElementSibling) {
                            currentSlide = currentSlide?.nextElementSibling;
                            currentSlide?.classList.add("is--current");
                        }
                    }

                    if (reviewBoxElementArray) {
                        currentNumber = Array.from(reviewBoxElementArray).indexOf(currentSlide as Element);
                        let slideMove = slideWidth * currentNumber;
                        if (reviewRef?.current?.querySelector(".review-box.is--current")) {
                            reviewRef?.current?.querySelector(".review-box.is--current")?.classList.add("is--animating");
                        }
                        if (reviewRef?.current?.querySelectorAll(".review-box.is--animating ~ .review-box, .review-box.is--animating")) {
                            reviewRef?.current?.querySelectorAll(".review-box.is--animating ~ .review-box, .review-box.is--animating").forEach(element => {
                                // @ts-ignore
                                element.style.transform = `translateX(-${slideMove}px)`;
                            });
                        }
                        if (reviewRef?.current?.querySelector(".review-box.is--current")) {
                            reviewRef?.current?.querySelector(".review-box.is--current")?.classList.remove("is--animating");
                        }
                    }
                })

            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if(width){
            // if(width > 768){
                if (reviewRef?.current?.querySelector(".review-box.is--current")) {
                    reviewRef?.current?.querySelector(".review-box.is--current")?.classList.remove("is--current");
                }

                if (reviewRef?.current?.querySelectorAll(".review-box")) {
                    reviewRef?.current?.querySelectorAll(".review-box").forEach(element => {
                        // @ts-ignore
                        element.style.transform = `translateX(0px)`;
                    });
                }
            // }
        }
    }, [width])

    return (
        <section ref={reviewRef} className="mt-[81px] md:mt-[145px] layout-container mx-0 ml-auto overflow-x-hidden">
            <h2 className={`mob-h2 text-black mb-[19px] md:heading-2 md:mb-[78px] ${styles.jeko_regular}`}>Reviews from our Clients</h2>
            <div className="flex w-fit mb-[13px] relative">
                {
                    reviews.map((value, index) => (
                        <div key={index} className={`bg-creamSecondaryBg transition-all duration-1000 mr-5 last:mr-0 review-box z-[${index}0] w-[299px] pl-[10px] pb-[15px] pr-[33px] pt-3 border border-textColor relative md:w-[550px] md:pt-[29px] md:px-10 md:pb-[65px]`}>
                            <div className="w-[15px] h-[10px] relative">
                                <Image src={quote} alt='' layout="fill" className="object-contain" />
                            </div>
                            <p className="mt-[11px] mb-[3px] text-textColor font-inter text-[15px] leading-[23px] md:body-text md:text-black md:mt-3 md:mb-[15px]">{value.review}</p>
                            <p className="font-inter leading-5 text-[#4f4f4f] text-[13px] font-light md:caption">{value.name}</p>
                            <div className="flex justify-center items-end absolute bottom-0 -right-[1px] border border-black rounded-tl-[10px] w-[47px] h-[29px] border-b-0 md:w-[100px] md:h-[62px]">
                                <div className="relative w-[18px] h-6 md:w-[42px] md:h-[57px]">
                                    <Image src={girl} alt='' layout="fill" className="object-contain" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex items-center space-x-5">
                <div className="relative w-[19px] h-4 cursor-pointer slide_arrow left_arrow">
                    <Image src={leftArrow} alt='' layout="fill" className="object-contain" />
                </div>
                <div className="relative w-[19px] h-4 cursor-pointer slide_arrow right_arrow">
                    <Image src={rightArrow} alt='' layout="fill" className="object-contain" />
                </div>
            </div>
        </section>
    )
}

export default Review


