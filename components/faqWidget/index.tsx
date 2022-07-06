import { useRef } from 'react'
import Image from 'next/image';

// images
import open from "../../public/assets/faq/open.svg"
import close from "../../public/assets/faq/close.svg"

type Props = {
    active: boolean,
    onToggle: () => void,
    faq: {
        question: string,
        answer: string,

    }
}

const FaqWidget = ({ active, onToggle, faq }: Props) => {
    const faqAnswerElement = useRef<HTMLDivElement>(null);

    return (
        <div className="border-t border-black first:border-t-0">
            {/* Question */}
            <div className="pl-[18px] pr-2 flex justify-between items-center pt-1 pb-2 lg:pt-[14px] lg:px-5 lg:pb-[21px]" onClick={onToggle}>
                <p className="text-black font-inter text-sm leading-[21px] md:body-text">{faq.question}</p>
                <div className="relative w-[17px] h-[17px] cursor-pointer lg:w-[42px] lg:h-[42px]">
                    <Image src={active ? close : open} alt="" layout="fill" className="object-contain" />
                </div>
            </div>
            {/* Answer */}
            <div
                ref={faqAnswerElement}
                className={`transition-all ease-in-out duration-[700ms] overflow-hidden ${active ? "opacity-100" : "opacity-0"}`}
                style={
                    active
                        ? {
                            height: faqAnswerElement.current?.scrollHeight,
                        }
                        : {
                            height: 0,
                        }


                }
            >
                <p className="font-inter text-gray2 text-xs leading-[18px] pl-[18px] pr-9 pb-5 md:text-sm lg:leading-[27px] lg:pr-[60px]">{faq.answer}</p>
            </div>
        </div>
    )
}

export default FaqWidget