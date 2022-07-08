import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/layout'
import Button from '../components/input/button'
import WhoWeAreSlide from '../components/whoWeAreSlide'
import Review from '../components/review'
import Contact from '../components/sections/Contact'
import Appointment from '../components/sections/Appointment'

// css styles
import styles from '../styles/Home.module.css'

// images
import clip from "../public/assets/hero/clip.svg"
import one from "../public/assets/hero/1.svg"
import two from "../public/assets/hero/2.svg"
import three from "../public/assets/hero/3.svg"
import four from "../public/assets/hero/4.svg"
import people from "../public/assets/images/people.png"
import peopleDesktop from "../public/assets/images/people-desktop.gif"
import twoWomen from "../public/assets/images/two-women.gif"
import coaching from "../public/assets/images/coaching.gif"
import coloredCircle from "../public/assets/images/colored-circles.svg"
import starShape from "../public/assets/images/star-shape.svg"
import yellowBlackFlower from "../public/assets/images/yellow-black-flower.svg"
import pointingArrow from "../public/assets/arrows/pointing-arrow.svg"
import useWindowDimensions from '../hooks/useWindowDimensions'


const Home: NextPage = () => {
  const { width } = useWindowDimensions()
  console.log(width)

  return (
    <Layout navBarColor="bg-blueBg">
      {/* Hero Section */}
      <header className="bg-blueBg text-creamSecondaryBg pt-[73px] h-[68vh] xxs:h-[53vh] xs:h-[55vh] md:h-[70vh] md:pt-[85px] lg:h-[100vh] xl:pt-[100px]">
        <div className="layout-container text-center max-w-[800px] xxs:w-[85%] xs:w-3/4 md:w-11/12">
          <h1 className={`relative mob-h1 md:heading-1 ${styles.jeko_regular}`}>
            <div className="absolute top-4 w-8 h-7 xs:-left-8 md:w-[108px] md:h-[70px] md:left-2 lg:-left-20
            xl:-left-[100px] xl:top-5 xl:h-[108px] xl:w-[112px]">
              <Image src={one} alt="" layout='fill' className="object-contain" />
            </div>
            <div className="absolute top-6 right-0 w-8 h-7 xs:-right-6 md:w-[60px] md:h-[70px] md:right-0 lg:-right-[60px] xl:top-12 xl:-right-[140px] xl:w-[87px] xl:h-[76px]">
              <Image src={two} alt="" layout='fill' className="object-contain" />
            </div>
            <div className="absolute bottom-3 left-9 w-7 h-6 xs:left-0 md:w-10 md:h-12 md:left-[100px] lg:left-[50px] xl:w-[65px] xl:h-[74px] xl:-left-[180px] xl:-bottom-[28vh]">
              <Image src={three} alt="" layout='fill' className="object-contain" />
            </div>
            {/* <div className="absolute bottom-3 left-9 w-7 h-6 xs:left-0 md:w-10 md:h-12 md:left-[100px] lg:left-[50px] xl:w-[65px] xl:h-[74px] xl:-left-[180px] xl:-bottom-[350px]  error">
              <Image src={three} alt="" layout='fill' className="object-contain" />
            </div> */}
            <div className="absolute bottom-2 right-10 w-10 h-10 xs:right-0 md:w-[60px] md:h-[70px] md:right-20 lg:right-10 xl:w-[120px] xl:h-[200px] xl:-right-[200px] xl:-bottom-[28vh]">
              <Image src={four} alt="" layout='fill' className="object-contain" />
            </div>
            {/* <div className="absolute bottom-2 right-10 w-10 h-10 xs:right-0 md:w-[60px] md:h-[70px] md:right-20 lg:right-10 xl:w-[120px] xl:h-[200px] xl:-right-[200px] xl:-bottom-[380px]">
              <Image src={four} alt="" layout='fill' className="object-contain" />
            </div> */}
            <span className="block xs:inline md:block lg:inline">A counselling</span>
            {" "}
            <span className="relative">
              haven
              <div className="absolute top-[30px] w-[65px] h-[31px] left-5 md:w-[110px] md:top-[70px] md:left-[45px]">
                <Image src={clip} alt='' layout='fill' className="object-contain" />
              </div>
            </span>
            {" "}
            that hears you when you call
            {" "}
            <span className="block xs:inline md:block lg:inline">for help</span>
          </h1>
        </div>
      </header>

      <section>

        <div className="w-[328px] max-w-[980px] rounded-t-[100px] mx-auto -mt-[19vh] pl-[11px] bg-creamSecondaryBg xxs:-mt-[15vh] xs:-mt-[17vh] xs:w-3/4 md:-mt-[20vh] md:rounded-t-[200px] md:w-11/12 lg:-mt-[30vh] lg:pl-[50px] lg:pr-[70px] xl:-mt-[34vh]">
          <div className="relative md:hidden w-11/12 h-[202px]">
            <Image src={people} alt="" layout="fill" className="object-contain" />
          </div>
          <div className="relative hidden pt-6 w-4/5 mx-auto h-[300px] md:block md:w-11/12 md:h-[400px] lg:w-full xl:w-full xl:mx-0">
            <Image src={peopleDesktop} alt="" layout="fill" className="object-contain" />
          </div>
        </div>

        <h2 className={`mob-h2 text-center mt-10 mb-8 md:heading-2 lg:mt-[134px] lg:mb-[50px] ${styles.jeko_regular}`}>
          Our personalized approach to {" "}
          <span className="relative">
            Care
            <div className="hidden absolute top-[55px] left-2 w-[110px] lg:block">
              <Image src={clip} alt='' layout='responsive' />
            </div>
          </span>
        </h2>
      </section>


      {/* <header className="bg-blueBg text-creamSecondaryBg m-0 pt-10 h-[70vh] xxs:h-[55vh] xs:h-[70vh] lg:h-screen xl:pt-[60px] xl:mb-[55px]">
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
                <div className="inline w-8 h-7 md:w-[90px] md:h-[100px] xl:absolute xl:-left-5 xl:-bottom-[220px] xl:w-[66px] xl:h-[74px]">
                  <Image src={three} alt="" layout="responsive" />
                </div>
                {" "}for help
                <div className="inline w-8 h-7 md:w-[90px] md:h-[100px] xl:absolute xl:right-0 xl:-bottom-[220px]">
                  <Image src={four} alt="" layout="responsive" />
                </div>
              </span>
            </span>
          </h1>
        </div>
      </header> */}
      {/* End Hero Section */}

      <section>
        {/* <div className="layout-container relative bg-creamSecondaryBg max-w-[980px] -mt-[25vh] z-10 rounded-t-[100px] xxs:-mt-[20vh] xs:-mt-[25vh] xl:-mt-[45vh] xl:rounded-t-[200px]">
          <div className="pt-8 pr-5 xs:px-5 lg:hidden">
            <Image src={people} alt="" layout="responsive" />
          </div>
          <div className="hidden lg:block pt-6 w-4/5 mx-auto">
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
        </div> */}

        <div className="layout-container flex flex-col items-center space-y-10 mt-[33px] xs:mt-[50px] xs:space-y-20 xl:flex-row xl:space-y-0 xl:justify-between">
          {/* Counselling */}
          <div className="relative w-[205px] h-[262px] border border-black rounded-t-[100px] pt-[35px] xs:w-[360px] xs:h-[420px]">
            <div className="absolute w-[45px] h-[43px] -left-[22px] bottom-2 xs:w-[82px] xs:h-[77px] xs:-bottom-10 xs:-left-10">
              <Image src={coloredCircle} alt="" layout="responsive" />
            </div>
            <div className="w-[203px] h-[124px] relative xs:w-[358px] xs:h-[219px]">
              <Image src={twoWomen} alt="" layout="fill" className="object-contain" />
            </div>
            <h4 className={`body-text font-inter text-center mt-[6px] mb-2 xs:heading-3 xs:mt-[17px] xs:mb-[9px] xs:${styles.jeko_regular}`}>Counselling</h4>
            <Button
              href="/counselling"
              title="Learn More"
              className="w-[134px] h-[40px] font-inter font-bold text-base text-black leading-6  flex justify-center items-center mx-auto border border-textColor rounded-t-[20px] xs:w-[240px] xs:button-text xs:h-[50px]"
              arrowStyle='w-2 h-2 ml-[3px] xs:w-5 xs:h-5 xs:ml-7'
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
              href="/coaching"
              title="Learn More"
              className="w-[134px] h-[40px] font-inter font-bold text-base text-black leading-6  flex justify-center items-center mx-auto border border-textColor rounded-t-[20px] xs:w-[240px] xs:button-text xs:h-[50px]"
              arrowStyle='w-2 h-2 ml-[3px] xs:w-5 xs:h-5 xs:ml-7'
            />
          </div>
          {/* end of coaching */}


          {/* WorkShops */}
          <div className="relative w-[205px] h-[262px] border border-black rounded-t-[100px] pt-[35px] xs:w-[360px] xs:h-[420px]">
            <div className="absolute w-[34px] h-[38px] -right-3 bottom-4 xs:w-16 xs:h-[72px] xs:-bottom-4">
              <Image src={three} alt="" layout="responsive" />
            </div>
            <div className="w-[203px] h-[124px] relative xs:w-[358px] xs:h-[219px]">
              <Image src={twoWomen} alt="" layout="fill" className="object-contain" />
            </div>
            <h4 className={`body-text font-inter text-center mt-[6px] mb-2  xs:heading-3 xs:mt-[17px] xs:mb-[9px] xs:${styles.jeko_regular}`}>Blog</h4>
            <Button
              href="/blog"
              title="Learn More"
              className="w-[134px] h-[40px] font-inter font-bold text-base text-black leading-6  flex justify-center items-center mx-auto border border-textColor rounded-t-[20px] xs:w-[240px] xs:button-text xs:h-[50px]"
              arrowStyle='w-2 h-2 ml-[3px] xs:w-5 xs:h-5 xs:ml-7'
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
          <p className="body-text font-inter xs:heading-3">BHCC aims to support individuals and families to develop new skills and take ownership of their lives following a program that is tailor-made to match everyone&rsquo;s needs. </p>
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
              <p className="body-text font-inter text-white mt-[14px] mb-[34px] mx-auto">BHCC aims to support individuals and families to develop new skills and take ownership of their lives by following a tailor-made program to match everyone&rsquo;s needs. </p>
              <Button
                href="/coaching"
                title="Learn More"
                className="w-[134px] h-[49px] font-inter font-bold text-base text-white leading-6 flex justify-center items-center mx-auto border border-creamSecondaryBg rounded-t-[20px] xs:w-[207px] xs:button-text xs:h-[43px]"
                arrowStyle='w-[11px] h-[11px] ml-2 xs:w-5 xs:h-5'
                arrowColor='white'
              />
            </div>
          </div>
        </div>
      </section>

      <Review />
      <Appointment />
      <Contact />
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
