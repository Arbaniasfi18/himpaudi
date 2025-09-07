import JumbotronCard from "./JumbotronCard";
import '../../css/jumbotroncard.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function Jumbotron ({}) {
    return (
        <section className="w-full h-[100vh] relative">
            <div className="w-full h-full">
                <div className="absolute w-200 text-2xl font-bold px-20 text-white z-2 top-[40%] -translate-y-[40%] max-lg:w-full max-lg:text-center max-lg:text-4xl max-lg:top-[50%] max-lg:-translate-y-[60%] max-sm:text-xl max-sm:top-[70%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat leo vitae tellus pretium, vitae interdum purus pellentesque. Aliquam ante justo, fringilla ut tincidunt sed, aliquet in magna. In feugiat ultrices turpis, et euismod massa accumsan.
                </div>
                <div className="absolute primary w-full h-full opacity-80"></div>
                <img src="assets/images/2.jpg" alt="" srcSet="" className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-10 absolute left-[50%] -translate-x-1/2 -translate-y-[130%] items-center max-sm:hidden">
                <button className="glassmorphism rounded-full flex justify-around items-center size-10 text-3xl hover:cursor-pointer hover:w-13 hover:h-13 transition-all"><MdKeyboardArrowLeft/></button>
                <div className="flex gap-10 items-center max-w-260">
                    <JumbotronCard img={"assets/images/1.jpg"} />
                    <JumbotronCard img={"assets/images/2.jpg"} className="active"/>
                    <JumbotronCard img={"assets/images/3.jpg"} />
                </div>
                <button className="glassmorphism rounded-full flex justify-around items-center size-10 text-3xl hover:cursor-pointer hover:w-13 hover:h-13 transition-all"><MdKeyboardArrowRight/></button>
            </div>
        </section>
    )
}

export default Jumbotron;