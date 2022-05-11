import React, { useState, useEffect } from "react";

import './Header.css';

import moon from '../../assets/moon.svg';
import down from '../../assets/down.svg';

function Header() {

    const [toggleMenu, setToggleMenu] = useState(false);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, []);

    return (
        <nav role="navigation">
            <h1>
                <img src={moon} alt="moon" width={30} height={30}  />
                <span>Moon</span>
            </h1>
            {(toggleMenu || screenWidth > 640) && (
            <ul className="navbar">
                <div>
                    <li>Buy Crypto</li>
                    <ul className="downs">
                        <li className="dropdown">
                            Business
                            <img src={down} alt="down" width={20} height={10} />
                        </li>
                        <div className="dropdowns">
                            <h3>Products</h3>
                            <div className="top">
                                <li>On- and off-ramps</li>
                                <li>NFT Checkout</li>
                                <button>Partner login</button>
                            </div>
                            <div className="studies">
                                <h3>Case Studies</h3>
                                <li>Bitcoin.com</li>
                                <li>BRD</li>
                                <li>Changelly</li>
                            </div>
                        </div>
                    </ul>
                </div>
                <div>
                    <li>About Us</li>
                    <li>Career</li>
                    <li>Blog</li>
                    <li>Help Center</li>
                </div>
            </ul>
            )}
            <button onClick={toggleNav} className="btn">=</button>
        </nav>
    );
}

export default Header;