import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import useSessionStorage from '../hooks/useSessionStorage';

const Navbar = () => {
    const { loggedInUser } = useSessionStorage();
    const navigate = useNavigate();
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const clearStorage = () => {
        sessionStorage.clear()
        setTimeout((window.location.reload(false)), 800)
        
    }


    const navigateToLogin = () => {
        navigate('/login');
      };

    return (
        
            <div className={scrolled? " w-full fixed top-0 z-20" : "w-full "}>
                <div className="flex h-4 bg-[#efa9a9]">
                </div>
                <div className="flex items-center justify-between flex-wrap p-4 sticky bg-white">
                    <div className="flex items-center flex-shrink-0 text-white">
                        <div className="flex">
                            <div></div>
                            <span
                                style={{ fontFamily: 'Dancing Script, cursive' }}
                                className="font-semibold text-4xl tracking-tight mr-10 text-[#ff857e]"
                            >
                                Pasticceria di Luana e Maria
                            </span>
                        </div>
                        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                            <div className="text-sm lg:flex-grow">
                           
                            </div>
                        </div>
                    </div>
                    <div className="mr-5">
                    {loggedInUser?
                                <button
                                onClick={clearStorage}
                                className="transition ease-in-out delay-150 hover:-translate-y-1  text-pink  rounded-full text-pink-400"
                                >Logout</button>
                                :
                                <button
                                className="transition ease-in-out delay-150 hover:-translate-y-1  text-pink  rounded-full text-pink-400"
                                onClick={navigateToLogin}
                            >
                                Login
                            </button>
                            }
                    </div>
                </div>
            </div>
        
    )
}

export default Navbar