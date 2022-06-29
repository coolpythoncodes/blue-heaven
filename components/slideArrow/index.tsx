import Image from "next/image"

// images
import leftArrow from "../../public/assets/arrows/left-arrow.svg"
import rightArrow from "../../public/assets/arrows/right-arrow.svg"

type Props = {
    direction: 'left' | 'right'
    onClick?: () => void
    style?: React.CSSProperties
    className?: string
}


const SideArrow = ({ direction, onClick, style, className }: Props) => {
    return (
        <div className={`w-[14px] h-3 top-[120px] before:content-[''] xs:w-6 md:w-[43px] md:h-9 ${direction === 'left' ? 'md:-left-[100px] lg:-left-[200px]' : 'md:-right-[100px] lg:-right-[200px]'} ${className}`} onClick={onClick} style={{ ...style }}>
            <Image
                src={direction === 'left' ? leftArrow : rightArrow}
                alt=""
                layout="responsive"
            />
        </div>
    )
}

export default SideArrow