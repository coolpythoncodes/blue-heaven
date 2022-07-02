import Image from "next/image"
import Button from "../input/button"

// css
import styles from '../../styles/Home.module.css'

// images
import appointmentFlower from "../../public/assets/images/appointment-flower.svg"
import appointmentYellow from "../../public/assets/images/appointment-yellow.svg"

const Appointment = () => {
    return (
        <section className="layout-container mt-[62px] text-textColor md:mt-[118px]">
            <div className="relative border border-black rounded-t-[100px] h-[286px] w-[286px] mx-auto pt-[42px] text-center md:w-[600px] md:h-[556px] md:pt-[136px]">
                <div className="absolute -bottom-6 -left-3 w-[50px] h-[50px] md:w-[132px] md:h-[133px] md:-left-[65px] md:-bottom-[40px]">
                    <Image src={appointmentFlower} alt="" layout="responsive" />
                </div>
                <div className="absolute -top-4 right-10 w-[50px] h-[50px] md:w-[113px] md:h-[112px] md:-right-10 md:-top-10">
                    <Image src={appointmentYellow} alt="" layout="responsive" />
                </div>
                <h2 className={`mob-h2 mb-[15px] md:heading-2 md:mb-2 ${styles.jeko_regular}`}>Appointments</h2>
                <p className="body-text-font-inter w-[268px] mx-auto mb-[22px] md:heading-3 md:w-[434px] md:mb-[61px]">Book an appointment and get the best counselling sessions with the best clinicians</p>
                <Button
                    href=""
                    title="Book Now"
                    className="w-[133px] h-[50px] bg-lightBlueTertiary border border-textColor body-text font-inter flex items-center justify-center mx-auto rounded-t-[20px] hover:bg-creamSecondaryBg md:w-[211px] md:button-text"
                    arrowStyle="h-[10px] w-[10px] ml-1 md:h-5 md:w-5 md:ml-[15px]"
                />
            </div>
        </section>)
}

export default Appointment