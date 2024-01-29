import { Link } from 'react-router-dom'
import React from 'react'
import { FooterLinksOne} from '../constants/Constants'
import { v4 as uuidv4 } from 'uuid'

const Footer = () => {
    return (
        <footer className="flex flex-col  bg-[#efa9a9] w-full text-white justify-between mt-6">
            <div className=" container flex items-center justify-center p-4">
                {/* <img src={LogoNavbar} width={150} alt="img" /> */}
            </div>
            <div className="flex flex-col p-4 justify-evenly">
                <div>
                    <ul className="flex flex-row p-4 justify-evenly">
                        {FooterLinksOne.map((link) => {
                            return (
                                <Link key={uuidv4()} to={link.link}>
                                    <li>{link.title}</li>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <div className='flex justify-center mt-2'>
                    
                        <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec sem ac odio eleifend euismod. </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer