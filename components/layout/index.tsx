import { ReactNode } from "react"
import Head from "next/head"
import Footer from "./footer"
import NavBar from "./navBar"

// css
import styles from "../../styles/Home.module.css"

type Props = {
    children?: ReactNode
    title?: string
    navBarColor?: string
}

const Layout = ({ children, title = "Home", navBarColor }: Props) => {
    return (
        <div className="h-screen flex flex-col">
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="A counselling haven that hears you when you call for help" />
            </Head>
            <div className={`relative ${styles.content}`}>
                <NavBar navBarColor={navBarColor} />
                <main className="bg-creamSecondaryBg mt-[80px] md:mt-[100px]">
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Layout;