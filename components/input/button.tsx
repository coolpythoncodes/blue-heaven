import Image from "next/image"
import Link from "next/link"

// images
import arrow from "../../public/assets/arrows/top-right-arrow.svg"
import arrowWhite from "../../public/assets/arrows/white-top-right-arrow.svg"

type Props = {
    href: string
    title?: string
    btnType?: "primary" | "secondary"
    arrowStyle?: string
    arrowColor?: string
    [rest: string]: any
}

const Button = ({ href, title, arrowStyle, arrowColor, btnType = "primary", ...rest }: Props) => {
    return (
        <Link href={href}  >
            <a className={`w-[133px] h-[50px] border border-textColor body-text font-inter flex items-center justify-center mx-auto rounded-t-[20px] md:w-[211px] md:button-text ${btnType === "primary" ? 'bg-lightBlueTertiary hover:bg-creamSecondaryBg' : 'bg-white hover:bg-lightBlueTertiary'}`} {...rest}>
                {title}
                <div className={`relative ${arrowStyle}`}>
                    <Image src={arrowColor === 'white' ? arrowWhite : arrow} alt="" layout="fill" className="object-contain" />
                </div>
            </a>
        </Link>
    )
}

export default Button