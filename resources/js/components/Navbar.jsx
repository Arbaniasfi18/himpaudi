import { RxHamburgerMenu } from "react-icons/rx";
import '../../css/navbar.css';
import { useEffect, useRef, useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import logo from '../../../public/assets/logo/landing.jpeg'

function Navbar({ }) {
    const fontRef = useRef([]);
    const { props } = usePage();
    const [hoverMenu, setHoverMenu] = useState();
    const [menu, setMenu] = useState([
        {
            'index': 0,
            'name': 'Home',
            'route': '/',
            'active': props.cur_url.split('/').length == 3,
        },
        {
            'index': 1,
            'name': 'Berita',
            'route': '/berita',
            'active': props.cur_url.includes('/berita')
        },
        {
            'index': 2,
            'name': 'Profile',
            'route': '/profile',
            'active': props.cur_url.includes('/profile'),
            'child': [
                {
                    'name': 'Tentang Himpaudi',
                    'route': '/tentang',
                },
                {
                    'name': 'Visi & Misi Himpaudi',
                    'route': '/visi-misi',
                },
                {
                    'name': 'Pengurus Himpaudi',
                    'route': '/pengurus',
                },
            ]
        },
        {
            'index': 3,
            'name': 'Galeri',
            'route': '/galeri',
            'active': props.cur_url.includes('/galeri'),
            'child': [
                {
                    'name': 'Galeri Foto',
                    'route': '/foto',
                },
                {
                    'name': 'Galeri Video',
                    'route': '/video',
                },
            ]
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
                // element.style.color = '#011F2A';
            });
        } else {
            fontRef.current.forEach(element => {
                // element.style.color = 'white';
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
        <nav className="w-[100vw] h-20 z-100 fixed navbar">
            <div className="mx-10 flex justify-between h-full items-center">
                <div>
                    <img src={logo} width={'300px'} alt="" />
                </div>
                <div className="flex items-center max-sm:hidden text-lg justify-center gap-15">
                    {
                        menu.map((item, index) => {
                            return (
                                <div ref={el => item.active ? null : fontRef.current[index] = el} key={index} className={ item.active ? 'nav-menu w-15 text-center hover:font-bold navbar-active' : 'nav-menu w-15 text-center hover:font-bold hover:text-2xl text-[#011F2A]' } onMouseEnter={() => setHoverMenu(index)} onMouseLeave={() => setHoverMenu()}>
                                    <Link href={item.child != undefined ? '' : item.route}>{ item.name }</Link>
                                    {
                                        item.child != undefined && hoverMenu == item.index
                                            ? <div className="absolute bg-white p-5 rounded-md dropdown-item-list secondary">
                                                {
                                                    item.child.map((childItem, childIndex) => {
                                                        return <Link key={childIndex} href={item.route + childItem.route}><div className="text-left text-[16px] dropdown-item rounded-md hover:cursor-pointer text-white ">{ childItem.name }</div></Link>
                                                    })
                                                }
                                            </div>
                                            : null
                                    }
                                </div>
                            )
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