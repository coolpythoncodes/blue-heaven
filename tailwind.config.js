/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
			xxs: "390px",
      xs: "540px",
			...defaultTheme.screens,
		},
    extend: {
      colors: {
        blueBg: "#295562",
        lightBlueTertiary: "#219EBC",
        textColor: "#333",
        creamSecondaryBg: "#EAE5D9",
        gray2: "#4F4F4F",
        gray3: "#828282",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}


// <header className="bg-blueBg text-creamSecondaryBg pt-[73px] h-[68vh] xxs:h-[53vh] xs:h-[55vh] md:h-[70vh] md:pt-[85px] lg:h-screen">
// <div className="layout-container text-center max-w-[800px] xxs:w-[85%] xs:w-3/4 md:w-11/12 error">
//   <h1 className={`relative mob-h1 md:heading-1 ${styles.jeko_regular}`}>
//     <div className="absolute top-4 error w-8 h-7 xs:-left-8 md:w-[60px] md:h-[70px]">
//       <Image src={one} alt="" layout='fill' className="object-contain" />
//     </div>
//     <div className="absolute top-6 right-0 error w-8 h-7 xs:-right-6 md:w-[60px] md:h-[70px]">
//       <Image src={two} alt="" layout='fill' className="object-contain" />
//     </div>
//     <div className="absolute bottom-3 left-9 w-7 h-6 xs:left-0 md:w-10 md:h-12 md:left-[100px] error">
//       <Image src={three} alt="" layout='fill' className="object-contain" />
//     </div>
//     <div className="absolute bottom-2 right-10 w-10 h-10 xs:right-0 md:w-[60px] md:h-[70px] md:right-20 error">
//       <Image src={four} alt="" layout='fill' className="object-contain" />
//     </div>
//     <span className="block xs:inline md:block lg:inline">A counselling</span>
//     {" "}
//     <span className="relative">
//       haven
//       <div className="absolute top-[30px] w-[65px] h-[31px] left-5 md:w-[110px] md:top-[70px] md:left-[45px]">
//         <Image src={clip} alt='' layout='fill' className="object-contain" />
//       </div>
//     </span>
//     {" "}
//     that hears you when you call
//     {" "}
//     <span className="block xs:inline md:block lg:inline">for help</span>
//   </h1>
//   <div className="border border-blue-700 mt-[40px] md:mt-[53px]"></div>
// </div>
// </header>

// <section>

// <div className="w-[328px] max-w-[800px] rounded-t-[100px] mx-auto -mt-[19vh] pl-[11px] bg-creamSecondaryBg xxs:-mt-[15vh] xs:-mt-[17vh] xs:w-3/4 md:-mt-[20vh]   mx:px-4 md:rounded-t-[200px] md:w-11/12 error">
//   <div className="relative md:hidden w-11/12 h-[202px] border border-green-700">
//     <Image src={people} alt="" layout="fill" className="object-contain" />
//   </div>
//   <div className="relative hidden pt-6 w-4/5 mx-auto h-[300px] md:block md:w-full md:h-[400px] border border-green-700">
//     <Image src={peopleDesktop} alt="" layout="fill" className="object-contain" />
//   </div>
// </div>
// </section>

// <div className="mb-[1000px]">