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
            <a className={`border border-textColor rounded-t-[20px] text-textColor flex items-center w-[211px] py-[10px] justify-center button-text ${btnType === "primary" ? 'bg-lightBlueTertiary' : 'bg-white'}`} {...rest}>
                {title}
                <div className={`ml-[15px] h-5 w-5 ${arrowStyle}`}>
                    <Image src={arrowColor === 'white' ? arrowWhite : arrow} alt="" layout="responsive" />
                </div>
            </a>
        </Link>
    )
}

export default Button