import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import useSessionStorage from '../hooks/useSessionStorage';
import { toggle } from "../redux/reducers/uiSlice";
import { cartTotalSelector } from "../redux/selectors";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 4rem;
`;

const ItemCount = styled.span`
  position: absolute;
  top: -10px;   
  right: -20px;
  background-color: #ff857e;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.8rem;
  font-weight: bold;
`;

const StyledShoppingCartIcon = styled(ShoppingCartIcon)`
  color: #ff857e;
  font-size: 6rem;  
`;




const Navbar = () => {
    const { loggedInUser } = useSessionStorage();
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [change, setChange] = useState(false);


    const total = useSelector(cartTotalSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        if (total !== 0) {
          setChange(true);
    
          setTimeout(() => {
            setChange(false);
          }, 1000);
        }
      }, [total]);
    

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
                    <div className="mr-5 flex flex-row">
                    <CartContainer onClick={() => dispatch(toggle())}>
                    <ItemCount>{total}</ItemCount>
                    <StyledShoppingCartIcon />
                    </CartContainer>
                                    
                        
                    {loggedInUser?
                                <button
                                onClick={clearStorage}
                                className="transition ease-in-out delay-150 hover:text-[#c06460]  text-pink  rounded-full text-[#ff857e]"
                                >Logout</button>
                                :
                                <button
                                className="transition ease-in-out delay-150 hover:text-[#c06460]  text-pink  rounded-full text-[#ff857e]"
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