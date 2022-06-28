import Image from 'next/image'
import React from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { cliniciansDetails } from '../../utils/data'

// css
import styles from '../../styles/Home.module.css'

// images
import viviane from '../../public/assets/clinicians/viviane.svg'


const Clinicians = () => {
    const { width } = useWindowDimensions()

    return (
        <section className="layout-container text-center text-textColor mt-[81px]">
            <h2 className={`mob-h2  mb-[22px] md:heading-2 md:mb-[60px] lg:heading-1 ${styles.jeko_regular}`}>Meet the Clinicians</h2>
            <div className="flex flex-col space-y-[62px] w-[317px] mx-auto md:w-3/4 lg:w-[879px] lg:space-y-[179px]">
                {
                    cliniciansDetails.map((value, index) => (
                        <div key={index} className="lg:flex lg:justify-between lg:items-center">
                            <div className={`ml-auto w-[260px] md:w-[338px] md:h-[325px] md:mx-auto lg:mx-0 ${index === 1 && "order-2"}`}>
                                <Image src={index === 1 && width! >= 1024 ? viviane : value.image} alt="" layout="responsive" />
                                {/* <Image src={value.image} alt="" layout="fill" className="object-cover" /> */}
                            </div>
                            <div className={`lg:w-[454px] ${index === 1 && "order-1"}`}>
                                <p className={`body-text font-inter mt-2 md:heading-3 md:${styles.jeko_regular}`}>{value.name}</p>
                                <p className={`body-text font-inter md:heading-3  md:${styles.jeko_regular}`}>{value.role}</p>
                                <p className="mt-5 text-center body-text font-inter md:heading-3 lg:body-text">{value.bio}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Clinicians