import { footer_contact } from '../../utils/data'

// css
import styles from '../../styles/Home.module.css'

const Contact = () => {
    return (
        <section className="layout-container mt-20 text-textColor max-w-[790px] pb-[247px] md:pb-[519px]">
            <div className="text-center">
                <h2 className={`mob-h2 md:heading-2 md:mb-[21px] ${styles.jeko_regular}`}>Contact</h2>
                <h3 className="font-inter body-text px-5 md:heading-3 md:mb-[54px] md:px-10">
                    We always love to hear from our customers. So feel free to get in
                    touch today to learn more about what we have to offer.
                </h3>
                <div className={`caption font-inter mt-8 space-y-2 w-3/4 mx-auto xs:w-3/5 md:heading-3 md:${styles.jeko_regular} `}>
                    <div className="flex justify-between">
                        <p>Phone Number:</p>
                        <p>{footer_contact.text[1]}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Email Address:</p>
                        <p>{footer_contact.text[0]}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact