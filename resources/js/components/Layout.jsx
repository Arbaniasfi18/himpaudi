import { Head } from "@inertiajs/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout ({ children, cur_url, title }) {
    return (
        <>
            <Head>
                <title>{ title + " - Himpaudi"}</title>
            </Head>
            <main>
                <Navbar cur_url={cur_url}/>
                { children }
                <Footer/>
            </main>
        </>
    )
}

export default Layout;