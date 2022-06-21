import Image from "next/image"
import Link from "next/link"

// images
import arrow from "../../../public/assets/arrows/top-right-arrow.svg"

type Props = {
    href: string
    title?: string
    buttonProps?: {}
    btnType?: "primary" | "secondary"
}

const Button = ({ href, title, btnType = "primary", ...buttonProps }: Props) => {
    return (
        <Link href={href}  >
            <a className={`border border-textColor rounded-t-[20px] text-textColor flex items-center w-[211px] h-[50px] justify-center button-text ${btnType === "primary" ? 'bg-lightBlueTertiary' : 'bg-white'}`} {...buttonProps}>
                {title}
                <div className="ml-[15px] h-5 w-5">
                    <Image src={arrow} alt="" layout="responsive" />
                </div>
            </a>
        </Link>
    )
}

export default Button