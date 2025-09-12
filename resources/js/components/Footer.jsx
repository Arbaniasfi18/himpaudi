import { Link } from "@inertiajs/react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import logoWhite from '../../../public/assets/logo/logo-white.png'

function Footer ({}) {
    return (
        <footer className="w-full dark-blue flex px-10 pb-10">
            <div className="w-auto h-full text-white flex flex-col items-center pt-10 flex-1 pl-5">
                <div className="text-center">
                    PW HIMPAUDI SUMATERA UTARA
                </div>
                <div>
                    <img className="w-40 mt-3" src={logoWhite} alt="" />
                </div>
                <div className="text-center mt-3">
                    WEBSITE HIMPAUDI SUMUT
                </div>
            </div>
            <div className="w-auto h-full pt-10 flex-1 pl-5">
                <div className="text-xl font-bold text-white">
                    Pages
                </div>
                <div className="mt-5">
                    <ol>
                        <li className="my-2 text-md text-white"><Link href="">Home</Link></li>
                        <li className="my-2 text-md text-white"><Link href="">Berita</Link></li>
                        <li className="my-2 text-md text-white"><Link href="">Galeri</Link></li>
                        <li className="my-2 text-md text-white"><Link href="">Profil</Link></li>
                    </ol>
                </div>
            </div>
            <div className="w-auto h-full flex text-[40px] text-white flex-wrap flex-2 gap-10 pt-10 pl-5 max-sm:gap-3">
                <div><FaFacebook /></div>
                <div><AiFillInstagram /></div>
                <div><FaYoutube /></div>
                <div><FaSquareXTwitter /></div>
                <div><MdEmail /></div>
            </div>
        </footer>
    )
}

export default Footer;