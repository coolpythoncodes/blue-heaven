import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/layout'
import { footer_contact, reviews } from '../utils/data'
import Button from '../components/input/button'
import WhoWeAreSlide from '../components/whoWeAreSlide'

// css styles
import styles from '../styles/Home.module.css'

// images
import clip from "../public/assets/hero/clip.svg"
import one from "../public/assets/hero/1.svg"
import two from "../public/assets/hero/2.svg"
import three from "../public/assets/hero/3.svg"
import four from "../public/assets/hero/4.svg"
import people from "../public/assets/images/people.png"
import peopleDesktop from "../public/assets/images/people-desktop.png"
import appointmentFlower from "../public/assets/images/appointment-flower.svg"
import appointmentYellow from "../public/assets/images/appointment-yellow.svg"
import twoWomen from "../public/assets/images/two-women.png"
import coaching from "../public/assets/images/coaching.png"
import coloredCircle from "../public/assets/images/colored-circles.svg"
import starShape from "../public/assets/images/star-shape.svg"
import yellowBlackFlower from "../public/assets/images/yellow-black-flower.svg"
import pointingArrow from "../public/assets/arrows/pointing-arrow.svg"
import Review from '../components/review'


const Home: NextPage = () => {
  return (
    <Layout navBarColor="bg-blueBg">
      {/* Hero Section */}
      <header className="bg-blueBg text-creamSecondaryBg pt-10 h-[70vh] xxs:h-[55vh] xs:h-[70vh] lg:h-screen">
        <div className="layout-container xs:w-4/5 md:w-11/12  xl:relative">
          <h1 className={`mob-h1 text-center md:heading-1 xl:w-[800px] xl:mx-auto ${styles.jeko_regular}`}>
            <span className="flex items-center justify-between xl:inline">
              <div className="inline w-8 h-7 md:w-[90px] md:h-[100px] xl:absolute xl:left-[75px] xl:top-4">
                <Image src={one} alt="" layout="responsive" />
              </div>
              A counselling
              <div className="inline h-7 w-8 md:w-[90px] md:h-[100px] xl:absolute xl:right-12 xl:top-12">
                <Image src={two} alt="" layout="responsive" />
              </div>
            </span> {" "}
            <span className="relative">
              haven
              <div className="absolute top-10 left-5 w-[65px] md:top-[75px] md:left-[65px] md:w-[110px]">
                <Image src={clip} alt='' layout='responsive' />
              </div>
            </span>
            {" "}
            <span>
              that hears you when you call
              <span className="flex items-center justify-evenly xl:inline">
                <div className="inline w-8 h-7 md:w-[90px] md:h-[100px] xl:hidden">
                  <Image src={three} alt="" layout="responsive" />
                </div>
                {" "}for help
                <div className="inline w-8 h-7 md:w-[90px] md:h-[100px] xl:hidden">
                  <Image src={four} alt="" layout="responsive" />
                </div>
              </span>
            </span>
          </h1>
        </div>
      </header>
      {/* End Hero Section */}

      <section>
        <div className="layout-container relative bg-creamSecondaryBg max-w-[900px] -mt-[25vh] z-10 rounded-t-[100px] xxs:-mt-[20vh] xs:-mt-[25vh] xl:-mt-[40vh]">
          <div className="pt-8 pr-5 xs:px-5 lg:hidden">
            <Image src={people} alt="" layout="responsive" />
          </div>
          <div className="hidden lg:block pt-8">
            <Image src={peopleDesktop} alt="" layout="responsive" />
          </div>
          <h2 className={`mob-h2 text-center mt-10 mb-8 md:heading-2 lg:mt-20 ${styles.jeko_regular}`}>
            Our personalized approach to {" "}
            <span className="relative">
              Care
              <div className="hidden absolute top-[55px] left-2 w-[110px] lg:block">
                <Image src={clip} alt='' layout='responsive' />
              </div>
            </span>
          </h2>
        </div>

        <div className="layout-container flex flex-col items-center space-y-10 mt-[33px] xs:mt-[50px] xs:space-y-20 xl:flex-row xl:space-y-0 xl:justify-between">
          {/* Counselling */}
          <div className="relative w-[205px] h-[262px] border border-black rounded-t-[100px] pt-[35px] xs:w-[360px] xs:h-[420px]">
            <div className="absolute w-[45px] h-[43px] -left-[22px] bottom-2 xs:w-[82px] xs:h-[77px] xs:-bottom-10 xs:-left-10">
              <Image src={coloredCircle} alt="" layout="responsive" />
            </div>
            <div>
              <Image src={twoWomen} alt="" layout="responsive" />
            </div>
            <h4 className={`body-text font-inter text-center mt-[6px] mb-2 xs:heading-3 xs:mt-[17px] xs:mb-[9px] xs:${styles.jeko_regular}`}>Counselling</h4>
            <Button
              href="/"
              title="Learn More"
              className="w-[134px] h-[40px] font-inter font-bold text-base text-black leading-6 flex justify-center items-center mx-auto border border-textColor rounded-t-[20px] xs:w-[240px] xs:button-text xs:h-[50px]"
              arrowStyle='w-[11px] h-[11px] ml-[3px] xs:w-5 xs:h-5 xs:ml-7'
            />
          </div>
          {/* end of counselling */}


          {/* Coaching */}
          <div className="relative w-[205px] h-[262px] border border-black rounded-t-[100px] pt-[35px] xs:w-[360px] xs:h-[420px]">
            <div className="absolute w-[68px] h-[70px] -right-3 -top-[14px] xs:w-[81px] xs:h-[83px] xs:-top-7">
              <Image src={starShape} alt="" layout="responsive" />
            </div>
            <div className="w-[203px] h-[124px] relative xs:w-[358px] xs:h-[219px]">
              <Image src={coaching} alt="" layout="fill" className="object-contain" />
            </div>
            <h4 className={`body-text font-inter text-center mt-[6px] mb-2  xs:heading-3 xs:mt-[17px] xs:mb-[9px] xs:${styles.jeko_regular}`}>Coaching</h4>
            <Button
              href="/"
              title="Learn More"
              className="w-[134px] h-[40px] font-inter font-bold text-base text-black leading-6 flex justify-center items-center mx-auto border border-textColor rounded-t-[20px] xs:w-[240px] xs:button-text xs:h-[50px]"
              arrowStyle='w-[11px] h-[11px] ml-[3px] xs:w-5 xs:h-5 xs:ml-7'
            />
          </div>
          {/* end of coaching */}


          {/* WorkShops */}
          <div className="relative w-[205px] h-[262px] border border-black rounded-t-[100px] pt-[35px] xs:w-[360px] xs:h-[420px]">
            <div className="absolute w-[34px] h-[38px] -right-3 bottom-4 xs:w-16 xs:h-[72px] xs:-bottom-4">
              <Image src={three} alt="" layout="responsive" />
            </div>
            <div>
              <Image src={twoWomen} alt="" layout="responsive" />
            </div>
            <h4 className={`body-text font-inter text-center mt-[6px] mb-2  xs:heading-3 xs:mt-[17px] xs:mb-[9px] xs:${styles.jeko_regular}`}>Workshops</h4>
            <Button
              href="/"
              title="Learn More"
              className="w-[134px] h-[40px] font-inter font-bold text-base text-black leading-6 flex justify-center items-center mx-auto border border-textColor rounded-t-[20px] xs:w-[240px] xs:button-text xs:h-[50px]"
              arrowStyle='w-[11px] h-[11px] ml-[3px] xs:w-5 xs:h-5 xs:ml-7'
            />
          </div>
          {/* end of workshops */}
        </div>
      </section>

      {/* who we are */}
      <section className="layout-container mt-[109px] xs:mt-[243px]">
        <div className="text-center w-[307px] mx-auto xs:w-full lg:w-[918px]">
          <h2 className={`mob-h2 text-black relative xs:heading-2 xs:mb-[34px] xs:${styles.jeko_regular}`}>
            Who We Are
            <div className={`absolute -top-[52px] right-10 w-[44px] h-[51px] md: xs:w-[81px] xs:h-[93px] xs:-top-[70px] xs:right-5 md:right-[60px] lg:right-[130px]`}>
              <Image src={yellowBlackFlower} alt="" layout="responsive" />
            </div>
          </h2>
        </div>
        <div className="mt-[19px] mb-[41px] h-[131px] w-[61px] relative left-[230px] xs:left-[300px] md:left-[450px] lg:left-[600px] xl:left-[700px]">
          <Image src={pointingArrow} alt="" layout='fill' />
        </div>
        <WhoWeAreSlide />
      </section>


      <section className="mt-[78px] lg:mt-[183px]">
        <div className="w-11/12 h-[448px] bg-blueBg rounded-t-[100px] mx-auto pt-[34px] xs:w-[325px] md:w-11/12 md:rounded-t-[200px] md:flex md:items-center md:justify-center lg:w-[969px]">
          <div className="md:grid md:grid-cols-2 md:items-center">
            <div className="w-4/5  h-[130px] mx-auto relative md:w-[305px] md:h-[365px]">
              <Image src={coaching} alt="" layout="fill" className="object-contain" />
            </div>
            <div className="text-center mx-auto w-[274px] lg:w-[365px] md:mx-0">
              <h2 className={`mob-h2 text-creamSecondaryBg lg:heading-2 ${styles.jeko_regular}`}>Coaching</h2>
              <Button
                href="/"
                title="Learn More"
                className="w-[134px] h-[49px] font-inter font-bold text-base text-white leading-6 flex justify-center items-center mx-auto border border-creamSecondaryBg rounded-t-[20px] xs:w-[207px] xs:button-text xs:h-[43px]"
                arrowStyle='w-[11px] h-[11px] ml-2 xs:w-5 xs:h-5'
                arrowColor='white'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <Review />
      {/* end of Reviews */}

      {/* Appointment */}
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
            className="w-[133px] h-[50px] bg-lightBlueTertiary border border-textColor body-text font-inter flex items-center justify-center mx-auto rounded-t-[20px] md:w-[211px] md:button-text"
            arrowStyle="h-[10px] w-[10px] ml-1 md:h-5 md:w-5 md:ml-[15px]"
          />
        </div>
      </section>
      {/* End of Appointment */}

      {/* Contact */}
      <section className="layout-container mt-20 text-textColor max-w-[790px] pb-[401px]">
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
      {/* End of Contact */}

    </Layout>
    // <div className={styles.container}>
    //   <Head>
    //     <title>Home</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <h1 className={styles.jeko_regular}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing{' '}
    //       <code className={styles.code}>pages/index.tsx</code>
    //     </p>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h2>Documentation &rarr;</h2>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h2>Learn &rarr;</h2>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/canary/examples"
    //         className={styles.card}
    //       >
    //         <h2>Examples &rarr;</h2>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //       >
    //         <h2>Deploy &rarr;</h2>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <span className={styles.logo}>
    //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </span>
    //     </a>
    //   </footer>
    // </div>
  )
}

export default Home
