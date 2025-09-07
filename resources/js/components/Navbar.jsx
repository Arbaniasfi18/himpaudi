import { RxHamburgerMenu } from "react-icons/rx";
import '../../css/navbar.css';
import { useEffect, useRef, useState } from "react";
import { Link } from "@inertiajs/react";

function Navbar({ cur_url }) {
    const fontRef = useRef([]);
    const [menu, setMenu] = useState([
        {
            'name': 'Home',
            'route': '/',
            'active': cur_url.split('/').length == 3,
        },
        {
            'name': 'Berita',
            'route': '/berita',
            'active': cur_url.includes('/berita')
        },
        {
            'name': 'Profile',
            'route': '/profile',
            'active': cur_url.includes('/profile')
        },
        {
            'name': 'Galeri',
            'route': '/galeri',
            'active': cur_url.includes('/galeri')
        },
    ]);

    const handleScroll = () => {
        const position = window.pageYOffset;
        var wwidth = window.screen.width;
        var custwidth = 751;
        
        if (wwidth <= 768) {
            custwidth = 850;
        }
        else if (wwidth <= 800) {
            custwidth = 1155;
        } 
        else if (wwidth <= 884) {
            custwidth = 950;
        }

        if (position >= custwidth) {
            fontRef.current.forEach(element => {
                element.style.color = '#01719D';
            });
        } else {
            fontRef.current.forEach(element => {
                element.style.color = 'white';
            });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});

        return (() => {
            window.removeEventListener('scroll', handleScroll);
        });
    }, []);

    return (
        <nav className="glassmorphism w-[100vw] h-25 z-100 fixed">
            <div className="mx-10 flex justify-between h-full items-center">
                <div>
                    <img src="assets/logo/logo.png" width={'60px'} alt="" />
                </div>
                <div className="flex items-center max-sm:hidden text-lg justify-center gap-15">
                    {
                        menu.map((item, index) => {
                            return <div ref={el => item.active ? null : fontRef.current[index] = el} key={index} className={ item.active ? 'w-15 text-center hover:cursor-pointer hover:font-bold navbar-active' : 'w-15 text-center hover:cursor-pointer hover:font-bold' }><Link href={item.route}>{ item.name }</Link></div>
                        })
                    }
                </div>
                <div className="sm:hidden text-3xl">
                    <RxHamburgerMenu />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;